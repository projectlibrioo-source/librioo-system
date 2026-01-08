import React from "react";
import { useNavigate } from "react-router-dom"; 
import RobotLayout from "../layouts/RobotLayout"; 
import robotLeft from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-1.png";
import robotRight from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

const EndingPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); 
  };

  const handleEndSessionClick = () => {
    navigate("/robot/login"); 
  };

  return (
    <RobotLayout>
      <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden p-4">

        {/* --- BACKGROUND ROBOTS CONTAINER --- 
            Changes made:
            1. Added 'pb-[60px] lg:pb-[100px]' to lift the robots up from the bottom.
        */}
        <div className="
          absolute inset-0 z-0 w-full h-full 
          flex justify-between items-end 
          gap-10 px-4 
          pb-[60px] lg:pb-[100px] /* Pushes robots up */
          pointer-events-none
        ">
          
          {/* LEFT ROBOT */}
          <div style={{ 
            flexShrink: 0, 
            width: 'clamp(100px, 20vw, 400px)',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            opacity: 0.3
          }}>
            <img
              style={{ 
                width: '100%', 
                height: '100%',
                minHeight: '120px',
                maxHeight: '620px',
                objectFit: 'contain',
                objectPosition: 'bottom left'
              }}
              alt="Robot Left"
              src={robotLeft}
            />
          </div>

          {/* RIGHT ROBOT */}
          <div style={{ 
            flexShrink: 0, 
            width: 'clamp(100px, 20vw, 400px)',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            opacity: 0.3
          }}>
            <img
              style={{ 
                width: '100%', 
                height: '100%',
                minHeight: '120px',
                maxHeight: '680px',
                objectFit: 'contain',
                objectPosition: 'bottom right'
              }}
              alt="Robot Right"
              src={robotRight}
            />
          </div>
        
        </div>


        {/* --- TEXT & BUTTON CONTENT (z-10) --- */}
        <div className="z-10 flex flex-col items-center w-full max-w-[90%] lg:max-w-[800px] text-center mt-[-20px] lg:mt-0">
          
          {/* Text Group */}
          <div className="flex flex-col items-center gap-6 lg:gap-10 mb-8 lg:mb-12">
            <h1 className="
              [font-family:'ADLaM_Display-Regular',Helvetica] 
              text-[#caf9ff] 
              text-[32px] lg:text-[60px]
              leading-tight
            ">
              Transaction Complete!
            </h1>

            <p className="
              [font-family:'Aldrich-Regular',Helvetica] 
              text-[#fcfbfa] 
              text-[24px] lg:text-[40px]
              leading-normal
              drop-shadow-md
            ">
              Thank you for using our Library Assistance.
            </p>

            <p className="
              [font-family:'ADLaM_Display-Regular',Helvetica] 
              text-[#f0f0f0]
              text-[18px] lg:text-[36px]
              leading-normal
              max-w-[600px]
            ">
              The return date has been sent via SMS to your mobile phone
            </p>
          </div>

          {/* --- BUTTONS SECTION --- */}
          <div className="flex flex-col sm:flex-row gap-[12px] lg:gap-[100px] w-full justify-center items-center">
            
            {/* Button 1: Return to Home */}
            <button
              onClick={handleHomeClick}
              className="
                /* BUTTON RESIZING LOGIC:
                   - w-[70%]: On mobile, takes 70% of screen width (resizes with window).
                   - sm:w-[180px]: On tablet, fixes to 180px.
                   - lg:w-[220px]: On desktop, fixes to 220px.
                */
                w-[70%] sm:w-[180px] lg:w-[220px]
                h-[45px] lg:h-[55px]
                flex items-center justify-center 
                bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                cursor-pointer transition-all hover:bg-[#00000060] 
                focus:outline-none focus:ring-2 focus:ring-[#ff7421]
              "
            >
              <span className="
                text-[#f0f0f0]
                [font-family:'Aldrich-Regular',Helvetica] 
                text-[14px] lg:text-[20px]
                whitespace-nowrap
              ">
                RETURN HOME
              </span>
            </button>

            {/* Button 2: End Session */}
            <button
              onClick={handleEndSessionClick}
              className="
                /* Same resizing logic here */
                w-[70%] sm:w-[180px] lg:w-[220px]
                h-[45px] lg:h-[55px]
                flex items-center justify-center 
                bg-[#ff7421] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                cursor-pointer transition-all hover:bg-[#ff8c42] 
                focus:outline-none focus:ring-2 focus:ring-white
              "
            >
              <span className="
                text-[#f0f0f0]
                [font-family:'Aldrich-Regular',Helvetica] 
                text-[14px] lg:text-[20px]
                whitespace-nowrap
                font-bold
              ">
                END SESSION
              </span>
            </button>

          </div>

        </div>

      </div>
    </RobotLayout>
  );
};

export default EndingPage;