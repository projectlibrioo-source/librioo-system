import React from "react";
import logolib31 from "../../assets/logolib3-1.png";
import robotLeft from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-1.png";
import robotRight from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

import book1 from"../../assets/Maroon Vintage Prayer Journal Book Cover 1.png";
import book2 from"../../assets/Black Minimalist Dark Floral Photo Book Cover 1.png";
import book3 from"../../assets/Dark Purple Starry Night Sky Book Cover 1.png";
import book4 from"../../assets/_Dark Mysterious Horror Book Cover 1.png";
import book5 from"../../assets/Black and Blue Modern Fantasy Dragon Novel Book Cover 1.png";
import book6 from"../../assets/Black and Blue Fiction Book Cover 1.png";
import book7 from"../../assets/Black and White Simple Alone Story eBook Cover 1.png";
import book8 from"../../assets/Blue White and Black Illustrated Light in the Hollow eBook 1.png";
import book9 from"../../assets/red-neon-mystic-book-cover-1.png";
import book10 from"../../assets/Blue Mystery Girl Woods Novel Book Cover 1.png";
import book11 from"../../assets/Dark Minimalist Vintage Portrait Photo Ripped Paper Book Cover 1.png";
import book12 from"../../assets/Black and White Classic Romance Book Cover 1.png";



// Sample book data by category
const bookData = {
  SCIENCE: [
    {
      title: "JOURNAL",
      subtitle: "Journeying with Faith One Day at a Time",
      image: book1,
    },
    {
      title: "THE NEVER GARDEN",
      subtitle: "By Helene P./Que",
      image: book2,
    },
    {
      title: "The Night Between Us",
      subtitle: "A Story by Samira Hadd",
      image: book3,
    },
    {
      title: "CAN YOU HEAR ME?",
      subtitle: "By Bailey Dupont",
      image: book4,
    },
  ],
  TECHNOLOGY: [
    {
      title: "Conquest of Flames",
      subtitle: "By Shawn Garcia",
      image: book5,
    },
    {
      title: "Xennix",
      subtitle: "By Rufus Stewart",
      image: book6,
    },
    {
      title: "Alone: A True Story",
      subtitle: "By Joshua Sykes",
      image: book7,
    },
    {
      title: "Bottom Line in Light",
      subtitle: "By Neil Ryan",
      image: book8,
    },
  ],
  FICTION: [
    {
      title: "Fairy Tale",
      subtitle: "The Magic of Tanders by Anastasya Peters",
      image: book9,
    },
    {
      title: "The Girl in the Woods",
      subtitle: "By Oliv Wales",
      image: book10,
    },
    {
      title: "Mariana",
      subtitle: "By Bailey Brown & Cesar Kent",
      image: book11,
    },
    {
      title: "A Love Worth Fighting For",
      subtitle: "By Chloe Wilson",
      image: book12,
    },
  ],
  NOVEL: [
    {
      title: "Alone: A True Story",
      subtitle: "By Joshua Sykes",
      image: book7,
    },
    {
      title: "The Never Garden",
      subtitle: "By Helene P./Que",
      image: book2,
    },
    {
      title: "Bottom Line in Light",
      subtitle: "By Neil Ryan",
      image: book8,
    },
    {
      title: "CAN YOU HEAR ME?",
      subtitle: "By Caleb Dvorak",
      image: book4,
    },
  ],
};



