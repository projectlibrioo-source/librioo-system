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
              {bookData.map((book) => (
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