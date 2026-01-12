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
      <div className="h-full flex flex-col overflow-y-auto overflow-x-hidden px-[20px] sm:px-[100px]">

        {/* Title Section */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: 'clamp(20px, 25vw, 170px)',
          width: '100%',
          marginBottom: 'clamp(20px, 4vh, 60px)',
          marginTop: 'clamp(10px, 2vh, 40px)',
          flexShrink: 0
        }}>
          <h1 
            className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] tracking-[0] leading-[normal]"
            style={{ fontSize: 'clamp(24px, 4vh, 60px)' }}
          >
            What would you like to do?
          </h1>
        </div>

        {/* Content Area */}
        <div style={{ 
          paddingLeft: 'clamp(0px, 12vw, 100px)',
          flex: 1,
          minHeight: '100px',
          display: 'flex',
          overflow: 'visible',
          paddingBottom: '20px' 
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: 'clamp(15px, 4vw, 100px)', 
            alignItems: 'stretch',
            width: '100%',
            height: '100%',
            flexWrap: 'wrap'
          }}>
            
            {/* Left side: Options & Nav Buttons */}
            <div style={{ 
              flex: 1, 
              minWidth: '300px',
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(20px, 3vh, 40px)', 
              maxWidth: '650px' 
            }}>
              
              {/* --- Selection Buttons --- */}
              <div className="flex flex-col gap-[20px] sm:gap-[30px] w-full">
                
                {/* Button 1: Read Here */}
                <button
                  onClick={handleReadHereClick}
                  className="
                    w-full 
                    h-[130px] sm:h-[120px] 
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
                    text-[24px] sm:text-[40px] 
                    whitespace-nowrap
                  ">
                    Read Here
                  </span>
                </button>

                {/* Button 2: Borrow Book */}
                <button
                  onClick={handleBorrowBookClick}
                  className="
                    w-full 
                    h-[130px] sm:h-[120px] 
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
                    text-[24px] sm:text-[40px] 
                    whitespace-nowrap
                  ">
                    Borrow Book
                  </span>
                </button>

              </div>

              {/* --- Back Button --- */}
              {/* UPDATED: 'justify-start' keeps it left. Widths changed to be smaller. */}
              <div className="flex justify-start w-full mt-2">
                <button
                  type="button"
                  onClick={handleBackClick}
                  className="
                    w-[150px] sm:w-[180px] 
                    h-[50px] sm:h-[70px] 
                    flex items-center justify-center 
                    bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                    cursor-pointer transition-all hover:bg-[#00000060] 
                    focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                  "
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[clamp(16px,2vw,24px)]">
                    BACK
                  </span>
                </button>
              </div>

            </div>

            {/* Right side: Robot image (Desktop) */}
            <div style={{ 
              flexShrink: 0, 
              width: 'clamp(100px, 18vw, 400px)',
              display: 'flex',
              alignItems: 'flex-start',
              overflow: 'hidden',
              marginTop: '20px' 
            }} className="hidden sm:flex">
              <img
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '600px',
                  objectFit: 'contain'
                }}
                alt="Smart Library Assistant Robot"
                src={robotImage}
              />
            </div>
            
             

          </div>
        </div>
      </div>
    </RobotLayout>
  );
};

export default SelectionPage;