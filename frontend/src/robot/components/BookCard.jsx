import React from "react";

const BookCard = ({ title, author, image, coverText }) => (
  // Added 'box-border' to the main container to handle sizing logic correctly
  <article className="box-border w-full max-w-[260px] flex flex-col shadow-2xl transition-transform hover:scale-105 cursor-pointer">
    
    {/* Cover Area */}
    {/* Added 'box-border' here. 
        Because this has a 'border', 'box-border' ensures the border doesn't expand the width beyond 100% */}
    <div className="box-border w-full aspect-[260/360] bg-[#d9d9d926] rounded-t-[5px] overflow-hidden border border-[#ffffff1a] flex items-center justify-center relative">
      {image ? (
        <img src={image} alt={title} className="object-cover w-full h-full" />
      ) : (
        <div className={`w-full h-full flex items-center justify-center bg-[#3a4b5c] p-4 text-center ${coverText ? "text-white text-[24px] sm:text-[30px] font-['Aldrich-Regular'] font-bold" : "text-[#ffffff33]"}`}>
            {coverText || "No Image"}
        </div>
      )}
    </div>
    
    {/* Label Area */}
    {/* Added 'box-border' here as well for consistency */}
    <div className="box-border w-full bg-[#ece6f0] rounded-b-[5px] py-2 px-3 text-center h-[70px] flex flex-col justify-center">
      <div className="[font-family:'Aldrich-Regular',Helvetica] font-bold text-black text-[16px] sm:text-[20px] truncate leading-tight">
        {title}
      </div>
      {author && (
        <div className="[font-family:'Aldrich-Regular',Helvetica] font-normal text-[#49454f] text-[14px] sm:text-[16px] truncate">
          {author}
        </div>
      )}
    </div>
  </article>
);

export default BookCard;