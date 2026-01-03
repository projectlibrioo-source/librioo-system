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

const SearchBook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const bookData = [
    { id: 1, title: "Xennix", author: "Rufus Stewart", image: blackAndBlueFictionBookCover1 },
    { id: 2, title: "Conquest", author: "Shawn Garcia", image: null },
    { id: 3, title: "Fairy Tale", author: "Margarita Perez", image: null },
    { id: 4, title: "Alone", author: "Juliana Silva", image: redNeonMysticBookCover1 },
    { id: 5, title: "Journal", author: "Faith", image: null },
    { id: 6, title: "Mariana", author: "Bailey Dupont", image: null },
    { id: 7, title: "The Never Garden", author: "Helene Paquet", image: null },
    { id: 8, title: "Xennix", author: "Rufus Stewart", image: null },
    { id: 9, title: "Xennix", author: "Rufus Stewart", image: null },
    { id: 10, title: "The Night", author: "Rufus Stewart", image: null },
    { id: 11, title: "Fighting For", author: "Rufus Stewart", image: null },
    { id: 12, title: "Hear Me", author: "Rufus Stewart", image: null },
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };
  const handleGuideMe = () => console.log("Guide Me clicked");

  return (
    <RobotLayout>
      <div className="h-full flex flex-col px-[20px] md:px-[65px] pb-6 overflow-hidden">
        
        {/* Title */}
        <h1 className="flex-shrink-0 ml-[80px] mb-4 [font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[30px] md:text-[40px]">
          Search Book By Name
        </h1>

        {/* Big Background Container */}
        <BackgroundContainer className="relative flex flex-col flex-1 overflow-hidden">
            
            {/* Scrollable Area */}
            {/* pl-[40px]: Left padding for content */}
            {/* pr-6: Right padding ensures buttons NEVER touch the right border */}
            <div className="w-full h-full overflow-y-auto custom-scrollbar pl-[40px] pr-6 pt-[30px]">
                
                {/* HEADER ROW */}
                {/* gap-6: Keeps a gap between SearchBar and Buttons. They will NOT touch. */}
                <div className="flex flex-row items-start w-full gap-[60px]">
                    
                    {/* Search Bar Wrapper */}
                    {/* flex-1: Takes up available space */}
                    {/* min-w-0: CRITICAL. Allows this div to shrink smaller than its content if needed. */}
                    <div className="ml-[40px] flex-1 max-w-[630px] min-w-0 mt-2"> 
                         <SearchBar
                            query={searchQuery}
                            onChange={handleSearchChange}
                            onSubmit={handleSearchSubmit}
                            className="w-full"
                        />
                    </div>

                    {/* Button Wrapper */}
                    {/* w-[240px]: Sets a base width */}
                    {/* flex-shrink: Allows buttons to get narrower if screen is TINY */}
                    {/* flex flex-col gap-3: Vertical stack with 12px gap between buttons */}
                    <div className="mr-[40px] w-[240px] flex-shrink flex flex-col gap-[3px]">
                        <GuideButton onClick={handleGuideMe} className="w-full text-[14px] sm:text-[18px]" />
                        <CancelButton className="w-full text-[14px] sm:text-[18px]" />
                    </div>
                </div>

                {/* BOOK GRID */}
                {/* grid-cols-4: Always 4 columns */}
                {/* gap-x-[20px]: Horizontal gap between cards. */}
                {/* gap-y-[60px]: Vertical gap between rows. */}
                {/* pr-4: Extra padding on right of grid to match visual balance */}
                <section className="mt-[60px] mr-[60px] mb-[20px] grid grid-cols-4 gap-x-[20px] gap-y-[60px] pr-4">
                    {bookData.map((book) => (
                        // min-w-0 ensures the card container can shrink below the image size if necessary
                        <div key={book.id} className="flex justify-center min-w-0">
                            <BookCard
                                title={book.title}
                                author={book.author}
                                image={book.image}
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