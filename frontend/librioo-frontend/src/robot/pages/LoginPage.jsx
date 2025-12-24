import React from "react";
import {useNavigate} from "react-router-dom";
import logolib31 from "../../assets/logolib3-1.png";
import pixverseImageEffectPromptGiveMeThreePicRemovebgPreview11 from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-1.png";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleMemberLogin = () => {
    navigate("/robot/member-login");
    console.log("Member Login clicked");
  };

  const handleGuestLogin = () => {
    navigate("/robot/guest-login");
    console.log("Guest Login clicked");
  };

  return (
    <main className="bg-[linear-gradient(0deg,rgba(30,30,30,0.2)_0%,rgba(30,30,30,0.2)_100%),linear-gradient(180deg,rgba(33,36,70,0.5)_0%,rgba(129,218,248,0.5)_100%)] w-full min-w-[1280px] min-h-[720px] relative">
     
      <header className="absolute top-3.5 left-16 w-[1152px] h-[100px]">
        <div className="absolute top-0 left-0 w-[1280px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />

        <h2 className="absolute top-[55px] left-[59px] [font-family:'Aldrich-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
          Smart Library Assistant
        </h2>

        <img
          className="absolute top-0 left-[43px] w-[191px] h-[72px] aspect-[2.86]"
          alt="Logolib Smart Library Assistant"
          src={logolib31}
        />
      </header>

      <section
        className="absolute top-[143px] left-[194px] w-[650px]"
        aria-labelledby="welcome-heading"
      >
        <h1
          id="welcome-heading"
          className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[40px] text-center tracking-[0] leading-[normal]"
        >
          Welcome to the Library
        </h1>

        <p className="mt-[0px] [-webkit-text-stroke:1px_#080838] [font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#9dced4] text-2xl text-center tracking-[0] leading-[normal]">
          Please select how you&apos;d like to Proceed
        </p>
      </section>

      <img
        className="absolute top-[194px] left-[952px] w-[269px] h-[457px] aspect-[0.58] object-cover"
        alt="Smart Library Assistant Robot"
        src={pixverseImageEffectPromptGiveMeThreePicRemovebgPreview11}
      />

      <nav
        className="absolute top-[283px] left-[242px] w-[650px]"
        aria-label="Login options"
      >
        <button
          onClick={handleMemberLogin}
          className="w-full h-[180px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421] focus:ring-offset-2"
          aria-label="Member Login"
        >
          <span className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[#fcfbfa] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            Member Login
          </span>
        </button>

        <button
          onClick={handleGuestLogin}
          className="absolute top-[215px] left-0 w-[650px] h-[180px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421] focus:ring-offset-2"
          aria-label="Guest Login"
        >
          <span className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[#fcfbfa] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            Guest Login
          </span>
        </button>
      </nav>
    </main>
  );
};

export default LoginPage;