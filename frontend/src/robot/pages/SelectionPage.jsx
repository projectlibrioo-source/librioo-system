import React from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout"; 
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

const SelectionPage = () => {
  const navigate = useNavigate();

  const handleReadHereClick = () => {
    console.log("Read Here clicked");
    // navigate("/robot/read");
  };

  const handleBorrowBookClick = () => {
    console.log("Borrow Book clicked");
    // navigate("/robot/borrow");
  };

  const handleBackClick = () => {
    navigate("/robot/user-details");
  };

  return (
    <RobotLayout>
      {/* 1. MAIN CONTAINER
          - CHANGED: overflow-hidden (Removes scrolling on ALL screens)
          - Use flex-col to organize layout
      */}
      <div className="h-full w-full flex flex-col overflow-hidden p-4 lg:px-[100px]">
        
        {/* 2. CONTENT WRAPPER
            - justify-center: Centers content vertically so it looks good if screen is tall
        */}
        <div className="
          flex-1 w-full
          flex flex-col lg:flex-row 
          items-center lg:justify-between
          justify-center
          gap-4 lg:gap-[clamp(20px,4vw,100px)]
          mt-2 lg:mt-[30px]
          lg:pl-[clamp(0px,10vw,80px)] 
          lg:pr-[clamp(100px,25vw,350px)]
        ">
          
            {/* 3. ROBOT IMAGE
               - Mobile: Smaller (140px) to save vertical space
            */}
            <div className="
              order-1 lg:order-2
              flex-shrink-0 
              w-[140px] lg:w-[clamp(200px,25vw,350px)] 
              flex items-center justify-center
            ">
              <img
                className="w-full h-auto object-contain"
                alt="Library assistant robot mascot"
                src={robotImage}
              />
            </div>

            {/* 4. INTERACTIVE SECTION
               - Mobile: Gap-4 (tighter spacing) to fit on screen
            */}
            <div className="
              order-2 lg:order-1
              flex flex-col w-full lg:max-w-[650px] 
              gap-4 lg:gap-10 
              lg:-mt-[40px]
            ">
              
              {/* Title */}
              <h1 className="
                [font-family:'ADLaM_Display-Regular',Helvetica] font-normal 
                text-[#caf9ff] text-center leading-tight
                text-[28px] lg:text-[40px]
              ">
                What would you like to do?
              </h1>

              {/* SELECTION BUTTONS */}
              <div className="flex flex-col gap-4 w-full">
                
                {/* Button 1 */}
                <button
                  onClick={handleReadHereClick}
                  className="
                    w-full 
                    h-[80px] lg:h-[180px] /* Reduced height for mobile fit */
                    flex items-center justify-center 
                    bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                    cursor-pointer transition-all hover:bg-[#00000060] 
                    focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                  "
                >
                  <span className="
                    [-webkit-text-stroke:1px_#ff7421] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    text-[#fcfbfa] 
                    text-[24px] lg:text-[40px]
                  ">
                    Read Here
                  </span>
                </button>

                {/* Button 2 */}
                <button
                  onClick={handleBorrowBookClick}
                  className="
                    w-full 
                    h-[80px] lg:h-[180px] /* Reduced height for mobile fit */
                    flex items-center justify-center 
                    bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                    cursor-pointer transition-all hover:bg-[#00000060] 
                    focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                  "
                >
                  <span className="
                    [-webkit-text-stroke:1px_#ff7421] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    text-[#fcfbfa] 
                    text-[24px] lg:text-[40px]
                  ">
                    Borrow Book
                  </span>
                </button>
              </div>

              {/* Back Button */}
              <div className="flex justify-start w-full mt-2 lg:mt-4">
                <button
                  type="button"
                  onClick={handleBackClick}
                  className="
                    w-[120px] lg:w-[200px] 
                    h-[45px] lg:h-[60px] 
                    flex items-center justify-center 
                    bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                    cursor-pointer transition-all hover:bg-[#00000060] 
                    focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                  "
                >
                  <span className="
                    text-white 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    text-[18px] lg:text-[24px]
                  ">
                    BACK
                  </span>
                </button>
              </div>

            </div>

        </div>
      </div>
    </RobotLayout>
  );
};

export default SelectionPage;