const SearchCategory = () => {
  return (
    <main className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-w-[1280px] min-h-[2922px] relative overflow-hidden">
      
      {/* HEADER */}
      <header className="absolute top-3.5 left-16 w-[1152px] h-[100px]">
              <div className="absolute top-[10px] left-[100px] w-[1280px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
              <h2 className="absolute top-[45px] left-[145px] [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
                Smart Library Assistant
              </h2>
              <img
                className="absolute top-[5px] left-[130px] w-[191px] h-[72px] aspect-[2.86]"
                alt="Logolib Smart Library Assistant"
                src={logolib31}
              />
            </header>

      {/* PAGE TITLE */}
      <section className="absolute top-[120px] left-[68px] w-[650px] z-10">
        <h1 className="[font-family:'ADLaM_Display-Regular',Helvetica] text-[#caf9ff] text-[40px] text-left">
          Search Book By Category
        </h1>
      </section>

      {/* SEARCH BAR */}
      <form className="absolute top-[233px] left-[123px] w-[900px] h-[50px] bg-[#ece6f0] rounded-full flex items-center shadow-md z-30 overflow-hidden">
        <input
          type="search"
          placeholder="Search Books By Category"
          className="flex-1 pl-12 pr-4 bg-transparent outline-none text-[#49454f] placeholder:text-[#49454f]/70 placeholder:font-semibold [font-family:'Aldrich-Regular',Helvetica] text-[16px]"
          style={{ fontWeight: 600 }}
        />
        <button
          type="submit"
          aria-label="Search"
          className="w-[40px] h-[40px] flex items-center justify-center bg-gradient-to-r from-[#4b4b6b] to-[#5c6ac4] text-white rounded-full hover:from-[#5c6ac4] hover:to-[#7c8fdc] transition-all"
        >
          🔍
        </button>
      </form>

      {/* GUIDE ME BUTTON */}
        <div className="absolute top-[221px] left-[1200px] z-30">
        <div className="w-[180px] h-[68px]
                        flex items-center justify-center
                        bg-[#000000] rounded-[20px]
                        shadow-md">
            <span className="[-webkit-text-stroke:1px_#28565c]
                            font-['Alfa Slab One']
                            text-[#FFFFFF] text-[32px]">
            GUIDE ME
            </span>
        </div>
        </div>

        {/* CANCEL BUTTON */}
        <div className="absolute top-[305px] left-[1200px] z-30">
        <div className="w-[180px] h-[68px]
                        flex items-center justify-center
                        bg-[#000000] rounded-[20px]
                        shadow-md">
            <span className="[-webkit-text-stroke:1px_#28565c]
                            font-['Alfa Slab One']
                            text-[#FFFFFF] text-[32px]">
            CANCEL
            </span>
        </div>
        </div>


      {/* CATEGORY SECTIONS */}
      {Object.entries(bookData).map(([category, books], index) => {
        const topOffset = 373 + index * 622;
        return (
          <section key={category}>
            {/* Category Label */}
            <div
              className="absolute left-[123px] w-[157px] [font-family:'Ruwudu-Bold',Helvetica] font-bold text-[#fcfbfa] text-[32px] tracking-[-0.08px] leading-[22px]"
              style={{ top: `${topOffset}px` }}
            >
              {category}
            </div>

            {/* Category Container with Books */}
            <div
              className="absolute left-[111px] w-[1180px] h-[441px] bg-[#d9d9d926] rounded-[20px] shadow-md flex gap-[30px] px-[40px] pt-[20px]"
              style={{ top: `${topOffset + 33}px` }}
            >
              {books.map((book, i) => (
                <div key={i} className="w-[240px] flex flex-col items-center">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-[180px] h-[240px] object-cover rounded-[10px] shadow-md"
                  />
                  <h3 className="mt-4 text-center text-white text-[18px] font-bold [font-family:'Aldrich-Regular',Helvetica] leading-tight">
                    {book.title}
                  </h3>
                  <p className="text-center text-white text-[14px] [font-family:'Aldrich-Regular',Helvetica] leading-tight">
                    {book.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Category Header */}
            <div
              className="absolute left-[111px] w-[1092px] h-[104px] shadow-md"
              style={{ top: `${topOffset + 428}px` }}
            >
              <div className="absolute top-0 left-0 w-[1260px] h-[104px] bg-[#d9d9d9] rounded-[20px]" />
              <div className="absolute top-[41px] left-[481px] w-[242px] [font-family:'Rubik_One-Regular',Helvetica] font-normal text-black text-[32px] tracking-[-0.08px] leading-[22px] text-center">
                {category}
              </div>
            </div>
          </section>
        );
      })}

      {/* Border Container */}
      <div className="absolute top-[200px] left-[60px] w-[1370px] h-[2699px] rounded-[20px] border-2 border-solid border-[#efe1e1] shadow-md z-10" />
    </main>
  );
};

export default SearchCategory