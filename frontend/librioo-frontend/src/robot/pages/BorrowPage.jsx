import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logolib31 from "../../assets/logolib3-1.png";
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

const BorrowPage = () => {
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const navigate = useNavigate();

  const handleBorrow = (e) => {
    e.preventDefault();
    // ⚠️ BACKEND INTEGRATION POINT:
    // Replace with API call to borrow book using bookId and bookName
    console.log("Borrowing book:", { bookId, bookName });
  };

  const handleCancel = () => {
    // Clear form fields
    setBookId("");
    setBookName("");
  };

  const handleBack = () => {
    navigate("/robot/selection");
  };

  return (
    <main className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-w-[1280px] min-h-[720px] relative">
      
      {/* HEADER - Consistent with MemberLogin */}
      <header className="absolute top-3.5 left-16 w-[1152px] h-[100px]">
        <div className="absolute top-0 left-0 w-[1280px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
        <h2 className="absolute top-[45px] left-[59px] text-white [font-family:'Aldrich-Regular',Helvetica] text-[22px]">
          Smart Library Assistant
        </h2>
        <img
          className="absolute top-0 left-[43px] w-[191px] h-[72px]"
          alt="Librioo Logo"
          src={logolib31}
        />
      </header>

      {/* PAGE TITLE */}
      <section className="absolute top-[143px] left-[194px] w-[650px]">
        <h1 className="[font-family:'ADLaM_Display-Regular',Helvetica] text-[#caf9ff] text-[40px] text-center">
          Borrow Book
        </h1>
      </section>

      {/* FORM AREA */}
      <form onSubmit={handleBorrow}>
        {/* Book ID Field */}
        <div className="absolute top-[283px] left-[194px] w-[650px] h-[101px]">
          <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d926] rounded-[20px] shadow-md" />
          <label
            htmlFor="book-id"
            className="absolute top-[32px] left-[50px] text-white text-[32px] [font-family:'Aldrich-Regular',Helvetica]"
          >
            Book ID :
          </label>
          <input
            type="text"
            id="book-id"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            className="absolute top-[16px] right-[40px] w-[301px] h-[68px] bg-[#d9d9d926] rounded-[20px] shadow-md px-6 text-white text-[24px] [font-family:'Aldrich-Regular',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#caf9ff]"
            required
          />
        </div>

        {/* Book Name Field */}
        <div className="absolute top-[414px] left-[194px] w-[650px] h-[101px]">
          <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d926] rounded-[20px] shadow-md" />
          <label
            htmlFor="book-name"
            className="absolute top-[32px] left-[50px] text-white text-[32px] [font-family:'Aldrich-Regular',Helvetica]"
          >
            Book Name :
          </label>
          <input
            type="text"
            id="book-name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="absolute top-[16px] right-[40px] w-[301px] h-[68px] bg-[#d9d9d926] rounded-[20px] shadow-md px-6 text-white text-[24px] [font-family:'Aldrich-Regular',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#caf9ff]"
            required
          />
        </div>

        {/* NAVIGATION BUTTONS */}
        <nav className="absolute top-[565px] left-[194px] w-[650px] flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="w-[280px] h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-md cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
          >
            <span className="text-white text-[32px] [font-family:'Aldrich-Regular',Helvetica]">
              CANCEL
            </span>
          </button>

          <button
            type="submit"
            className="w-[280px] h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-md cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
          >
            <span className="text-white text-[32px] [font-family:'Aldrich-Regular',Helvetica]">
              BORROW
            </span>
          </button>
        </nav>
      </form>

      {/* ROBOT MASCOT */}
      <img
        className="absolute top-[194px] left-[952px] w-[269px] h-[457px] object-cover"
        alt="Smart Library Assistant Robot"
        src={robotImage}
      />
    </main>
  );
};

export default BorrowPage;