import React,{useState} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout";
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state?.user || {};

  // 1. New State to track which button is selected
  // Options: null (none), 'name', or 'category'
  const [selectedOption, setSelectedOption] = useState(null);

  const handleBackClick = () => {
    navigate("/robot/user-details", { state: { user: userData } });
  };

  // 2. Button Click Handlers (Just Select, Don't Navigate)
  const selectNameSearch = () => {
    setSelectedOption("name");
    console.log("Selected: Name Search");
  };

  const selectCategorySearch = () => {
    setSelectedOption("category");
    console.log("Selected: Category Search");
  };

  // 3. Proceed Button Logic (Actually Navigates)
  const handleProceedClick = () => {
    if (selectedOption === "name") {
      navigate("/robot/search-book", { state: { user: userData } });
    } else if (selectedOption === "category") {
      navigate("/robot/search-category", { state: { user: userData } });
    } else {
      // Optional: Alert if they try to proceed without picking one
      alert("Please select a search method first!");
    }
  };

  return (
    <RobotLayout>
      <div className="h-full flex flex-col overflow-y-auto overflow-x-hidden px-[100px]">

        {/* Title Section */}
        <div style={{ 
          paddingLeft: 'clamp(20px, 25vw, 320px)',
          marginBottom: 'clamp(20px, 4vh, 60px)',
          flexShrink: 0
        }}>
          <h1 
            className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] tracking-[0] leading-[normal]"
            style={{ fontSize: 'clamp(24px, 4vh, 60px)' }}
          >
            Search Books
          </h1>
        </div>

        {/* Content Area */}
        <div style={{ 
          paddingLeft: 'clamp(0px, 12vw, 100px)',
          flex: 1,
          minHeight: '100px',
          display: 'flex',
          overflow: 'visible',
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: 'clamp(15px, 4vw, 100px)', 
            alignItems: 'stretch',
            width: '100%',
            height: '100%',
          }}>
            
            {/* Left side: Search Options & Nav Buttons */}
            <div style={{ 
              flex: 1, 
              minWidth: 0,
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(20px, 3vh, 40px)',
              height: '100%'}}>
              
                
                {/* Search By Name */}
                <button
                  onClick={selectNameSearch}
                  // CONDITIONAL STYLING:
                  // If selected, add a bright border (ring) and slightly lighter background
                  className={`
                    w-full flex items-center justify-center rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                    cursor-pointer transition-all focus:outline-none px-6
                    ${selectedOption === 'name' 
                      ? "bg-[#00000080] ring-4 ring-[#ff7421] scale-[1.02]" // Active Style
                      : "bg-[#00000045] hover:bg-[#00000060]"               // Inactive Style
                    }
                  `}
                  style={{ 
                    flex: 1,
                    minHeight: '50px',
                    maxHeight: '280px'
                  }}
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
                    Search Book By Name
                  </span>
                </button>

                {/* Search By Category */}
                <button
                  onClick={selectCategorySearch}
                  // CONDITIONAL STYLING:
                  className={`
                    w-full flex items-center justify-center rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                    cursor-pointer transition-all focus:outline-none px-6
                    ${selectedOption === 'category' 
                      ? "bg-[#00000080] ring-4 ring-[#ff7421] scale-[1.02]" // Active Style
                      : "bg-[#00000045] hover:bg-[#00000060]"               // Inactive Style
                    }
                  `}
                  style={{ 
                    flex: 1,
                    minHeight: '50px',
                    maxHeight: '280px'
                  }}
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
                    Search By Category
                  </span>
                </button>


              {/* --- Navigation Buttons (Back / Proceed) --- */}
              <div className="flex flex-row gap-[50px] sm:gap-[120px] w-full mt-2">
                <button
                  type="button"
                  onClick={handleBackClick}
                  className="flex-1 h-[60px] sm:h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[clamp(16px,2.5vw,32px)]">
                    BACK
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleProceedClick}
                  // Disable Proceed if nothing is selected (Optional UX choice)
                  // disabled={!selectedOption} 
                  className={`
                    flex-1 h-[60px] sm:h-[80px] flex items-center justify-center rounded-[20px] shadow-[0px_4px_4px_#00000040] transition-all focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                    ${selectedOption ? "bg-[#00000045] cursor-pointer hover:bg-[#00000060]" : "bg-[#00000020] cursor-not-allowed opacity-70"}
                  `}
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[clamp(16px,2.5vw,32px)]">
                    PROCEED
                  </span>
                </button>
              </div>

            </div>

            {/* Right side: Robot image (Desktop) */}
            <div style={{ 
              flexShrink: 0, 
              width: 'clamp(100px, 18vw, 400px)',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              overflow: 'hidden',
            }}>
              <img
                style={{ 
                  width: '100%', 
                  height: '100%',
                  minHeight: '120px',
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

export default SearchPage;