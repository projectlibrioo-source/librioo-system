import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout";
import BackgroundContainer from "../components/BackgroundContainer";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import GuideButton from "../components/GuideButton";
import CancelButton from "../components/CancelButton";
import blackAndBlueFictionBookCover1 from "../../assets/black-and-blue-fiction-book-cover-1.png";
import redNeonMysticBookCover1 from "../../assets/red-neon-mystic-book-cover-1.png";

import { searchBooksByName, navigateByBookName } from "../../BackendFunctions";

const SearchBook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // 2. STATE FOR BOOKS
  // We start with an empty array. The data will fill up when we search.
  const [bookData, setBookData] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); // To prevent double clicking
  
  const navigate = useNavigate();

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // 3. CONNECTED SEARCH HANDLER
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return; // Don't search empty strings

    setIsLoading(true);

    try {
        console.log("Searching backend for:", searchQuery);
        
        // Call the function your teammate wrote
        const results = await searchBooksByName(searchQuery);
        
        console.log("Backend results:", results);
        
        // Update the screen
        // NOTE: If results is null/undefined, fallback to empty array []
        setBookData(results || []); 

    } catch (error) {
        console.error("Error fetching books:", error);
        alert("Failed to connect to the library server.");
    } finally {
        setIsLoading(false);
    }
  };
  // ▼▼▼ UPDATED GUIDE ME FUNCTION ▼▼▼
  const handleGuideMe = async () => {
    // 1. Check if there is a book name typed in
    if (!searchQuery.trim()) {
        alert("Please search for a book name first!");
        return;
    }

    console.log("Guiding to book:", searchQuery);

    // 2. Call the backend function with the Search Query
    // Example: If user typed "Harry Potter", we send "Harry Potter"
    await navigateByBookName(searchQuery);

    // 3. Go to the Follow Me page
    navigate("/robot/follow");
  };
  
  //const handleGuideMe = () => console.log("Guide Me clicked");

  return (
    <RobotLayout>
      <div className="h-full flex flex-col px-[20px] md:px-[65px] pb-[clamp(12px,2vh,24px)] overflow-hidden">
        
        {/* Title - scales with viewport height */}
        <h1 className="flex-shrink-0 ml-[80px] mb-[clamp(8px,1.5vh,16px)] [font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[clamp(20px,3.5vh,40px)] leading-tight">
          Search Book By Name
        </h1>

        <BackgroundContainer className="relative flex flex-col flex-1 min-h-0 overflow-hidden">
          <div className="w-full h-full overflow-y-auto custom-scrollbar pl-[40px] pr-6 pt-[clamp(15px,2.5vh,30px)]">
            
            {/* Search and buttons section - scales proportionally */}
            <div className="flex flex-row items-start w-full gap-[clamp(30px,5vw,60px)]">
              <div className="ml-[40px] flex-1 max-w-[630px] min-w-0 mt-2"> 
                <SearchBar
                  query={searchQuery}
                  onChange={handleSearchChange}
                  onSubmit={handleSearchSubmit}
                  className="w-full"
                />
              </div>

              <div className="mr-[40px] w-[clamp(180px,20vw,240px)] flex-shrink-0 flex flex-col gap-[clamp(2px,0.5vh,6px)]">
                <GuideButton onClick={handleGuideMe} className="w-full text-[clamp(12px,1.6vh,18px)]" />
                <CancelButton className="w-full text-[clamp(12px,1.6vh,18px)]" />
              </div>
            </div>

            {/* Grid section - vertical spacing scales with viewport height */}
            <section className="mt-[clamp(20px,3vh,60px)] mr-[60px] mb-[20px] grid grid-cols-4 gap-x-[20px] gap-y-[clamp(20px,3vh,60px)] pr-4">
              {/* Optional: Loading Indicator */}
              {isLoading && (
                 <div className="col-span-4 text-center text-[#caf9ff] text-xl animate-pulse">
                    Scanning Library...
                 </div>
              )}

              {/* Optional: No Results Message */}
              {!isLoading && bookData.length === 0 && searchQuery !== "" && (
                 <div className="col-span-4 text-center text-[#caf9ff] opacity-60">
                    No books found named "{searchQuery}"
                 </div>
              )}

              {/* 4. MAP REAL DATA */}
              {bookData.map((book) => (
                <div key={book.id || Math.random()} className="flex justify-center min-w-0">
                  <BookCard
                    // CRITICAL: Ensure these match what your backend sends! 
                    // If the backend sends "bookName" instead of "title", change it here.
                    title={book.title || book.bookName || "Unknown Title"} 
                    author={book.author || book.writer || "Unknown Author"}
                    
                    // The backend won't return your local imports. 
                    // It will return a URL string or null.
                    image={book.image || book.imgUrl || null} 
                  />
                </div>
              ))}
            </section>

          </div>
        </BackgroundContainer>
      </div>
    </RobotLayout>
  );
};

export default SearchBook;