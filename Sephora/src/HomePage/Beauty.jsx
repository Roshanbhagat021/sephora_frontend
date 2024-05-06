//NOTE react slider
import Slider from "react-slick";
//NOTE react slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import { Box, Button, Text, Image } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

// Beauty section
//NOTE JSON data
// import { beautyProduct } from "../db2.js";
export const Beauty = () => {
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


  var settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
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
      <div id="beautyContainer" className="px-32 pt-12  w-[100%] m-auto">
        <div id="beautyHeading" className="flex items-center justify-between ">
          <Text className="font-bold text-xl">Beauty Offers (17)</Text>
          <Link className="text-blue-600 hover:underline">View all</Link>
        </div>

        <div className=" bg-white mt-2 ">
          <Slider {...settings}>
            {data.map((ele) => (
              <Box
                border="1px solid darkgrey"
                h="416px"
                className="full"
                key={ele.id}
              >
                <Box>
                  <Image
                    className="rounded-t-md"
                    margin="auto"
                    src={ele.images[0]}
                    alt="images"
                  />
                </Box>
                <Box
                  h="fit-content"
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  alignItems="center"
                >
                  <Box h={165} px={3}>
                    <Text mt={2} fontSize={15} fontWeight={700}>
                      {ele.products1.title}
                    </Text>
                    <Text mt={0.5} fontSize={14} color="black">
                      {ele.products1.paragraph}
                    </Text>
                    <Text mt={0.8} fontSize={12} color="#666666">
                      {ele.products1.para2}
                    </Text>
                    <Text mt={1} fontSize={12} color="#666666">
                      {ele.products1.para3}
                    </Text>
                  </Box>
                  <Box
                    mt={4}
                    mb={5}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                    width="100%"
                  >
                    <Button
                      style={{ borderRadius: "20px" }}
                      _hover={{ bg: "whitesmoke" }}
                      fontSize={11}
                      fontWeight={700}
                      border="2px solid"
                      px={8}
                      h={6}
                      bg="white"
                    >
                      {ele.id === 4 ? "Download App" : ele.products1.btn}
                    </Button>
                    <Link
                      className="text-sm text-blue-600 hover:underline hover:bg-slate-50 "
                      to={ele.id}
                    >
                      {ele.products1.link}
                    </Link>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
          <hr id="hr-2" className="border mx-1 mt-10" />
        </div>
      </div>
    </>
  );
};
