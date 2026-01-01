import React from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout";
import pixverseImageEffectPromptGiveMeThreePicRemovebgPreview11 from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-1.png";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <RobotLayout>

      {/* Welcome content */}
      <h1 className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[40px] text-center tracking-[0] leading-[normal]">
        Welcome to the Library
      </h1>

      <p className="mt-[0px] [font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#a8d5e2] text-[18px] text-center tracking-[0] leading-[normal]">
        Please select how you'd like to Proceed
      </p>

      {/* Robot image (page-specific, stays here) */}
      <img
        className="absolute top-[220px] left-[952px] w-[269px] h-[457px] aspect-[0.58] object-cover"
        alt="Smart Library Assistant Robot"
        src={pixverseImageEffectPromptGiveMeThreePicRemovebgPreview11}
      />

      {/* Login options */}
      <nav className="absolute top-[283px] left-[242px] w-[650px]" aria-label="Login options">
        <button
          onClick={() => navigate("/robot/member-login")}
          className="w-full h-[180px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421] focus:ring-offset-2"
          aria-label="Member Login"
        >
          <span className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[#fcfbfa] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">Member Login</span>
        </button>

        <button
          onClick={() => navigate("/robot/guest-login")}
          className="absolute top-[215px] left-0 w-[650px] h-[180px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421] focus:ring-offset-2"
          aria-label="Guest Login"
        >
          <span className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[#fcfbfa] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">Guest Login</span>
        </button>
      </nav>

    </RobotLayout>
  );
};

