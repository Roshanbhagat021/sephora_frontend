// React Icon
import { RxTriangleRight } from "react-icons/rx";

//NOTE freetrail
export const FreeTrial = () => {
  return (
    <div className=" bg-[#f7b9cc] mx-auto  h-[50px] flex justify-center items-center ">
      <p className="hover:underline text-sm">
        <span>
          <b>Free Same-Day Delivery</b>
          <sup>†††</sup> for Mother's Day. Ends 5/12. <sup>†††</sup>
          Exclusions/terms apply. Use Code <b>YAYSAMEDAY ▸</b>
        </span>
      </p>
    </div>
  );
};

// NOTE logo
const Logo = () => {
  return <p id="logo" className="tracking-widest font-medium text-2xl">SEPHORA</p>;
};
export default Logo;
