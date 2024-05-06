import { Box, SimpleGrid, Text, Image, Input, Button } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { TbBrandYoutube } from "react-icons/tb";
import { FaPinterestP } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Logout from "./Logout";
const Footer = () => {
const {isAuth}=useContext(AuthContext)


  return (
    <>
      <Box
      id="feedBack"
        className="hover:underline "
        mt={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={14}
        fontWeight={700}
        h={10}
        bg="#CCCCCC"
      >
        Website feedback? Let us know ▸
      </Box>
      <SimpleGrid id="footerContainer1" bg="black" >
        <Box
          color="white"
          display="flex"
          justifyContent="space-between"
          my={10}
          mx={36}
          id="footerContainer1Child"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <FaMapMarkerAlt className="text-2xl" />
            <Box>
              <Text fontSize={13} className=" hover:underline" fontWeight={700}>
                Find a Store
              </Text>
              <Text fontSize={11}>Choose Your Store</Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <BiMessageRounded className="text-2xl" />
            <Box>
              <Text fontSize={13} className=" hover:underline" fontWeight={700}>
                Customer Service
              </Text>
              <Text fontSize={11}>Available</Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <IoCloudDownloadOutline className="text-2xl" />
            <Box>
              <Text fontSize={13} className=" hover:underline" fontWeight={700}>
                Get the App
              </Text>
              <Text fontSize={11}>Download Now</Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <FaMobileScreenButton className="text-2xl" />
            <Box>
              <Text fontSize={13} className=" hover:underline" fontWeight={700}>
                Get Sephora Text Alerts
              </Text>
              <Text fontSize={11}>Sign up Now</Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <HiOutlineCreditCard className="text-2xl" />
            <Box>
              <Text fontSize={13} className=" hover:underline" fontWeight={700}>
                Sephora Credit Card Program
              </Text>
              <Text fontSize={11}>
                Want 25% off your Sephora purchase1? DETAILS
              </Text>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid id="footerContainer2" bg="black">
        <hr id="hr2" className="border mx-32" />
        <Box
          bg="black"
          display="flex"
          justifyContent="space-between"
          my={10}
          mx={32}
          id="footerContainer2Child"
        >
          <Box color="white">
            <Text fontWeight={700}>About Sephora</Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              About Sephora
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Newsroom
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Careers
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Values
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Supply Chain Transparency
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Affiliates
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Events
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Gift Cards
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Global Sites
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Diversity, Equity & Inclusion
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Accelerate
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Beauty (Re)Purposed
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Report a Vulnerability
            </Text>
          </Box>
          <Box color="white">
            <Text fontWeight={700}>My Sephora</Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              About Sephora
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Newsroom
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Careers
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Values
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Supply Chain Transparency
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Affiliates
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Events
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Gift Cards
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Global Sites
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Diversity, Equity & Inclusion
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Accelerate
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Beauty (Re)Purposed
            </Text>
          </Box>
          <Box color="white">
            <Text fontWeight={700}>Help</Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              About Sephora
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Newsroom
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Careers
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Values
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Supply Chain Transparency
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Affiliates
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Events
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Gift Cards
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Global Sites
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Diversity, Equity & Inclusion
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Sephora Accelerate
            </Text>
            <Text fontWeight={500} className="text-xs" lineHeight={8}>
              Beauty (Re)Purposed
            </Text>
          </Box>
          <Box color="white">
            <Text fontWeight={700}>Region & Language</Text>
            <Box display="flex" gap={4} mt={4}>
              <Image w={6} src="https://www.sephora.com/img/ufe/flags/us.svg" />
              <Text className="text-xs">United States - English</Text>
            </Box>
            <Box display="flex" gap={6} mt={4}>
              <Image w={6} src="https://www.sephora.com/img/ufe/flags/ca.svg" />
              <Text className="text-xs">Canada - English</Text>
            </Box>
            <Box display="flex" gap={6} mt={4}>
              <Image w={6} src="https://www.sephora.com/img/ufe/flags/ca.svg" />
              <Text className="text-xs">Canada - Français</Text>
            </Box>
          </Box>
          
          <Box id="inputDiv" color="white">
            <Box id="inputDivText" className="text-3xl font-bold">
              We Belong to <br /> Something Beautiful
            </Box>
            <Box id="inputDiv2" mt="10em">
              <Text className="text-sm font-bold">
                Sign up for Sephora text updates
              </Text>
              <Box display="flex" mt={3} gap={6}>
                <Input background="white" placeholder="Mobile Phone Number" />
                <Button
                  w={32}
                  borderRadius="20px"
                  bg="transparent"
                  color="white"
                  border="2px solid white"
                  fontSize="13px"
                >
                  Continue
                </Button>
              </Box>
            </Box>
            <Box mt={8}>
              <Text className="text-sm font-bold">
                Sign up for Sephora Emails
              </Text>
              <Box display="flex" mt={3} gap={6}>
                <Input
                  background="white"
                  placeholder="Enter your email address"
                />
                <Button
                  w={32}
                  borderRadius="20px"
                  bg="transparent"
                  color="white"
                  border="2px solid white"
                  fontSize="13px"
                >
                  Signup  
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <hr id="hr3" className="border mx-32" />

        <Box
        id="lastFooter"
          color="white"
          alignItems="center"
          display="flex"
          mx={32}
          mt={10}
          pb={24}
          justifyContent="space-between"
        >
          <Box fontSize={12}>
            <Text>© 2024 Sephora USA, Inc. All rights reserved.</Text>
            <Box id="lastText" display="flex" fontSize={12} gap={6} mt={2}>
              <Text>Privacy Policy</Text>
              <Text>Terms of Use</Text>
              <Text>Accessibility</Text>
              <Text>Sitemap</Text>
              <Box display="flex" gap={1} alignItems="center">
                <Text>Your Privacy Choices</Text>
                <Image
                  w={5}
                  src="https://www.sephora.com/img/ufe/icons/opt-out.svg"
                />
              </Box>
            </Box>

            <Text id="privacyNumber" mt={2}>1-877-737-4672 TTY: 1-888-866-9845</Text>
          </Box>
          <Box id="logoDiv" display="flex" fontSize={30} gap={6}>
            <FaInstagram />
            <FaSquareFacebook />
            <SlSocialTwitter />
            <TbBrandYoutube />
            <FaPinterestP />
            <FaSnapchat />
            <SiTiktok />
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Footer;
