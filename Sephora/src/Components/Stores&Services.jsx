// NOTE store
import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { Link, Text } from "@chakra-ui/react";
import { LuMapPin } from "react-icons/lu";
//ANCHOR image
import storageImage1 from "../assets/storage-makeup-1.svg";
import storageImage2 from "../assets/storage-makeup-2.svg";
import storageImage3 from "../assets/storage-makeup-3.svg";
import storageImage4 from "../assets/storage-makeup-4.svg";

// import { LiaStoreAltSolid } from "react-icons/lia";
import { home } from "../../public/Svgs";
import { useState } from "react";
const Store = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Menu isOpen={open} onClose={handleClose}>
      <MenuButton
      
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={() => setOpen(!open)}
        className=" flex items-center hover:border-b border-slate-900"
      >
        <Box id="storageButton" className="flex gap-2 items-center">
          {/* <LiaStoreAltSolid className=" text-2xl " /> */}
          <div className="w-[30px]">
            {home}
          </div>
          <Box id="textDiv1">
            <Text fontWeight="500">Stores & Services</Text>
            <Text fontWeight={200} fontSize="12px" textAlign="left">
              Choose Your Store
            </Text>
          </Box>
        </Box>
      </MenuButton>

      <MenuList

w={{base: "300px", md: "384px" }} 
        
right={{ base:"-60",sm: "", md:"-200px", xl:"-260px"}}

      className="storageDiv1"
        // w="384px"
        bg="#F6F6F8"
        h="517px"
        position="absolute"
        // right={-260}
        top={-2}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        autoFocus={false}
      >
        <MenuItem
          bg="white"
          className="flex -mt-2 items-center justify-center h-20 border bg-white rounded-t-md"
        >
          <button className=" rounded-full border font-bold bg-black text-white text-xs px-4 py-2">
            Choose Your Store
          </button>
        </MenuItem>
        <MenuItem bg="white" mt={1.5} h={14} fontSize={15}>
          <LuMapPin />
          <span className="font-bold px-2 hover:underline">Find a Sephora</span>
        </MenuItem>
        <MenuItem bg="white" mt={1.5} pt={4} pb={4}>
          <div className="flex gap-3">
            <img src={storageImage1} alt="images1" />
            <div>
              <h4 className="font-medium">Makeup Services</h4>
              <p className="text-xs">
                One-on-one makeup application or beauty lesson
              </p>
            </div>
          </div>
        </MenuItem>
        <MenuItem bg="white" className="border-t-2" pt={3} pb={4}>
          <div className="flex gap-3">
            <img src={storageImage2} alt="images1" />
            <div>
              <h4 className="font-medium">Skincare Services</h4>
              <p className="text-xs">
                Hydrating and exfoliating Perk treatments by Hydrafacial™
              </p>
            </div>
          </div>
        </MenuItem>
        <MenuItem bg="white" className="border-t-2" pt={3} pb={4}>
          <div className="flex gap-3">
            <img src={storageImage3} alt="images1" />
            <div>
              <h4 className="font-medium">Waxing Services</h4>
              <p className="text-xs">
                Expert grooming for brows, upper lip, or chin
              </p>
            </div>
          </div>
        </MenuItem>
        <MenuItem bg="white" className="border-t-2" pt={3} pb={4}>
          <div className="flex gap-3">
            <img src={storageImage4} alt="images1" />
            <div>
              <h4 className="font-medium">Events</h4>
              <p className="text-xs">
                Learn about brands, try new products, and more at our in-store
                events
              </p>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          bg="white"
          className="rounded-b-lg"
          fontSize={14}
          mt={1.5}
          pt={2}
          h={12}
          gap={3}
          display="flex"
        >
          <Link color="blue" className="hover:underline">
            My Reservations
          </Link>
          <h1>|</h1>
          <Link color="blue" className="hover:underline">
            Beauty Service FAQs
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Store;
