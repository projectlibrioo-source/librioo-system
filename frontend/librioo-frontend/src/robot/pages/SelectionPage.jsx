import React from "react";
import { useNavigate } from "react-router-dom";
import logolib31 from "../../assets/logolib3-1.png";
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

const SelectionPage = () => {
  const navigate = useNavigate();

  const handleReadHereClick = () => {
    // ⚠️ BACKEND INTEGRATION POINT:
    // Replace with logic to open reading interface or route to reading page
    console.log("Read Here clicked");
  };

  const handleBorrowBookClick = () => {
    // ⚠️ BACKEND INTEGRATION POINT:
    // Replace with logic to initiate borrowing flow or route to borrow page
    console.log("Borrow Book clicked");
  };

  const handleBackClick = () => {
    // Navigate back to previous page (e.g., user details or login)
    navigate("/robot/user-details");
  };

  return (
    <main className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-w-[1280px] min-h-[780px] relative">
      
      {/* HEADER - Consistent with other pages */}
      <header className="absolute top-3.5 left-16 w-[1152px] h-[100px]">
              <div className="absolute top-[10px] left-[100px] w-[1280px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
              <h2 className="absolute top-[45px] left-[145px] [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
                Smart Library Assistant
              </h2>
              <img
                className="absolute top-[5px] left-[130px] w-[191px] h-[72px] aspect-[2.86]"
                alt="Logolib Smart Library Assistant"
                src={logolib31}
              />
            </header>

      {/* PAGE TITLE */}
      <section className="absolute top-[120px] left-[194px] w-[650px]">
        <h1 className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[40px] text-center">
          What would you like to do?
        </h1>
      </section>

      {/* SELECTION OPTIONS */}
      <nav className="absolute top-[215px] left-[194px] w-[650px]" aria-label="Selection options">
        <button
          onClick={handleReadHereClick}
          className="w-full h-[180px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421] focus:ring-offset-2"
        >
          <span className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Aldrich-Regular',Helvetica] text-[#fcfbfa] text-[40px]">
            Read Here
          </span>
        </button>

        <button
          onClick={handleBorrowBookClick}
          className="absolute top-[215px] left-0 w-[650px] h-[180px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421] focus:ring-offset-2"
        >
          <span className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Aldrich-Regular',Helvetica] text-[#fcfbfa] text-[40px]">
            Borrow Book
          </span>
        </button>
      </nav>

      {/* BACK BUTTON */}
      <nav className="absolute top-[640px] left-[194px] w-[650px] flex justify-start">
        <button
          type="button"
          onClick={handleBackClick}
          className="w-[200px] h-[60px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
        >
          <span className="text-white [font-family:'Aldrich-Regular',Helvetica] text-[24px]">
            BACK
          </span>
        </button>
      </nav>

      {/* ROBOT MASCOT */}
      <img
        className="absolute top-[160px] left-[952px] w-[269px] h-[457px] object-cover"
        alt="Library assistant robot mascot"
        src={robotImage}
      />
    </main>
  );
};

export default SelectionPage;