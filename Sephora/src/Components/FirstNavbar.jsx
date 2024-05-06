// NOTE Components
import Search from "./Search";
import Store from "./Stores&Services";
import Community from "./Community";
import Signin from "./SignIn";
import Loved from "./Loved";
import Basket from "./Basket";
import Logo, { FreeTrial } from "./FreeTrail&Logo";

// NOTE First nav bar
const FirstNavbar = () => {
  return (
    <>
      <FreeTrial />
      
      <div id="firstNavbar" className="flex items-center h-24 px-28">
        <Logo />
        <Search />
        <div id="firstNavbarRightSection" className="flex gap-6 items-center">
          <Store />
          <Community />
          <h2 id="hr_nav" className="text-2xl font-thin">|</h2>
          <Signin />
          <Loved />
          <Basket />
        </div>
      </div>
    </>
  );
};

export default FirstNavbar;
