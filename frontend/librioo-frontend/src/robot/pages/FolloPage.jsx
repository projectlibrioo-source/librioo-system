import React from "react";
import logolib31 from "../../assets/logolib3-1.png";

const FollowPage = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-h-screen relative overflow-hidden">
      {/* Header - Aligned with Search/Login pages */}
      <header className="absolute top-3.5 left-16 w-[1152px] h-[100px]">
                    <div className="absolute top-[10px] left-[100px] w-[1280px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
                    <h2 className="absolute top-[45px] left-[145px] [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Smart Library Assistant
                    </h2>
                    <img
                      className="absolute top-[5px] left-[130px] w-[191px] h-[72px] aspect-[2.86]"
                      alt="Logolib Smart Library Assistant"
                      src={logolib31}
                    />
            </header>

      {/* Main Content - Perfectly Centered */}
      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 
          className="text-[#fcfbfa] text-[100px] font-[Aldrich-Regular] tracking-[10px] uppercase"
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