
// Chakra UI
import { Input } from "@chakra-ui/react";
// React Css
import { IoIosSearch } from "react-icons/io";

// NOTE search
const Search = () => {
  return (
    <div id="searchDiv" className=" relative lg:flex items-center flex-1 mx-6">
      <Input id="searchInput"
        borderRadius="-moz-initial"
        htmlSize={4}
        className="p-1.5 pl-20  rounded-full flex-1 bg-[#F6F6F8] outline-none border-slate-950"
        placeholder="Search"
        
      />
      <div className="absolute right-2 md:hidden">
        <IoIosSearch id="search" className="text-xl" />
      </div>
    </div>
  );
};
export default Search