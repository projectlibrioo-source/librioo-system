import React from "react";
import logolib31 from "../../assets/logolib3-1.png";
import robotLeft from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-1.png";
import robotRight from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

const EndingPage = () => {
  return (
    <main className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-w-[1280px] min-h-[720px] relative overflow-hidden">
      
      {/* HEADER - Consistent with all pages */}
      <header className="absolute top-3.5 left-16 w-[1152px] h-[100px] z-20">
        <div className="absolute top-0 left-0 w-[1280px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
        <h2 className="absolute top-[45px] left-[59px] text-white [font-family:'Aldrich-Regular',Helvetica] text-[22px]">
          Smart Library Assistant
        </h2>
        <img
          className="absolute top-0 left-[43px] w-[191px] h-[72px]"
          alt="Librioo Logo"
          src={logolib31}
        />
      </header>

      {/* ROBOT MASCOTS BEHIND TEXT */}
      <img
        className="absolute top-[160px] left-[40px] w-[300px] h-[500px] object-cover opacity-30 z-0"
        alt="Smart Library Assistant Robot Left"
        src={robotLeft}
      />
      <img
        className="absolute top-[160px] right-[40px] w-[300px] h-[500px] object-cover opacity-30 z-0"
        alt="Smart Library Assistant Robot Right"
        src={robotRight}
      />

      {/* PAGE TITLE */}
      <section className="absolute top-[143px] left-[194px] w-[650px] z-10">
        <h1 className="[font-family:'ADLaM_Display-Regular',Helvetica] text-[#caf9ff] text-[40px] text-center">
          Transaction Complete!
        </h1>
      </section>

      {/* MESSAGE - styled like “Read Here” button */}
      <section className="absolute top-[260px] left-[194px] w-[650px] z-10">
        <p className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Aldrich-Regular',Helvetica] text-[#fcfbfa] text-[40px] text-center leading-[normal] whitespace-nowrap">
          Thank you for using our Library Assistance.
        </p>
      </section>

      {/* RETURN DATE MESSAGE - styled like Transaction Complete but white */}
      <section className="absolute top-[340px] left-[194px] w-[650px] z-10">
        <p className="[font-family:'ADLaM_Display-Regular',Helvetica] text-white text-[40px] text-center leading-[normal]">
          The return date has been sent via SMS to your mobile phone
        </p>
      </section>
    </main>
  );
};

export default EndingPage;