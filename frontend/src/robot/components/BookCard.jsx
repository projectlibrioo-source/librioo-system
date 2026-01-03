import React from "react";

const BookCard = ({ title, author, image, coverText }) => (
  <article className="w-[260px] flex flex-col shadow-2xl transition-transform hover:scale-105 cursor-pointer">
    {/* Cover Area */}
    <div className="w-[260px] h-[360px] bg-[#d9d9d926] rounded-t-[5px] overflow-hidden border border-[#ffffff1a] flex items-center justify-center">
      {image ? (
        <img src={image} alt={title} className="object-cover w-full h-full" />
      ) : (
        <div className={`w-full h-full flex items-center justify-center bg-[#3a4b5c] p-4 text-center ${coverText ? "text-white text-[30px] font-['Aldrich-Regular'] font-bold" : "text-[#ffffff33]"}`}>
            {/* If coverText (Category Name) exists, show it; otherwise show "No Image" */}
            {coverText || "No Image"}
        </div>
      )}
    </div>
    
    {/* Label Area */}
    <div className="w-[260px] bg-[#ece6f0] rounded-b-[5px] py-2 px-3 text-center h-[70px] flex flex-col justify-center">
      <div className="[font-family:'Aldrich-Regular',Helvetica] font-bold text-black text-[20px] truncate leading-tight">
        {title}
      </div>
      {/* Only show author if it exists (Categories might not have authors) */}
      {author && (
        <div className="[font-family:'Aldrich-Regular',Helvetica] font-normal text-[#49454f] text-[16px] truncate">
          {author}
        </div>
      )}
    </div>
  </article>
);

export default BookCard;