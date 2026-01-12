import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout"; 
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";
import { memberLogin } from "../../BackendFunctions";

const MemberLogin = () => {
  const [libraryId, setLibraryId] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const member = await memberLogin(libraryId);

    if (member) {
      alert("Login Success");
      navigate("/robot/search");
    } else {
      alert("Invalid ID");
    }
  };

  const handleBack = () => {
    navigate("/robot/login");
  };

  return (
    <RobotLayout>
      <div className="h-full flex flex-col overflow-y-auto overflow-x-hidden px-[20px] sm:px-[100px]">
        
        {/* Title Section */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: 'clamp(20px, 25vw, 320px)',
          width: '100%',
          marginBottom: 'clamp(20px, 4vh, 60px)',
          marginTop: 'clamp(10px, 2vh, 40px)',
          flexShrink: 0
        }}>
          <h1 
            className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] tracking-[0] leading-[normal]"
            style={{ fontSize: 'clamp(24px, 4vh, 60px)' }}
          >
            Member Login
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
            
            {/* Left side: Form & Buttons */}
            <div style={{ 
              flex: 1, 
              minWidth: '300px',
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(20px, 3vh, 50px)',
              maxWidth: '650px' 
            }}>
              
              {/* Input Group */}
              <form onSubmit={handleLogin} className="w-full">
                <div className="
                  w-full 
                  h-[80px] sm:h-[100px] 
                  bg-[#d9d9d926] 
                  rounded-[20px] 
                  shadow-[0px_4px_4px_#00000040] 
                  
                  /* FLEX SETTINGS FOR CENTERING */
                  flex flex-row 
                  items-center      /* Vertically Center */
                  justify-center    /* Horizontally Center (Left/Right) */
                  
                  gap-[65px] sm:gap-[30px] /* Reduced gap slightly to keep them grouped */
                ">
                  
                  {/* LABEL */}
                  <label
                    htmlFor="library-id"
                    className="
                      whitespace-nowrap 
                      [-webkit-text-fill-color:white] 
                      [font-family:'Aldrich-Regular',Helvetica] 
                      font-normal 
                      text-[22px] sm:text-[24px] lg:text-[32px] 
                      tracking-[0] 
                      leading-[normal]
                    "
                  >
                    Library ID :
                  </label>

                  {/* INPUT */}
                  <input
                    type="text"
                    id="library-id"
                    value={libraryId}
                    onChange={(e) => setLibraryId(e.target.value)}
                    className="
                      /* RESPONSIVE WIDTH */
                      w-[220px] sm:w-[100px] /* Fixed width on both mobile and desktop so it stays centered */
                      
                      h-[45px] sm:h-[50px] 
                      bg-[#d9d9d926] 
                      rounded-[15px] 
                      shadow-inner 
                      px-4 
                      text-white 
                      text-[16px] sm:text-[20px] 
                      [font-family:'Aldrich-Regular',Helvetica] 
                      focus:outline-none focus:ring-2 focus:ring-[#caf9ff]
                    "
                    required
                  />
                </div>
              </form>

              {/* Navigation Buttons */}
              <div className="flex flex-row gap-[50px] sm:gap-[120px] w-full">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 h-[60px] sm:h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[clamp(16px,2.5vw,32px)]">
                    BACK
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="flex-1 h-[60px] sm:h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[clamp(16px,2.5vw,32px)]">
                    LOGIN
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
              marginTop: '-50px' 
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

export default MemberLogin;