import React from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout";
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

const SearchPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Navigate back to user details or previous page
    navigate("/robot/user-details");
  };

  const handleProceedClick = () => {
    // ⚠️ BACKEND INTEGRATION POINT
    console.log("Proceed button clicked");
    // navigate("/robot/results");
  };

  const handleSearchByNameClick = () => {
    console.log("Search by name clicked");
    // navigate("/robot/search-name");
  };

  const handleSearchByCategoryClick = () => {
    console.log("Search by category clicked");
    // navigate("/robot/search-category");
  };

  return (
    <RobotLayout>
      {/* 1. MAIN CONTAINER
          - overflow-hidden: Prevents scrolling
          - flex-col: Stacks content vertically
      */}
      <div className="h-full w-full flex flex-col overflow-hidden p-3 lg:px-[100px]">
        
        {/* 2. CONTENT WRAPPER
            - justify-center: Centers content vertically
        */}
        <div className="
          flex-1 w-full
          flex flex-col lg:flex-row 
          items-center lg:items-start lg:justify-between
          justify-center
          gap-4 lg:gap-[clamp(20px,4vw,100px)]
          lg:pl-[clamp(0px,5vw,80px)] 
          lg:pr-[clamp(20px,10vw,150px)]
        ">
          
            {/* 3. ROBOT IMAGE 
               - Mobile: Small (120px)
               - Desktop: Large (300px), pushed down
            */}
            <div className="
              order-1 lg:order-2
              flex-shrink-0 
              w-[120px] lg:w-[clamp(200px,25vw,300px)] 
              flex items-center justify-center
              lg:mt-[80px] 
            ">
              <img
                className="w-full h-auto object-contain"
                alt="Library assistant robot mascot"
                src={robotImage}
              />
            </div>

            {/* 4. INTERACTIVE SECTION
               - Mobile: Tight gaps
            */}
            <div className="
              order-2 lg:order-1
              flex flex-col w-full lg:max-w-[650px] 
              gap-4 lg:gap-10 
              lg:-mt-[20px]
            ">
              
              {/* Title */}
              <h1 className="
                [font-family:'ADLaM_Display-Regular',Helvetica] font-normal 
                text-[#caf9ff] text-center leading-tight
                text-[28px] lg:text-[40px]
              ">
                Search Books
              </h1>

              {/* SEARCH BUTTONS */}
              <div className="flex flex-col gap-4 w-full">
                
                {/* Search By Name */}
                <button
                  onClick={handleSearchByNameClick}
                  className="
                    w-full 
                    h-[70px] lg:h-[180px] 
                    flex items-center justify-center 
                    bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                    cursor-pointer transition-all hover:bg-[#00000060] 
                    focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                  "
                >
                  <span className="
                    [-webkit-text-stroke:1px_#ff7421] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    text-[#fcfbfa] 
                    text-[22px] lg:text-[40px]
                    whitespace-nowrap
                  "
                  >
                    Search Book By Name
                  </span>
                </button>

                {/* Search By Category */}
                <button
                  onClick={handleSearchByCategoryClick}
                  className="
                    w-full 
                    h-[70px] lg:h-[180px] 
                    flex items-center justify-center 
                    bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                    cursor-pointer transition-all hover:bg-[#00000060] 
                    focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                  "
                >
                  <span className="
                    [-webkit-text-stroke:1px_#ff7421] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    text-[#fcfbfa] 
                    text-[22px] lg:text-[40px]
                    whitespace-nowrap
                  "
                  >
                    Search By Category
                  </span>
                </button>
              </div>

              {/* NAVIGATION BUTTONS */}
              <div className="flex justify-between w-full mt-2 lg:mt-4 gap-4">
                
                {/* Back Button */}
                <button
                  type="button"
                  onClick={handleBackClick}
                  className="
                    flex-1 lg:flex-none lg:w-[200px] 
                    h-[50px] lg:h-[60px] 
                    flex items-center justify-center 
                    bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                    cursor-pointer transition-all hover:bg-[#00000060] 
                    focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                  "
                >
                  <span className="
                    [-webkit-text-fill-color:white] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    text-[20px] lg:text-[24px]
                  ">
                    BACK
                  </span>
                </button>

                {/* Proceed Button */}
                <button
                  type="button"
                  onClick={handleProceedClick}
                  className="
                    flex-1 lg:flex-none lg:w-[200px] 
                    h-[50px] lg:h-[60px] 
                    flex items-center justify-center 
                    bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                    cursor-pointer transition-all hover:bg-[#00000060] 
                    focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                  "
                >
                  <span className="
                    [-webkit-text-fill-color:white] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    text-[20px] lg:text-[24px]
                  ">
                    PROCEED
                  </span>
                </button>

              </div>
            </div>

        </div>
      </div>
    </RobotLayout>
  );
};

export default SearchPage;