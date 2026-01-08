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
      <div className="h-full w-full flex flex-col overflow-hidden px-[100px]">
        
        {/* Main Content Area */}
        <div style={{ 
  paddingLeft: 'clamp(0px, 10vw, 80px)', 
  paddingRight: 'clamp(100px, 25vw, 350px)', 
  flex: 1,
  display: 'flex',
  flexDirection: 'row', 
  alignItems: 'flex-start', // ✅ CHANGED
  justifyContent: 'space-between',
  gap: 'clamp(20px, 4vw, 100px)',
  paddingBottom: '20px',
  marginTop: '30px'
}}>

          
            {/* Left Column: Title, Form, Buttons */}
            <div className="flex flex-col w-full max-w-[650px] gap-8">
              
              {/* Title */}
              <h1 
                className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] tracking-[0] leading-[normal] text-center"
                style={{ fontSize: 'clamp(32px, 4vh, 60px)' }}
              >
                Member Login
              </h1>

              {/* Input Box Container */}
              <form onSubmit={handleLogin} className="w-full mb-16">
                <div className="w-full h-[100px] bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040] px-8 flex items-center justify-center gap-8">
                  <label
                    htmlFor="library-id"
                    className="whitespace-nowrap [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[24px] lg:text-[32px] tracking-[0] leading-[normal]"
                  >
                    Library ID :
                  </label>
                  <input
                    type="text"
                    id="library-id"
                    value={libraryId}
                    onChange={(e) => setLibraryId(e.target.value)}
                    className="w-[50%] h-[68px] bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040] px-4 text-white text-[24px] [font-family:'Aldrich-Regular',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#caf9ff]"
                    required
                  />
                </div>
              </form>

              {/* Buttons Row - INCREASED GAP HERE */}
              <div className="flex flex-row justify-between w-full gap-[200px] mt-16">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[32px]">
                    BACK
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="flex-1 h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[32px]">
                    LOGIN
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Robot Image */}
            <div style={{ 
              flexShrink: 0, 
              width: 'clamp(200px, 25vw, 400px)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center'
            }}>
              <img
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'contain'
                }}
                alt="Smart Library Assistant Robot"
                src={robotImage}
              />
            </div>

        </div>
      </div>
    </RobotLayout>
  );
};

export default MemberLogin;