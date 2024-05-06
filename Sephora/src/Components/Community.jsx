// ANCHOR icon
import { GoBell } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
// ANCHOR logos
import signlogo from "../assets/sign-logo.svg";
// import home from "../assets/home.avif";
import groups from "../assets/groups.avif";
import gallery from "../assets/gallery.avif";
import { communitySvg,home } from "../../public/Svgs";
// Chakra UI
import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";


// Components
import Login from "../HomePage/Login";
import { useContext, useState } from "react";
import Logout from "../HomePage/Logout";
import { AuthContext } from "../Context/AuthContext";
// NOTE community
const Community = () => {
  const [open, setOpen] = useState(false);
  const {isAuth,userdetail}=useContext(AuthContext)
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Menu 
      isOpen={open} onClose={handleClose}>
        <MenuButton
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          onClick={() => setOpen(!open)}
          // as={Button}
          className=" flex hover:border-b border-slate-900 items-center"
        >
          <Box className="flex gap-3 items-center">
            {/* <IoIosPeople fontSize={28} fontWeight="500" /> */}
            <div className="w-[30px]">
            {communitySvg}
          </div>
            <Box>
              <Text id="com" className="font-medium">Community</Text>
            </Box>
          </Box>
        </MenuButton>
        <MenuList
        w={{base: "310px", md: "384px" }} 
        
        right={{ base:"-190",sm: "", md:"-200px", xl:"-260px"}}
          // w="384px"
          h="530px"
          className="border rounded-md "
          position="absolute"
          top={-2}
          // right={-260}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          autoFocus={false}
          
        >
          <div
          id="community_Profile"
            className="overflow-auto overflow-x-hidden"
            style={{ height: "520px" }}
          >
            <MenuItem
              bg="white"
              className="flex-col px-3 pt-3 pb-3 gap-2 rounded-t-md"
            >
              <div className="w-full flex gap-3 items-center">
                <div>
                  <img className="w-12" src={signlogo} alt="" />
                </div>
                <div>
                  <h2 className="font-bold">Community Profile</h2>
                  <p className="text-xs">Sing in to see your profile</p>
                </div>
                <div className=" pl-10 flex gap-3">
                  <GoBell className="w-14 text-xl" />
                  <AiOutlineMail className="text-xl" />
                </div>
              </div>
              {!isAuth?<Login />:<Logout/>}
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-5  border">
              <div className="flex gap-3">
              <div className="w-[30px]">
            {home}
          </div>
                <div>
                  <h4 className="font-thing">Community Home</h4>
                  <p className="text-xs">
                    Ask questions, join challenges, and get recommendations from
                    people like you
                  </p>
                </div>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-3  border">
              <div className="flex gap-3">
                <img className="size-14" src={groups} alt="groups" />
                <div>
                  <h4 className="font-thing">Groups</h4>
                  <p className="text-xs">
                    Discover topics tailored to your beauty interests
                  </p>
                </div>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-3  border">
              <div className="flex gap-3">
                <img className="size-14" src={gallery} alt="gallery" />
                <div>
                  <h4 className="font-thing">Gallery</h4>
                  <p className="text-xs">
                    Add your photos and videos and get inspired by fellow beauty
                    lovers
                  </p>
                </div>
              </div>
            </MenuItem>
            <MenuItem
              bg="white"
              className="mt-1 px-3 pt-3 pb-3 border flex-col"
            >
              <h2 className="w-full font-bold ">Featured Groups</h2>
              <p className="w-full leading-loose hover:underline ">
                Trending at Sephora
              </p>
              <p className="w-full leading-loose hover:underline ">
                Deeper Shades
              </p>
              <p className="w-full leading-loose hover:underline ">
                Fragrance Fans
              </p>
            </MenuItem>
            <MenuItem bg="white" className=" px-3 pt-3 pb-3 border flex-col">
              <h2 className="w-full font-bold ">Featured Posts</h2>
              <p className="w-full leading-loose hover:underline ">
                Join our Self-Care Check-In Challenge!
              </p>
              <p className="w-full leading-loose hover:underline ">
                Share your Capsule Makeup Collections
              </p>
              <p className="w-full leading-loose hover:underline ">
                Monthly Favs: Share your Top Products!
              </p>
            </MenuItem>
          </div>
        </MenuList>
      </Menu>
    </>
  );
};

export default Community;
