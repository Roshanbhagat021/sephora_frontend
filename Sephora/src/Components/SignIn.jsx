// logos
import signlogo from "../assets/sign-logo.svg";
import round from "../assets/threeRound.svg";
import mark from "../assets/mark.svg";
import order from "../assets/order.svg";
import auto from "../assets/auto-replenish.svg";
import heart from "../assets/heart.svg";
import account from "../assets/account.svg";
import card from "../assets/card.svg";
import reserv from "../assets/reservations.svg";
import recomen from "../assets/recommendations.svg";
import { girl } from "../../public/Svgs";
// Chakra UI
import { Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import Login from "../HomePage/Login";
// react icon
import { VscLock } from "react-icons/vsc";
import { AuthContext } from "../Context/AuthContext";
import Logout from "../HomePage/Logout";
// NOTE signin
const Signin = () => {
 
  const {isAuth,userdetail}=useContext(AuthContext)
  console.log('userdetail: ', userdetail);
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
          className=" flex hover:border-b border-slate-900 items-center "
        >
          <div  className="flex gap-3 items-center">
          <div className="w-[30px]">
            {girl}
          </div>
            {!isAuth ? 
             <div>
              
              <h3 id="signText" className="font-medium text-start">Sign in</h3>
              <p id="free" className="text-xs">for FREE Shipping 🚚</p>
            </div>: <div>
              <h2 >Welcome {userdetail?.name}</h2>
            </div>
             }
           
          </div>
        </MenuButton>
        <MenuList

w={{base: "300px", md: "384px" }} 
        
right={{ base:"-120",sm: "", md:"-200px", xl:"-260px"}}


        position="absolute"
        // right={-260}
        top={-2}
        
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          autoFocus={false}
          className="border w-96 bg-[#F6F6F8] rounded-md "
        >
          <MenuItem
            bg="white"
            className="flex-col px-3 pt-3 pb-3 gap-2 rounded-t-md"
          >
            <div className="w-full flex gap-3 items-center">
            <div className="w-[30px]">
            {girl}
          </div>
              <div>
                <h2 className="font-bold">Good morning, Beautiful. ☀️</h2>
                <p className="text-xs">
                  Sing in for <span>FREE standard shipping</span> on all orders.
                </p>
              </div>
            </div>
            {!isAuth?<Login />:<Logout/>}
          </MenuItem>
          <div
            className="overflow-auto overflow-x-hidden rounded-b-lg"
            style={{ height: "435px" }}
          >
            <MenuItem bg="white" className="px-3 py-3 flex-col border">
              <div className="w-full flex items-center gap-3">
                <img src={round} alt="Beauty round" />
                <h2 className="hover:underline font-medium text-sm">
                  Beauty Preferences
                </h2>
                <div className="w-28 h-2 ml-10 bg-[#F6F6F8] rounded-full"></div>
              </div>
              <p className="text-xs w-full">
                Complete to see your personallzed recommendations
              </p>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-2 flex border">
              <div className="w-full">
                <h2 className="hover:underline font-medium text-sm">
                  Beauty Insider Summary
                </h2>
                <p className="text-xs">View activity savings, benefits</p>
              </div>
              <h1 className="mr-6 font-mono text-xl">INSIDER</h1>
            </MenuItem>
            <MenuItem
              bg="white"
              className="px-3 py-2 flex justify-between border"
            >
              <div>
                <h2 className="font-medium hover:underline text-sm">Rewards Bazaar</h2>
                <p className="text-xs">Redeem items, samples, more</p>
              </div>
              <div className="mr-6">
                <h2 className="font-bold">0</h2>
                <p>Points</p>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-2 flex-col border">
              <h2 className="font-medium w-full hover:underline text-sm">
                Beauty Insider Challenges{" "}
                <span className="bg-black text-white text-xs rounded-sm">
                  NEW
                </span>
              </h2>
              <p className="text-xs w-full">
                Earn points when you complete tasks
              </p>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-2 gap-3 border">
              <div>
                <img src={mark} alt="mark" />
              </div>
              <div>
                <h2 className="font-medium hover:underline text-sm">Buy it Again</h2>
                <p className="text-xs">
                  Reorder from in-store and online purchases
                </p>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-2 gap-3 border">
              <div>
                <img src={order} alt="order" />
              </div>
              <div>
                <h2 className="font-medium hover:underline text-sm">Orders</h2>
                <p className="text-xs">View & track online or pickup orders</p>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-2 gap-3  border">
              <div>
                <img src={auto} alt="auto refrese" />
              </div>
              <div>
                <h2 className="font-medium hover:underline text-sm">Auto-Replenish</h2>
                <p className="text-xs">View and manage your aubscriptions</p>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-2 gap-3 border">
              <div>
                <img src={heart} alt="heart" />
              </div>
              <div>
                <h2 className="font-medium hover:underline text-sm">Loves</h2>
                <p className="text-xs">View saved products</p>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-2 gap-3 border">
              <div>
                <img src={account} alt="account" />
              </div>
              <div>
                <h2 className="font-medium hover:underline text-sm">Account Setting</h2>
                <p className="text-xs">
                  Payment, contact info, addresses, password
                </p>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-2 gap-3 border">
              <div>
                <img src={card} alt="card" />
              </div>
              <div>
                <h2 className="font-medium hover:underline text-sm">
                  Sephora Credit Card Program
                </h2>
                <p className="text-xs">Apply</p>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-2 gap-3 border">
              <div>
                <VscLock className="text-2xl" />
              </div>
              <div>
                <h2 className="font-medium hover:underline text-sm">
                  Same-Day Unlimited
                </h2>
                <p className="text-xs">Get Unlimited Free Same-Day Delivery</p>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 py-2 gap-3 border">
              <div>
                <img src={reserv} alt="reservations" />
              </div>
              <div>
                <h2 className="font-medium hover:underline text-sm">Reservations</h2>
                <p className="text-xs">Manage your services, classes, events</p>
              </div>
            </MenuItem>
            <MenuItem bg="white" className="px-3 pb-5 py-2 gap-3 border">
              <div>
                <img src={recomen} alt="card" />
              </div>
              <div>
                <h2 className="font-medium hover:underline text-sm">
                  Beauty Advisor Recommendations
                </h2>
                <p className="text-xs">
                  Recommendations from your store visits
                </p>
              </div>
            </MenuItem>
          </div>
        </MenuList>
      </Menu>
    </>
  );
};
export default Signin;
