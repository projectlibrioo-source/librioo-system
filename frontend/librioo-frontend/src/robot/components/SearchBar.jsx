import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = ({ query, onChange, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    className="absolute top-[215px] left-[65px] w-[630px] h-[40px] bg-[#ece6f0] rounded-full flex items-center shadow-md z-30 overflow-hidden"
  >
    {/* Input Field */}
    <input
      type="search"
      value={query}
      onChange={onChange}
      placeholder="Search Books By Name"
      className="flex-1 px-4 bg-transparent outline-none text-[#49454f] placeholder:text-[#49454f]/70 placeholder:font-semibold [font-family:'Aldrich-Regular',Helvetica] text-[16px]"
      style={{ fontWeight: 600 }}
    />

    {/* Icon Button */}
    <button
      type="submit"
      aria-label="Search"
      className="w-[40px] h-[40px] flex items-center justify-center bg-gradient-to-r from-[#4b4b6b] to-[#5c6ac4] text-white rounded-full hover:from-[#5c6ac4] hover:to-[#7c8fdc] transition-all"
    >
      <MagnifyingGlassIcon className="w-5 h-5 text-white" />
    </button>
  </form>
);

export default SearchBar;