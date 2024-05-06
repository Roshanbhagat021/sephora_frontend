import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Slide,
  Image,
  Box,
  Text,
  Select,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useToast } from "@chakra-ui/react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export const Quickview = ({ QuickOpen2, QuickClose, selectedProduct }) => {
  const sizes = ["xs", "sm", "md", "lg", "xl", "2xl"];
  const { isAuth } = useContext(AuthContext);

  const toast = useToast();
  const addToBasket = () => {
    if (isAuth) {
      const basketItems = JSON.parse(localStorage.getItem("basket")) || [];

      basketItems.push(selectedProduct);

      localStorage.setItem("basket", JSON.stringify(basketItems));
      QuickClose();
      console.log("Yes");

      toast({
        title: "Item Added successfully to cart",
        status: "success",
        duration: 3000,
        isClosable: true,
        icon: <IoCheckmarkDoneCircle />,
        transition: Slide,
      });
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <Modal isOpen={QuickOpen2} onClose={QuickClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent border="2px solid red" width="60%" >
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          {selectedProduct && (
            <ModalBody className="flex">
              <Box className="flex-col">
                <Box className="w-80 h-60 ">
                  <Image
                    className="m-auto"
                    h="100%"
                    src={selectedProduct.images[0]}
                    alt="Product Image"
                  />
                </Box>
                <Box className="flex items-center justify-evenly mt-20">
                  <Text className="font-bold text-sm">
                    {selectedProduct.moreDetails.rating}
                  </Text>
                  <hr style={{ width: "2px" }} className="h-4 bg-[#EDF2F7] " />
                  <Text className="font-bold text-sm">
                    {selectedProduct.moreDetails.loves}
                  </Text>
                </Box>
                <Text className=" pl-28 mt-3 font-bold text-sm">
                  {selectedProduct.moreDetails.message}
                </Text>
              </Box>
              <Box>
                <Box>
                  <Text className="font-bold">{selectedProduct.title}</Text>
                  <Text className="leading-4">{selectedProduct.paragraph}</Text>
                  <Text className="text-xs mt-2">
                    {selectedProduct.moreDetails.itemNo}
                  </Text>
                  <Text className="mt-5 leading-5">
                    {selectedProduct.moreDetails.discription}
                  </Text>
                  <Text className="mt-10 text-sm">
                    {selectedProduct.moreDetails.size}
                  </Text>
                  <Text className="pl-48 text-blue-600 underline text-xs">
                    See Product details
                  </Text>
                  <Box className="border-slate-950 rounded-md border w-fit p-1 ">
                    {selectedProduct.moreDetails.sizeBox}
                    <Text
                      id="offer"
                      className=" rounded-sm bg-black text-white absolute ml-8 text-xs border-slate-950 border "
                    >
                      {selectedProduct.offer}
                    </Text>
                  </Box>
                </Box>
                <Box className="flex mt-10">
                  <Box>
                    <Text className="mt-10 w-28 font-bold text-sm">
                      {selectedProduct.price}
                    </Text>
                  </Box>
                  <Box className="flex gap-1">
                    <Select style={{ width: "60px" }} placeholder="1">
                      <option value="1">2</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </Select>
                    <Box display="flex" className="ml-[200px]" flexDirection="column" gap={5}>
                      <Button
                        onClick={addToBasket}
                        style={{
                          background: "red",
                          color: "white",
                          borderRadius: "20px",
                          fontSize: "15px",
                        }}
                        className=""
                      >
                        Add to Basket
                      </Button>
                      <Button
                        style={{
                          background: "white",
                          border: "2px solid",
                          color: "black",
                          borderRadius: "20px",
                          fontSize: "12px",
                        }}
                      >
                        🤍 Add to Loves
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ModalBody>
          )}

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
