import React from "react";

const BookCard = ({ title, author, image }) => (
  <article className="w-[260px] flex flex-col shadow-2xl transition-transform hover:scale-105">
    {/* Cover Area */}
    <div className="w-[260px] h-[360px] bg-[#d9d9d926] rounded-t-[5px] overflow-hidden border border-[#ffffff1a] flex items-center justify-center">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[#ffffff33] bg-[#3a4b5c]">No Image</div>
      )}
    </div>
    
    {/* Label Area - White background for contrast */}
    <div className="w-[260px] bg-[#ece6f0] rounded-b-[5px] py-2 px-3 text-center">
      <div className="[font-family:'Aldrich-Regular',Helvetica] font-bold text-black text-[20px] truncate leading-tight">{title}</div>
      <div className="[font-family:'Aldrich-Regular',Helvetica] font-normal text-[#49454f] text-[16px] truncate">{author}</div>
    </div>
  </article>
);

export default BookCard;