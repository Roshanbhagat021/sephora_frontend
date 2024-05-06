//NOTE react slider
import Slider from "react-slick";
import { data } from "../db.js";
//NOTE react slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import { Button, Text } from "@chakra-ui/react";

// Selling
export const Selling = ({ heading }) => {
  var settings = {
    infinite: false,
    speed: 500,
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
    <div id="sellingContainer" className="px-32 pt-12  w-[100%] m-auto">
      <div className="sellingHeading">
        <h1 className="font-bold text-xl">{heading}</h1>
      </div>

      <div className=" bg-white mt-2">
        <Slider {...settings}>
          {data.map((ele) => (
            <Link key={ele.id}>
              <div
                id="productList"
                className="mt-2 bg-[#FFFFFF] p-[16px] rounded"
              >
                <div>
                  <img
                    className="h-[166px] w-[166px] m-auto"
                    src={ele.images[1]}
                    alt="product image"
                  />
                  <Button
                    _hover={{ bg: "dimgray" }}
                    fontSize="12"
                    fontWeight={700}
                    color="white"
                    bg="rgba(0, 0, 0, 0.7)"
                    w="85%"
                    h={7}
                    id="btn"
                    top={40}
                  >
                    {ele.btn}
                  </Button>
                  <Text
                    position={"absolute"}
                    top={5}
                    fontSize={10}
                    px={1}
                    fontWeight={700}
                    bg="black"
                    color="white"
                    border={"1px solid"}
                  >
                    {ele.offer}
                  </Text>
                </div>
                <div className="mt-1">
                  <h3 className="font-bold text-xs">{ele.title}</h3>
                  <p className="mt-.5 text-sm font-medium text-black">
                    {ele.paragraph.slice(0, 41)}
                  </p>
                  <p className="font-bold mt-1 text-black">{ele.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};
