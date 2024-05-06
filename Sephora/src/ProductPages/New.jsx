import { Link } from "react-router-dom";
const New = () => {
  return (
    <div
      id="bathBodyDrop"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      className=" px-32 bg-white z-40 flex w-[100%] py-9 gap-24 absolute right-0"
    >
      <div className="flex text-sm leading-8 text-black bg-white gap-16 ">
        <ul id="product1">
          <li className="font-bold">
            <Link>All Bath & Body</Link>
          </li>
          <li className="font-bold">
            <Link>Bath & Shower</Link>
          </li>
          <li>
            <Link>Body Wash & Dhower Gel</Link>
          </li>
          <li>
            <Link>Scrubs & Exfoliants</Link>
          </li>
          <li>
            <Link>Hand Sanitizer & Hand</Link>
          </li>
          <li className="font-bold">
            <Link>Body Mosisturizers</Link>
          </li>
          <li>
            <Link>Body Lotions & Body Oils</Link>
          </li>
          <li>
            <Link>Hand Cream & Foot Cream</Link>
          </li>
          <li>
            <Link>Dryness / Dry Skin</Link>
          </li>
        </ul>
        <ul id="product2">
          <li className="font-bold">
            <Link>Deodorant & Antiperspirant</Link>
          </li>
          <li className="font-bold">
            <Link>Body Mist & Hair Mist</Link>
          </li>
          <li className="font-bold">
            <Link>Sunscreen</Link>
          </li>
          <li>
            <Link>Face Sunscreen</Link>
          </li>
          <li>
            <Link>Body Sunscreen</Link>
          </li>
          <li className="font-bold">
            <Link>Body Sunscreen</Link>
          </li>
          <li>
            <Link>Self Tanners</Link>
          </li>
          <li>
            <Link>Wellness</Link>
          </li>
          <li>
            <Link>Supplements</Link>
          </li>
          <li>
            <Link>Intimate Care & Vibrators</Link>
          </li>
          <li>
            <Link>Feminine Care</Link>
          </li>
        </ul>
        <ul id="product3">
          <li className="font-bold">
            <Link>Candles & Home Scents</Link>
          </li>
          <li className="font-bold">
            <Link>Shop By Concern</Link>
          </li>
          <li>
            <Link>Stretch Marks & Firming</Link>
          </li>
          <li>
            <Link>Dryness / Dry Skin</Link>
          </li>
          <li>
            <Link>Smooth Texture</Link>
          </li>
          <li>
            <Link>Even Skin Tone & Color Correctio</Link>
          </li>
        </ul>
        <ul id="product4">
          <li className="font-bold">
            <Link>New</Link>
          </li>
          <li className="font-bold">
            <Link>Bestsellers</Link>
          </li>
          <li className="font-bold">
            <Link>Mini Size</Link>
          </li>
          <li className="font-bold">
            <Link>Value Size</Link>
          </li>
          <li className="font-bold">
            <Link>Value & Gift Sets</Link>
          </li>
          <li className="font-bold">
            <Link>Sephora Collection</Link>
          </li>
          <li className="font-bold">
            <Link>Black-Owned Brands Bath & Body</Link>
          </li>
        </ul>
      </div>
      <div>
        <img
          src="https://www.sephora.com/contentimages/meganav/large/2023-8-7-sc-sku-site-desktop-global-navigation-button-en-us.jpg?imwidth=294"
          alt="Bath & Body Image"
        />
      </div>
    </div>
  );
};

export default New;

/*











*/
