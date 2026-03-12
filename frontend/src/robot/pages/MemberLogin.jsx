import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout"; 
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";
import { memberLogin } from "../../BackendFunctions";

const MemberLogin = () => {
  const [libraryId, setLibraryId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!libraryId.trim()) return;

    setIsLoading(true);

    try {
      const member = await memberLogin(libraryId);

      if (member) {
        navigate("/robot/user-details", { state: { user: member } });
      } else {
        alert("Invalid ID");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/robot/login");
  };

  return (
    <RobotLayout>
      <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-[120px] gap-10 lg:gap-20 flex-1">
        
        {/* LEFT COLUMN: Form & Text */}
        <div className="z-10 flex flex-col w-full max-w-2xl lg:w-1/2">
          
          {/* Title Section */}
          <div className="mb-10">
            <h1 
              className="mb-4 text-5xl font-bold text-white lg:text-7xl drop-shadow-lg"
              style={{ fontFamily: "'ADLaM_Display-Regular', Helvetica" }}
            >
              Member <span className="text-[#e0f7fa]">Login</span>
            </h1>
            <p className="text-xl font-light text-white/90 drop-shadow-sm">
              Please enter your Library ID to access your account.
            </p>
          </div>

          {/* Form Area */}
          <form onSubmit={handleLogin} className="flex flex-col w-full gap-8 lg:max-w-md">
            
            {/* Modern Glass Input Field */}
            <div className="flex flex-col gap-3">
              <label 
                htmlFor="library-id"
                className="text-2xl font-medium tracking-wide text-white drop-shadow-md"
                style={{ fontFamily: "'Aldrich', Helvetica, sans-serif" }}
              >
                Library ID
              </label>
              <input
                type="text"
                id="library-id"
                value={libraryId}
                onChange={(e) => setLibraryId(e.target.value)}
                placeholder="Enter your ID..."
                className="w-full h-[70px] bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-2xl px-6 text-2xl text-white placeholder-white/50 shadow-inner transition-all focus:outline-none focus:bg-white/30 focus:border-white/70"
                style={{ fontFamily: "'Aldrich', Helvetica, sans-serif" }}
                required
              />
            </div>

          </form>
        </div>

        </div>

    </RobotLayout>
  );
};
export default MemberLogin;