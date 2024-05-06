// import { Link } from "react-router-dom";

import New from "../ProductPages/New";

const MainNavbar = () => {
  return (
    <>
      <div id="bropDowncontain" className="border flex justify-between items-center text-white h-10 bg-black px-32">
        <a className="bathBody" href="">New
        <New/>
        </a>
        <a className="bathBody" href="">Brands
        <New/>
        </a>
        <a className="bathBody" href="">Makeup
        <New/>
        </a>
        <a className="bathBody" href="">Skincare
        <New/>
        </a>
        <a className="bathBody" href="">Hair
        <New/>
        </a>
        <a className="bathBody" href="">Fragrance
        <New/>
        </a>
        <a className="bathBody" href="">Tools & Brushes
        <New/>
        </a>
        <a className="bathBody" href="">Bath & Body
        <New/>
        </a>
        <a className="bathBody" href="">Mini Size
        <New/>
        </a>
        <a className="bathBody" href="">Gifts & Gift Cards
        <New/>
        </a>
        <a className="bathBody" href="">Beauty Under $20
        <New/>
        </a>
        <a className="bathBody" href="">Sale & Offers
        <New/>
        </a>
      </div>
    </>
  );
};

export default MainNavbar;
