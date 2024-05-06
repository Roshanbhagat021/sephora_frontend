//NOTE react slider
import Slider from "react-slick";
// import { beautyProduct } from "../db2.js";
//NOTE react slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import { Box, Button, Text, Image } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

// rewards
export const Rewards = () => {

  const {isAuth}=useContext(AuthContext)

  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await axios.get("https://sephora-backend-h87w.onrender.com/products/beautyoffer");
      setData(res.data);
      console.log('res.data: ', res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, [isAuth]);

  const limitedData = data.slice(0, 15);
  // console.log('limitedData: ', limitedData);
  var settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="rewardsContainer" className="px-32 pt-12  w-[100%] m-auto ">
        <div
          id="reawardsHeading"
          className="flex items-center justify-between "
        >
          <Text className="font-bold text-xl">Beauty Insider Rewards</Text>
          <Link className="text-blue-600 hover:underline">View all</Link>
        </div>
        <Text>Sign in to redeem your points.</Text>

        <div className=" bg-white mt-2">
          <Slider {...settings}>
            {limitedData.map((ele) => (
              <Box
                position="relative"
                border="1px solid darkgrey"
                className="full"
                key={ele.id}
              >
                <Box>
                  <Image
                    className="rounded-t-md"
                    margin="auto"
                    src={ele.images[1]}
                    alt="images"
                  />
                  <Box
                    display="flex"
                    justifyContent="center"
                    className="btnCon"
                    w="100%"
                    h="100%"
                    top={44}
                    left={0}
                    position="absolute"
                    opacity={0}
                  >
                    <Button
                      _hover={{ bg: "dimgray" }}
                      fontSize="12"
                      fontWeight={700}
                      color="white"
                      bg="rgba(0, 0, 0, 0.7)"
                      w="85%"
                      h={7}
                    >
                      {ele.products1.btn2}
                    </Button>
                  </Box>
                </Box>
                <Box
                  h="fit-content"
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  alignItems="center"
                >
                  <Box px={3}>
                    <Text fontSize={13} fontWeight={700}>
                      {ele.products2.title}
                    </Text>
                    <Text fontSize={13} color="black">
                      {ele.products2.paragraph}
                    </Text>
                    <Text fontSize={14} fontWeight={700}>
                      {ele.products2.coins}
                    </Text>
                  </Box>
                  <Box mb={5} pl={3} width="100%">
                    <Button
                      style={{ borderRadius: "20px" }}
                      _hover={{ bg: "whitesmoke" }}
                      fontSize={12}
                      fontWeight={700}
                      border="2px solid"
                      px={3}
                      h={8}
                      bg="white"
                    >
                      {ele.products2.btn}
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
          <hr id="hr-1" className="border mx-1 mt-10" />
        </div>
      </div>
    </>
  );
};
