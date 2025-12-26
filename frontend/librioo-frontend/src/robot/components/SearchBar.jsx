import React from "react";
import { Icon } from "./Icon";

const SearchBar = ({ query, onChange, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    className="flex w-[630px] h-[40px] items-center justify-between absolute top-[215px] left-[65px] bg-[#ece6f0] rounded-[20px] overflow-hidden z-30 shadow-sm px-5"
  > 
      {/* Input Field */}
      <input
        type="search"
        value={query}
        onChange={onChange}
        placeholder="Search Books By Name"
        className="flex-1 bg-transparent outline-none text-[#49454f] [font-family:'Aldrich-Regular',Helvetica] text-[16px] text-left placeholder:text-[#49454f]/70"
      />
      
      {/* Submit/Arrow Icon */}
      <button type="submit" className="hover:scale-110 transition-transform ml-2 p-1 flex items-center justify-center cursor-pointer">
        <Icon className="w-4 h-4 text-[#49454f]" />
      </button>
  </form>
);

export default SearchBar;