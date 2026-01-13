import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout"; 
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";
import { guestLogin } from "../../BackendFunctions"; 

const GuestLogin = () => {
  const [guestId, setGuestId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!guestId.trim()) return; // Don't run if empty

    setIsLoading(true); // 1. Start loading

    try {
      const guest = await guestLogin(guestId); // 2. Wait for Backend

      if (guest) {
        // alert("Login Success"); // Optional
        navigate("/robot/search");
      } else {
        alert("Invalid Guest ID");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // 3. Stop loading (always runs)
    }
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
            Guest Login
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
                  justify-center    /* Horizontally Center */
                  
                  gap-[65px] sm:gap-[30px] /* Responsive gap */
                ">
                  
                  {/* LABEL */}
                  <label
                    htmlFor="guest-id"
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
                    Guest ID :
                  </label>

                  {/* INPUT */}
                  <input
                    type="text"
                    id="guest-id"
                    value={guestId}
                    onChange={(e) => setGuestId(e.target.value)}
                    className="
                      /* RESPONSIVE WIDTH: Smaller on mobile to fit, wider on desktop */
                      w-[220px] sm:w-[100px] 
                      
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
                  type="submit"
                  onClick={handleLogin}
                  disabled={isLoading}
                  className={`flex-1 h-[60px] sm:h-[80px] flex items-center justify-center rounded-[20px] shadow-[0px_4px_4px_#00000040] transition-all focus:outline-none focus:ring-2 focus:ring-[#ff7421]
    ${isLoading ? "bg-[#ffffff20] cursor-not-allowed" : "bg-[#00000045] cursor-pointer hover:bg-[#00000060]"}`}
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[clamp(16px,2.5vw,32px)]">
                    {isLoading ? "..." : "LOGIN"}
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

export default GuestLogin;