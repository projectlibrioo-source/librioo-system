import React from "react";
import { useNavigate } from "react-router-dom";

import { navigateByBookName } from "../../BackendFunctions";

const GuideButton = ({ onClick, className = "", bookName }) => {
  const navigate = useNavigate();

//const GuideButton = ({ onClick, className = "" }) => {
 // const navigate = useNavigate();
  // Allow custom onClick or default to navigation


  // ▼▼▼ 3. Update the click handler to be ASYNC ▼▼▼
  
  const handleClick = async (e) => {
    // If a custom onClick is provided (for testing), use it.
    if (onClick) {
      onClick(e);
      return;
    }

    // Default behavior: Call backend -> Then navigate
    if (bookName) {
      console.log("Sending navigation command for:", bookName);
      await navigateByBookName(bookName); // Wait for backend to receive command
    }

    navigate("/follow"); // Move user to the "Follow Me" screen
  };


  //const handleClick = onClick || (() => navigate("/follow"));

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