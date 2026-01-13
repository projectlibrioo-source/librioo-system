import React, { useState, useEffect } from "react"; // 1. Added useEffect
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout";
import BackgroundContainer from "../components/BackgroundContainer";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import GuideButton from "../components/GuideButton";
import CancelButton from "../components/CancelButton";
// 2. Import the backend functions
import { getCategories, searchByCategory} from "../../BackendFunctions";

const SearchCategory = () => {
  const navigate = useNavigate();// Hook for navigation
  const [searchQuery, setSearchQuery] = useState("");
  
  // 3. New State Variables
  const [categories, setCategories] = useState([]); // Stores the list of categories
  
  // Add this new state to track the active selection
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingLocation, setIsCheckingLocation] = useState(false); // New loader for the "Guide Me" click

  // 4. Load Categories from Backend on Startup
  useEffect(() => {
    async function fetchCats() {
        setIsLoading(true);
        const data = await getCategories();
        // If data is null/empty, we fall back to a default list or empty array
        if (data && data.length > 0) {
            setCategories(data);
        } else {
            // Fallback if backend is empty/down
            setCategories(["SCIENCE", "FICTION", "HISTORY", "TECNHOLOGY"]); 
        }
        setIsLoading(false);
    }
    fetchCats();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // If user types, we deselect the current selection to avoid confusion
    setSelectedCategory(null);
  };

  // 3. Simplified Submit: Just selects the first matching category if user hits Enter
  const handleManualSubmit = (e) => {
      e.preventDefault();
      // Optional: Auto-select the first visible category if user hits enter
      if (visibleCategories.length > 0) {
          setSelectedCategory(visibleCategories[0]);
      }
  };

  const handleCategoryClick = (catName) => {
      // Set the search bar text to match (optional, looks nice)
      setSearchQuery(catName);
      // Highlight the card
      setSelectedCategory(catName); 
  };

  // --- NEW: Handle the Guide Me Click Logic ---
  const handleGuideClick = async () => {
    if (!selectedCategory) return;

    setIsCheckingLocation(true); // Start a small loading state
    console.log("Checking location for:", selectedCategory);

    try {
      // 1. Ask the backend for data regarding this category
      const data = await searchByCategory(selectedCategory);

      // 2. Check if the backend returned valid data (Shelf Number/Location)
      // We assume if the array is empty or data is null, the shelf doesn't exist.
      if (data && data.length > 0) {
        console.log("Location found:", data);
        
        // 3. SUCCESS: Navigate to the Follow Page
        // We pass the shelf data or category info to the next page
        navigate("/robot/follow", { state: { category: selectedCategory, locationData: data } });
      } else {
        // 4. FAILURE: Show error message
        alert(`Sorry, no shelf location found for the category: ${selectedCategory}`);
      }

    } catch (error) {
      console.error("Error finding shelf:", error);
      alert("System Error: Could not retrieve shelf location.");
    } finally {
      setIsCheckingLocation(false);
    }
  };
  // ---------------------------------------------

  // 4. Live Filter Logic
  const visibleCategories = categories.filter(c => 
      c.toUpperCase().includes(searchQuery.toUpperCase())
  );

  return (
    <RobotLayout>
      <div className="h-full flex flex-col px-[20px] md:px-[65px] pb-[clamp(12px,2vh,24px)] overflow-hidden">
        
        <h1 className="flex-shrink-0 ml-[80px] mb-[clamp(8px,1.5vh,16px)] [font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[clamp(20px,3.5vh,40px)] leading-tight">
          Search Book By Category
        </h1>

        <BackgroundContainer className="relative flex flex-col flex-1 min-h-0 overflow-hidden">
          <div className="w-full h-full overflow-y-auto custom-scrollbar pl-[40px] pr-6 pt-[clamp(15px,2.5vh,30px)]">
            
            {/* Search and buttons */}
            <div className="flex flex-row items-start w-full gap-[clamp(30px,5vw,60px)]">
              <div className="ml-[40px] flex-1 max-w-[630px] min-w-0 mt-2">
                <SearchBar
                  query={searchQuery}
                  onChange={handleSearchChange}
                  onSubmit={handleManualSubmit} // Connected Submit
                  className="w-full"
                />
              </div>

              <div className="mr-[40px] w-[clamp(180px,20vw,240px)] flex-shrink-0 flex flex-col gap-[clamp(2px,0.5vh,6px)]">
                
                {/* Updated Guide Button */}
                <GuideButton 
                    // Disable if nothing selected OR while we are checking the database
                    disabled={!selectedCategory || isCheckingLocation} 
                    onClick={handleGuideClick}
                    className={`w-full text-[clamp(12px,1.6vh,18px)] transition-all
                      ${(!selectedCategory || isCheckingLocation) ? 'opacity-50 cursor-not-allowed' : ''}
                    `} 
                />
                
                {/* Optional: Visual Indicator that we are checking */}
                {isCheckingLocation && <p className="text-xs text-[#caf9ff] text-center animate-pulse">Checking Shelf...</p>}

                <CancelButton className="w-full text-[clamp(12px,1.6vh,18px)]" />
              </div>
            </div>

            {/* Grid section */}
            <section className="mt-[clamp(20px,3vh,60px)] mr-[60px] mb-[20px] grid grid-cols-4 gap-x-[20px] gap-y-[clamp(20px,3vh,60px)] pr-4">
              
              {/* LOADING STATE */}
              {isLoading && (
                  <div className="col-span-4 text-center text-[#caf9ff] text-xl animate-pulse">
                    Loading Categories...
                  </div>
              )}

              {/* CATEGORY CARDS */}
              {!isLoading && visibleCategories.map((category, index) => (
                <div key={index} className="flex justify-center min-w-0" onClick={() => handleCategoryClick(category)}>
                  <BookCard
                    title={category}
                    image={null}
                    coverText={category} 
                    author=""
                    // Dynamic Styling: Highlight if selected
                    className={`transition-transform cursor-pointer hover:scale-105 
                      ${selectedCategory === category ? 'ring-4 ring-[#ff7421] scale-105 shadow-[0_0_20px_#ff7421]' : ''}
                    `}                  
                  />
                </div>
              ))}

              {/* No Results Message */}
              {!isLoading && visibleCategories.length === 0 && (
                   <div className="col-span-4 text-center text-[#caf9ff] opacity-60">
                     No categories found.
                   </div>
              )}

            </section>

          </div>
        </BackgroundContainer>
      </div>
    </RobotLayout>
  );
};

export default SearchCategory;