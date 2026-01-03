import React from "react";

const BackgroundContainer = ({ children, className = "" }) => {
  return (
    <div 
      className={`relative w-full rounded-[20px] border-2 border-solid border-[#efe1e126] bg-[#0000001a] shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;