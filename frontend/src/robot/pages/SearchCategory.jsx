import React, { useState } from "react";
import RobotLayout from "../layouts/RobotLayout";
import BackgroundContainer from "../components/BackgroundContainer";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import GuideButton from "../components/GuideButton";
import CancelButton from "../components/CancelButton";

const SearchCategory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "SCIENCE", "TECHNOLOGY", "FICTION", "NOVEL",
    "MYSTERY", "HISTORY", "ROMANCE", "HORROR",
    "BIOGRAPHY", "FANTASY", "THRILLER", "CHILDREN"
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching Category:", searchQuery);
  };

  return (
    <RobotLayout>
      <div className="h-full flex flex-col px-[20px] md:px-[65px] pb-6 overflow-hidden">
        
        {/* Title */}
        <h1 className="flex-shrink-0 ml-[80px] mb-4 [font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[30px] md:text-[40px]">
          Search Book By Category
        </h1>

        <BackgroundContainer className="relative flex flex-col flex-1 overflow-hidden">
            
            {/* FIXED: Added 'pl-[40px] pr-6' to match SearchBook.jsx exactly */}
            <div className="w-full h-full overflow-y-auto custom-scrollbar pl-[40px] pr-6 pt-[30px]">
                
                {/* Header Row */}
                <div className="flex flex-row items-start w-full gap-[60px]">
                    
                    {/* Search Bar */}
                    <div className="ml-[40px] flex-1 max-w-[630px] min-w-0 mt-2">
                        <SearchBar
                            query={searchQuery}
                            onChange={handleSearchChange}
                            onSubmit={handleSearchSubmit}
                            className="w-full"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="mr-[40px] w-[240px] flex-shrink flex flex-col gap-[3px]">
                        <GuideButton className="w-full text-[14px] sm:text-[18px]" />
                        <CancelButton className="w-full text-[14px] sm:text-[18px]" />
                    </div>
                </div>

                {/* Grid */}
                <section className="mt-[60px] mr-[60px] mb-[20px] grid grid-cols-4 gap-x-[20px] gap-y-[60px] pr-4">
                    {categories.map((category, index) => (
                        <div key={index} className="flex justify-center min-w-0">
                            <BookCard
                                title={category}
                                image={null}
                                coverText={category}
                                author=""
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

export default SearchCategory;