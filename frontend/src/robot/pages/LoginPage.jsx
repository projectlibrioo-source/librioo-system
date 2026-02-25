import React from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout";
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-1.png";

export default function LoginPage() {
  const navigate = useNavigate();

  return(
    <RobotLayout>

      <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-[100px] gap-10 lg:gap-20 flex-1">
        
        {/* LEFT COLUMN: Welcome Text & Actions */}
        <div className="z-10 flex flex-col w-full max-w-2xl lg:w-1/2">
          
          {/* Typography Section */}
          <div className="mb-10">
            <h1 
              className="mb-4 text-5xl font-bold text-white lg:text-7xl drop-shadow-lg"
              style={{ fontFamily: "'ADLaM_Display-Regular', Helvetica" }}
            >
              Welcome to <br />
              {/* React Bits tip: You could wrap this span in a <ShinyText> component here */}
              <span className="text-[#e0f7fa]">The Library</span>
            </h1>
            <p className="text-xl font-light lg:text-2xl text-white/90 drop-shadow-sm">
              Your Librioo library assistant is ready to help. <br/>
              Please select how you'd like to proceed.
            </p>
          </div>

          


    </RobotLayout>

  );
}
