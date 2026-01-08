import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout"; // Import the layout
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";
// import { guestLogin } from "../../BackendFunctions"; // Uncomment when backend is ready

const GuestLogin = () => {
  const [guestId, setGuestId] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // guestLogin(guestId); // Uncomment when backend is ready
    console.log("Login with Guest ID:", guestId);
    // Add navigation logic here if needed for testing, e.g.:
    // navigate("/robot/search");
  };

  const handleBack = () => {
    navigate("/robot/login");
  };

  return (
    <RobotLayout>
      <div className="h-full flex flex-col overflow-y-auto overflow-x-hidden px-[100px]">
        
        {/* Title Section */}
        <div style={{ 
          paddingLeft: 'clamp(0px, 10vw, 80px)', 
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

        {/* Content Area (Form + Robot) */}
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
            height: '100%'
          }}>
            
            {/* Left side: Form & Buttons */}
            <div style={{ 
              flex: 1, 
              minWidth: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(20px, 3vh, 50px)',
              maxWidth: '650px' 
            }}>
              
              {/* Input Group */}
              <form onSubmit={handleLogin} className="w-full">
                <div className="w-full bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040] p-6 flex flex-col sm:flex-row items-center gap-4">
                  <label
                    htmlFor="guest-id"
                    className="whitespace-nowrap [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[20px] sm:text-[24px] lg:text-[32px] tracking-[0] leading-[normal]"
                  >
                    Guest ID :
                  </label>
                  <input
                    type="text"
                    id="guest-id"
                    value={guestId}
                    onChange={(e) => setGuestId(e.target.value)}
                    className="flex-1 w-full h-[60px] bg-[#d9d9d926] rounded-[15px] shadow-inner px-4 text-white text-[20px] sm:text-[24px] [font-family:'Aldrich-Regular',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#caf9ff]"
                    required
                  />
                </div>
              </form>

              {/* Navigation Buttons */}
              <div className="flex flex-row gap-4 w-full">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[clamp(20px,2.5vw,32px)]">
                    BACK
                  </span>
                </button>

                <button
                  type="submit"
                  onClick={handleLogin}
                  className="flex-1 h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[clamp(20px,2.5vw,32px)]">
                    LOGIN
                  </span>
                </button>
              </div>

            </div>

            {/* Right side: Robot image */}
            <div style={{ 
              flexShrink: 0, 
              width: 'clamp(100px, 18vw, 400px)',
              display: 'flex',
              alignItems: 'flex-start',
              overflow: 'hidden'
            }}>
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