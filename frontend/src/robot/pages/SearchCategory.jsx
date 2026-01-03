import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundContainer from "../components/BackgroundContainer";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import GuideButton from "../components/GuideButton";
import CancelButton from "../components/CancelButton";
import logolib31 from "../../assets/logolib3-1.png";

const SearchCategory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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
    <main className="h-screen overflow-y-auto bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-w-[1280px] relative">
      
      {/* HEADER */}
      <header className="absolute top-3.5 left-16 w-[1152px] h-[100px]">
        <div className="absolute top-[10px] left-[100px] w-[1280px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
        <h2 className="absolute top-[45px] left-[145px] [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-white text-[22px] whitespace-nowrap">
          Smart Library Assistant
        </h2>
        <img
          className="absolute top-[5px] left-[130px] w-[191px] h-[72px] aspect-[2.86]"
          alt="Logolib Smart Library Assistant"
          src={logolib31}
        />
      </header>

      {/* TITLE */}
      <h1 className="absolute top-[105px] left-[67px] [font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[40px]">
        Search Book By Category
      </h1>

      {/* BACKGROUND CONTAINER */}
      <BackgroundContainer />

      {/* SEARCH BAR - NOW ALIGNED CORRECTLY */}
      {/* We pass the positioning classes here directly */}
      <SearchBar
        query={searchQuery}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
        className="absolute top-[215px] left-[65px] z-[100]" 
      />

      {/* ACTION BUTTONS */}
      <GuideButton />
      <CancelButton />

      {/* CATEGORY GRID */}
      <section className="absolute top-[385px] left-[55px] w-[1180px] grid grid-cols-4 gap-x-[30px] gap-y-[60px] z-30 pb-20">
        {categories.map((category, index) => (
          <BookCard
            key={index}
            title={category}
            image={null}
            coverText={category}
            author=""
          />
        ))}
      </section>

    </main>
  );
};

export default SearchCategory;