// Chakra UI
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";

// NOTE Loved
import { PiHeartStraightThin } from "react-icons/pi";
import { useContext, useState } from "react";
import Login from "../HomePage/Login";
import { AuthContext } from "../Context/AuthContext";
import Logout from "../HomePage/Logout";
const Loved = () => {
  const {isAuth}= useContext(AuthContext)
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
          // as={Button}
          className=" flex items-center bg-transparent"
        >
          <PiHeartStraightThin className="text-3xl" />
        </MenuButton>
        <MenuList

w={{base: "310px", md: "384px" }} 
        
right={{ base:"-82",sm: "", md:"-100px",}}
  // w="384px"



        position="absolute"
        top={-2}
        // right={-20}
          className="border w-96 bg-[#F6F6F8] rounded-md"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          autoFocus={false}
        >
          <MenuItem className="px-3 py-4 font-bold bg-white rounded-t-md">
            Recently Loved
          </MenuItem>
          <MenuItem className="py-6 border-t-2 rounded-b-lg px-3 font-bold text-sm bg-white flex-col w-full">
            <div className="text-center mb-4">
              Use your Loves list to keep track of your favorite products.
            </div>
            {!isAuth?<Login />:<Logout/>}
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
export default Loved;
