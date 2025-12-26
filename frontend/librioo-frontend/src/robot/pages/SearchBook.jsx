import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import GuideButton from "../components/GuideButton";
import CancelButton from "../components/CancelButton";
import blackAndBlueFictionBookCover1 from "../../assets/black-and-blue-fiction-book-cover-1.png";
import redNeonMysticBookCover1 from "../../assets/red-neon-mystic-book-cover-1.png";
import logolib31 from "../../assets/logolib3-1.png";

const SearchBook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // ⚠️ BACKEND INTEGRATION POINT:
  // Replace this sample array with dynamic data fetched from backend (e.g., useEffect + fetch/axios)
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // ⚠️ BACKEND INTEGRATION POINT:
    // Replace with API call to search books by name using searchQuery
    console.log("Searching for:", searchQuery);
  };

  const handleGuideMe = () => {
    // ⚠️ BACKEND INTEGRATION POINT:
    // Replace with logic to fetch recommended books or navigate to guided search
    console.log("Guide Me clicked");
  };

  return (
    <main className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-w-[1280px] min-h-[2105px] relative">
     
      <header className="absolute top-3.5 left-16 w-[1152px] h-[100px]">
        <div className="absolute top-0 left-0 w-[1280px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />

        <h2 className="absolute top-[45px] left-[59px] [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
          Smart Library Assistant
        </h2>

        <img
          className="absolute top-0 left-[43px] w-[191px] h-[72px] aspect-[2.86]"
          alt="Logolib Smart Library Assistant"
          src={logolib31}
        />
      </header>

      {/* Title - ADLaM Font synchronized */}
      <h1 className="absolute top-[105px] left-[65px] [font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[40px]">
        Search Book By Name
      </h1>

      {/* Border Container - Matches screenshot */}
      <div className="absolute top-[188px] left-[17px] w-[1244px] h-[1882px] rounded-[20px] border-2 border-solid border-[#efe1e126] bg-[#0000001a] z-10 shadow-md" />

      {/* Search Bar - Pill styled */}
      <SearchBar
        query={searchQuery}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />

      {/* Guide & Cancel Buttons - Styled like Page 1 buttons */}
      <GuideButton onClick={handleGuideMe} />
      <CancelButton />

      {/* Book Cards Grid - 4 per row matching screenshot coordinates */}
      <section className="absolute top-[385px] left-[55px] w-[1180px] grid grid-cols-4 gap-x-[30px] gap-y-[60px] z-30">
        {bookData.map((book) => (
          <BookCard 
            key={book.id} 
            title={book.title} 
            author={book.author} 
            image={book.image} 
          />
        ))}
      </section>
    </main>
  );
};

export default SearchBook;