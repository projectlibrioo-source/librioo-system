import React from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout";
import pixverseImageEffectPromptGiveMeThreePicRemovebgPreview11 from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-1.png";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <RobotLayout>
      <div className="h-full flex flex-col overflow-y-auto overflow-x-hidden px-[100px]">
        
        {/* Welcome text */}
        <div style={{ 
          paddingLeft: 'clamp(0px, 10vw, 80px)', 
          marginBottom: 'clamp(10px, 2vh, 40px)',
          flexShrink: 0
        }}>
          <h1 
            className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] tracking-[0] leading-[normal]"
            style={{ fontSize: 'clamp(24px, 4vh, 60px)' }}
          >
            Welcome to the Library
          </h1>

          <p 
            className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#a8d5e2] tracking-[0] leading-[normal]"
            style={{ 
              fontSize: 'clamp(14px, 2.5vh, 28px)',
              marginTop: 'clamp(4px, 0.8vh, 20px)'
            }}
          >
            Please select how you'd like to Proceed
          </p>
        </div>

        {/* Buttons and Robot */}
        <div style={{ 
          paddingLeft: 'clamp(0px, 12vw, 100px)',
          flex: 1,
          minHeight: '100px',
          display: 'flex',
          overflow: 'visible'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: 'clamp(15px, 4vw, 100px)', 
            alignItems: 'stretch',
            width: '100%',
            height: '100%'
          }}>
            
            {/* Left side: Login buttons */}
            <nav style={{ 
              flex: 1, 
              minWidth: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(10px, 2vh, 60px)',
              height: '100%'
            }} aria-label="Login options">
              <button
                onClick={() => navigate("/robot/member-login")}
                className="w-full flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421] focus:ring-offset-2 px-6"
                style={{ 
                  flex: 1,
                  minHeight: '50px',
                  maxHeight: '280px'
                }}
                aria-label="Member Login"
              >
                <span 
                  className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[#fcfbfa] tracking-[0] leading-[normal]"
                  style={{
                    fontSize: 'clamp(16px, 3vw, 60px)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  Member Login
                </span>
              </button>

              <button
                onClick={() => navigate("/robot/guest-login")}
                className="w-full flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421] focus:ring-offset-2 px-6"
                style={{ 
                  flex: 1,
                  minHeight: '50px',
                  maxHeight: '280px'
                }}
                aria-label="Guest Login"
              >
                <span 
                  className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Helvetica'] font-normal text-[#fcfbfa] tracking-[0] leading-[normal]"
                  style={{
                    fontSize: 'clamp(16px, 3vw, 60px)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  Guest Login
                </span>
              </button>
            </nav>

            {/* Right side: Robot image */}
            <div style={{ 
              flexShrink: 0, 
              width: 'clamp(100px, 18vw, 400px)',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              overflow: 'hidden'
            }}>
              <img
                style={{ 
                  width: '100%', 
                  height: '100%',
                  minHeight: '120px',
                  maxHeight: '620px',
                  objectFit: 'contain'
                }}
                alt="Smart Library Assistant Robot"
                src={pixverseImageEffectPromptGiveMeThreePicRemovebgPreview11}
              />
            </div>
          </div>
        </div>
      </div>
    </RobotLayout>
  );
}