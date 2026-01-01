import React from "react";
import { useNavigate } from "react-router-dom";

const CancelButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)} // Goes to previous page (SearchPage)
      className="absolute top-[265px] left-[950px] w-[240px] h-[45px] bg-[#d9d9d933] rounded-[10px] border border-[#ffffff4d] shadow-md flex items-center justify-center cursor-pointer z-30 hover:bg-[#d9d9d955] hover:scale-105 transition-all"
    >
      <span className="[font-family:'Aldrich-Regular',Helvetica] text-white text-[18px]">CANCEL</span>
    </button>
  );
};

export default CancelButton;