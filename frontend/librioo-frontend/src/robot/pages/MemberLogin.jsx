import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logolib31 from "../../assets/logolib3-1.png";
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

const MemberLogin = () => {
  const [libraryId, setLibraryId] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with Library ID:", libraryId);
  };

  const handleBack = () => {
    navigate("/robot/login");
  };

  return (
    <main className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-w-[1280px] min-h-[720px] relative">
      
      {/* HEADER - Exact match to Page 1 */}
      <header className="absolute top-3.5 left-16 w-[1152px] h-[100px]">
        <div className="absolute top-0 left-0 w-[1280px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
        <h2 className="absolute top-[45px] left-[59px] [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
          Smart Library Assistant
        </h2>
        <img
          className="absolute top-0 left-[43px] w-[191px] h-[72px] aspect-[2.86]"
          alt="Logolib Smart Library Assistant"
          src={logolib31}
        />
      </header>

      {/* PAGE TITLE - Exact match to Page 1 */}
      <section className="absolute top-[143px] left-[194px] w-[650px]">
        <h1 className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[40px] text-center tracking-[0] leading-[normal]">
          Member Login
        </h1>
      </section>

      {/* FORM AREA*/}
      <form 
        onSubmit={handleLogin}
        className="absolute top-[283px] left-[194px] w-[650px] h-[101px]"
      >
        {/* The Bigger Box */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />

        <label
        htmlFor="library-id"
        className="absolute top-[32px] left-[50px] w-fit 
                    [-webkit-text-fill-color:white] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    font-normal text-[32px] tracking-[0] leading-[normal] whitespace-nowrap"
        >
        Library ID :
        </label>

        {/* The Input */}
        <input
          type="text"
          id="library-id"
          value={libraryId}
          onChange={(e) => setLibraryId(e.target.value)}
          className="absolute top-[16px] right-[40px] w-[301px] h-[68px] bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040] px-6 text-white text-[24px] [font-family:'Aldrich-Regular',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#caf9ff]"
          required
        />
      </form>

      {/* NAVIGATION - Back and Login buttons */}
      <nav className="absolute top-[434px] left-[194px] w-[650px] flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="w-[280px] h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
        >
          <span className="flex items-center justify-center w-fit 
                    [-webkit-text-fill-color:white] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    font-normal text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            BACK
          </span>
        </button>

        <button
          type="submit"
          onClick={handleLogin}
          className="w-[280px] h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
        >
          <span className="flex items-center justify-center w-fit 
                    [-webkit-text-fill-color:white] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    font-normal text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            LOGIN
          </span>
        </button>
      </nav>

      {/* ROBOT - Exact match to Page 1 */}
      <img
        className="absolute top-[194px] left-[952px] w-[269px] h-[457px] aspect-[0.58] object-cover"
        alt="Smart Library Assistant Robot"
        src={robotImage}
      />
    </main>
  );
};

export default MemberLogin;