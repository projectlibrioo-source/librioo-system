import React from "react";
import { useNavigate } from "react-router-dom";

const CancelButton = ({ className = "" }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={`w-[240px] h-[45px] bg-[#d9d9d933] rounded-[10px] border border-[#ffffff4d] shadow-md flex items-center justify-center cursor-pointer hover:bg-[#d9d9d955] hover:scale-105 transition-all ${className}`}
    >
      <span className="[font-family:'Aldrich-Regular',Helvetica] text-white text-[18px]">CANCEL</span>
    </button>
  );
};

export default CancelButton;