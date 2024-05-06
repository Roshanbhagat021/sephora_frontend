// Chakra UI
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
// import { Button} from "@chakra-ui/react";
// logos
import rewards from "../assets/rewards.svg";
import card from "../assets/card.svg";
import { cart } from "../../public/Svgs";
// Recat icons
import { PiVanThin } from "react-icons/pi";

// NOTE basket
import { LiaShoppingBasketSolid } from "react-icons/lia";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Basket = () => {
  const { isAuth } = useContext(AuthContext);

  const [basketItem, setBasketItem] = useState([]);

  useEffect(() => {
    if (isAuth) {
      const basketItems = JSON.parse(localStorage.getItem("basket")) || [];
      setBasketItem(basketItems);
    }
  }, [setBasketItem, isAuth]);

  const removeItem = (ind) => {
    const updatedBasket = [...basketItem];
    updatedBasket.splice(ind, 1);
    setBasketItem(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Menu isOpen={open} onClose={handleClose}>
        <MenuButton
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          onClick={() => setOpen(!open)}
          className=" flex items-center bg-transparent"
        >
       <div className="w-[30px]">
            {cart}
          </div>
        </MenuButton>
        <MenuList
        w={{base: "310px", md: "384px" }} 
        
        right={{ base:"-6",sm: "", md:"-100px"}}
          // w="384px"
        
        
          position="absolute"
          top={-2}
          // right={-20}
          className="border w-96 bg-[#F6F6F8] rounded-md"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          autoFocus={false}
        >
          <MenuItem bg="white" className="px-3 py-4 font-bold rounded-t-md">
            Basket
          </MenuItem>
          <MenuItem
            bg="white"
            className="py-6 border-t-2 rounded-b-lg px-3 font-bold text-sm bg-white flex-col w-full"
          >
            {basketItem.length > 0 ? (
              <div>
                {basketItem.map((ele, ind) => (
                  <Box
                    display="flex"
                    w="100%"
                    p={2}
                    key={ele.map}
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
                      borderRadius: "5px",
                    }}
                  >
                    <Box>
                      <Image
                        w="200px"
                        src={ele.images[0]}
                        alt="product image"
                      />
                    </Box>
                    <Box>
                      <Text className="text-xs">{ele.title}</Text>
                      <Text className="text-xs font-normal" mt={3}>
                        {ele.paragraph}
                      </Text>
                      <Text className="text-xs" mt={10}>
                        {ele.moreDetails.size}
                      </Text>
                    </Box>
                    <Box className="flex-col text-center">
                      <Link
                        className="text-xs font-normal text-blue-500"
                        to="/}"
                      >
                        View All
                      </Link>
                      <Text mt={5}>{ele.price}</Text>
                      <Button
                        onClick={() => removeItem(ind)}
                        mt={9}
                        bg="black"
                        color="white"
                        border="1px solid"
                        fontSize="10px"
                        h={5}
                        w={20}
                      >
                        Remove Item
                      </Button>
                    </Box>
                  </Box>
                ))}
              </div>
            ) : (
              <>
                <p className="font-bold text-2xl">Your cart is empty.</p>
              </>
            )}
          </MenuItem>

          <MenuItem bg="white" className="px-3 py-4 gap-4 bg-white border-t-2">
            <img src={rewards} alt="rewards" />
            <p className="text-xs">
              See sample, rewards, and promos in{" "}
              <span className="text-blue-600 underline">basket</span>
            </p>
          </MenuItem>
          <MenuItem bg="white" className="px-3 py-4 gap-4 bg-white border-t-2">
            <PiVanThin className="text-2xl" />
            <p className="text-xs">
              Beauty Insiders enjoy <strong>FREE standard shipping</strong> on
              all orders.
            </p>
          </MenuItem>
          <MenuItem
            bg="white"
            className=" px-4 py-4 gap-4 bg-white border-t-2 flex-col rounded-b-md"
          >
            <div className="flex gap-4">
              <div>
                <img src={card} alt="card" />
              </div>
              <div className="text-xs">
                <h2 className="font-bold">The Sephora Credit Card Program</h2>
                <p>
                  Save 25% on this order when you open and use either Sephora
                  Credit Card today*
                </p>
              </div>
            </div>
            <div className="w-full pl-9">
              <button className=" hover:bg-zinc-50 border border-slate-950 text-xs font-bold px-4 py-2 rounded-full">
                SEE DETAILS
              </button>
              <p className="text-xs mt-2">
                *Subject to credit approval. Exclusions apply.
              </p>
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
export default Basket;
