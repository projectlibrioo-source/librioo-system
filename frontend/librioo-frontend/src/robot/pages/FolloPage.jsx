import React from "react";
import logolib31 from "../../assets/logolib3-1.png";

const FollowPage = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-h-screen relative overflow-hidden">
      {/* Header - Aligned with Search/Login pages */}
      <header className="absolute top-3.5 left-[65px] w-[1150px] h-[100px] z-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d959] rounded-[20px] shadow-md" />
        <img
          className="absolute top-[5px] left-[43px] w-[180px] h-[68px] object-contain"
          alt="Librioo Logo"
          src={logolib31}
        />
        <p className="absolute top-[60px] left-[55px] [font-family:'Aldrich-Regular',Helvetica] text-white text-[20px] tracking-wider">
          Smart Library Assistant
        </p>
      </header>

      {/* Main Content - Perfectly Centered */}
      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 
          className="text-[#fcfbfa] text-[120px] font-[Aldrich-Regular] tracking-[10px] uppercase"
          style={{
            WebkitTextStroke: "2px #ff7421", // Thicker orange outline
            paintOrder: "stroke fill"
          }}
        >
          FOLLOW ME
        </h1>
      </div>
    </div>
  );
};

export default FollowPage;