import React from "react";
import { useNavigate } from "react-router-dom";
import logolib31 from "../../assets/logolib3-1.png";
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

const SearchPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Navigate back to user details or member login
    navigate("/robot/user-details");
  };

  const handleProceedClick = () => {
    // ⚠️ BACKEND INTEGRATION POINT:
    // Replace console.log with logic to proceed to search results page
    console.log("Proceed button clicked");
  };

  const handleSearchByNameClick = () => {
    // ⚠️ BACKEND INTEGRATION POINT:
    // Replace console.log with API call or navigation to search-by-name form
    console.log("Search by name clicked");
  };

  const handleSearchByCategoryClick = () => {
    // ⚠️ BACKEND INTEGRATION POINT:
    // Replace console.log with API call or navigation to search-by-category form
    console.log("Search by category clicked");
  };

  return (
    <main className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-w-[1280px] min-h-[780px] relative">
      
      {/* HEADER - Synchronized with LoginPage and UserDetails */}
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

      {/* PAGE TITLE - Synchronized with ADLaM Display font and cyan color */}
      <section className="absolute top-[120px] left-[194px] w-[650px]">
        <h1 className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[40px] text-center tracking-[0] leading-[normal]">
          Search Books
        </h1>
      </section>

      {/* SEARCH OPTIONS - Styled exactly like Member/Guest login buttons */}
      <nav
        className="absolute top-[215px] left-[194px] w-[650px]"
        aria-label="Search options"
      >
        <button
          onClick={handleSearchByNameClick}
          className="w-full h-[180px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421] focus:ring-offset-2"
        >
          <span className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[#fcfbfa] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            Search Book By Name
          </span>
        </button>

        <button
          onClick={handleSearchByCategoryClick}
          className="absolute top-[215px] left-0 w-[650px] h-[180px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421] focus:ring-offset-2"
        >
          <span className="[-webkit-text-stroke:1px_#ff7421] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[#fcfbfa] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            Search By Category
          </span>
        </button>
      </nav>

      {/* NAVIGATION - Back and Proceed buttons styled like UserDetails */}
      <nav className="absolute top-[640px] left-[194px] w-[650px] flex justify-between">
        <button
          type="button"
          onClick={handleBackClick}
          className="w-[200px] h-[60px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
        >
          <span className="flex items-center justify-center w-fit [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
            BACK
          </span>
        </button>

        <button
          type="button"
          onClick={handleProceedClick}
          className="w-[200px] h-[60px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
        >
          <span className="flex items-center justify-center w-fit [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
            PROCEED
          </span>
        </button>
      </nav>

      {/* ROBOT MASCOT - Positioning synchronized with the Sitting Robot screenshot */}
      <img
        className="absolute top-[194px] left-[952px] w-[269px] h-[457px] aspect-[0.58] object-cover"
        alt="Library assistant robot mascot"
        src={robotImage}
      />
    </main>
  );
};

export default SearchPage;