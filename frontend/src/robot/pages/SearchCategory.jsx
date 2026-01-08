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

  return (
    <RobotLayout>
      <div className="h-full flex flex-col px-[20px] md:px-[65px] pb-[clamp(12px,2vh,24px)] overflow-hidden">
        
        {/* Title - Matches SearchBook logic */}
        <h1 className="flex-shrink-0 ml-[80px] mb-[clamp(8px,1.5vh,16px)] [font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[clamp(20px,3.5vh,40px)] leading-tight">
          Search Book By Category
        </h1>

        <BackgroundContainer className="relative flex flex-col flex-1 min-h-0 overflow-hidden">
          <div className="w-full h-full overflow-y-auto custom-scrollbar pl-[40px] pr-6 pt-[clamp(15px,2.5vh,30px)]">
            
            {/* Search and buttons section */}
            <div className="flex flex-row items-start w-full gap-[clamp(30px,5vw,60px)]">
              <div className="ml-[40px] flex-1 max-w-[630px] min-w-0 mt-2">
                <SearchBar
                  query={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full"
                />
              </div>

              <div className="mr-[40px] w-[clamp(180px,20vw,240px)] flex-shrink-0 flex flex-col gap-[clamp(2px,0.5vh,6px)]">
                <GuideButton className="w-full text-[clamp(12px,1.6vh,18px)]" />
                <CancelButton className="w-full text-[clamp(12px,1.6vh,18px)]" />
              </div>
            </div>

            {/* Grid section - Matches SearchBook logic */}
            <section className="mt-[clamp(20px,3vh,60px)] mr-[60px] mb-[20px] grid grid-cols-4 gap-x-[20px] gap-y-[clamp(20px,3vh,60px)] pr-4">
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