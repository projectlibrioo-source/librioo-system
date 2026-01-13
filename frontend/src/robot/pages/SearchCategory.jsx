import React, { useState, useEffect } from "react"; // 1. Added useEffect
import RobotLayout from "../layouts/RobotLayout";
import BackgroundContainer from "../components/BackgroundContainer";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import GuideButton from "../components/GuideButton";
import CancelButton from "../components/CancelButton";
// 2. Import the backend functions
import { getCategories, searchByCategory } from "../../BackendFunctions";

const SearchCategory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // 3. New State Variables
  const [categories, setCategories] = useState([]); // Stores the list of categories
  const [bookResults, setBookResults] = useState([]); // Stores books when found
  const [viewMode, setViewMode] = useState("categories"); // Toggle: "categories" or "books"
  const [isLoading, setIsLoading] = useState(false);

  // 4. Load Categories from Backend on Startup
  useEffect(() => {
    async function fetchCats() {
        const data = await getCategories();
        // If data is null/empty, we fall back to a default list or empty array
        if (data && data.length > 0) {
            setCategories(data);
        } else {
            // Fallback if backend is empty/down
            setCategories(["SCIENCE", "FICTION", "HISTORY", "TECNHOLOGY"]); 
        }
    }
    fetchCats();
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // 5. Handle Search (When user hits Enter or clicks a Category)
  const performSearch = async (categoryToSearch) => {
    // Use the argument if provided (clicking a card), otherwise use input box
    const term = categoryToSearch || searchQuery;
    
    if (!term.trim()) return;

    setIsLoading(true);
    try {
        console.log("Searching for category:", term);
        const books = await searchByCategory(term);
        
        setBookResults(books || []);
        setViewMode("books"); // SWITCH THE VIEW TO SHOW BOOKS
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
  };

  // Wrapper for the SearchBar submit
  const handleManualSubmit = (e) => {
      e.preventDefault();
      performSearch(searchQuery);
  };

  // Wrapper for clicking a specific Category Card
  const handleCategoryClick = (catName) => {
      setSearchQuery(catName); // Update search bar to show what we clicked
      performSearch(catName);
  };

  // 6. Filter logic: If we are in "categories" mode, typing in the box filters the list
  const visibleCategories = categories.filter(c => 
      c.toUpperCase().includes(searchQuery.toUpperCase())
  );

  return (
    <RobotLayout>
      <div className="h-full flex flex-col px-[20px] md:px-[65px] pb-[clamp(12px,2vh,24px)] overflow-hidden">
        
        <h1 className="flex-shrink-0 ml-[80px] mb-[clamp(8px,1.5vh,16px)] [font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[clamp(20px,3.5vh,40px)] leading-tight">
          {viewMode === "categories" ? "Search Book By Category" : `Results: ${searchQuery}`}
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
                {/* Back Button Logic: If viewing books, Go back to Categories. Else, do nothing/navigate */}
                {viewMode === "books" ? (
                     <button 
                        onClick={() => { setViewMode("categories"); setSearchQuery(""); }}
                        className="w-full py-2 mb-2 text-white rounded-lg bg-red-500/50 hover:bg-red-500/70"
                     >
                        CLEAR SEARCH
                     </button>
                ) : (
                    <GuideButton className="w-full text-[clamp(12px,1.6vh,18px)]" />
                )}
                <CancelButton className="w-full text-[clamp(12px,1.6vh,18px)]" />
              </div>
            </div>

            {/* Grid section */}
            <section className="mt-[clamp(20px,3vh,60px)] mr-[60px] mb-[20px] grid grid-cols-4 gap-x-[20px] gap-y-[clamp(20px,3vh,60px)] pr-4">
              
              {/* LOADING STATE */}
              {isLoading && (
                  <div className="col-span-4 text-center text-[#caf9ff] text-xl animate-pulse">
                    Fetching Data...
                  </div>
              )}

              {/* MODE 1: SHOW CATEGORIES (Default) */}
              {!isLoading && viewMode === "categories" && visibleCategories.map((category, index) => (
                <div key={index} className="flex justify-center min-w-0" onClick={() => handleCategoryClick(category)}>
                  <BookCard
                    title={category}
                    image={null}
                    coverText={category} // Shows text on cover
                    author=""
                    // Add pointer cursor so user knows it's clickable
                    className="transition-transform cursor-pointer hover:scale-105" 
                  />
                </div>
              ))}

              {/* MODE 2: SHOW BOOKS (After Search) */}
              {!isLoading && viewMode === "books" && bookResults.map((book) => (
                 <div key={book.id || Math.random()} className="flex justify-center min-w-0">
                    <BookCard
                        title={book.title || book.bookName || "Unknown"}
                        author={book.author || book.writer || "Unknown"}
                        image={book.image || book.imgUrl || null} // Shows actual image
                        coverText={null}
                    />
                 </div>
              ))}

               {/* No Results Message */}
               {!isLoading && viewMode === "books" && bookResults.length === 0 && (
                   <div className="col-span-4 text-center text-[#caf9ff] opacity-60">
                      No books found in this category.
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