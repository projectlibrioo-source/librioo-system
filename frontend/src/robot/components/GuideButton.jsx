import React from "react";
import { useNavigate } from "react-router-dom";

const GuideButton = ({ onClick, className = "" }) => {
  const navigate = useNavigate();
  // Allow custom onClick or default to navigation
  const handleClick = onClick || (() => navigate("/follow"));

  return (
    <button
      onClick={handleClick}
      className={`w-[240px] h-[45px] bg-[#d9d9d933] rounded-[10px] border border-[#ffffff4d] shadow-md flex items-center justify-center cursor-pointer hover:bg-[#d9d9d955] hover:scale-105 transition-all ${className}`}
    >
      <span className="[font-family:'Aldrich-Regular',Helvetica] text-white text-[18px]">GUIDE ME</span>
    </button>
  );
};

export default GuideButton;