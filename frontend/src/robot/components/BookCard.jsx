import React from "react";

const BookCard = ({ title, author, image, coverText }) => (
  // CHANGED: max-w-[260px] -> max-w-[min(260px,40vh)]
  // This links the width to the screen height. If the screen is short, the width shrinks, 
  // and because of aspect-ratio, the height shrinks too.
  <article className="box-border w-full max-w-[min(260px,40vh)] flex flex-col shadow-2xl transition-transform hover:scale-105 cursor-pointer mx-auto">
    
    {/* Cover Area */}
    <div className="box-border w-full aspect-[260/360] bg-[#d9d9d926] rounded-t-[5px] overflow-hidden border border-[#ffffff1a] flex items-center justify-center relative">
      {image ? (
        <img src={image} alt={title} className="object-cover w-full h-full" />
      ) : (
        <div className={`w-full h-full flex items-center justify-center bg-[#3a4b5c] p-4 text-center ${coverText ? "text-white text-[clamp(14px,2vw,30px)] font-['Aldrich-Regular'] font-bold" : "text-[#ffffff33]"}`}>
            {coverText || "No Image"}
        </div>
      )}
    </div>
    
    {/* Label Area */}
    {/* Used clamp for height so it doesn't get too big on tall screens or too small on tiny ones */}
    <div className="box-border w-full bg-[#ece6f0] rounded-b-[5px] py-2 px-3 text-center h-[clamp(50px,8vh,70px)] flex flex-col justify-center">
      <div className="[font-family:'Aldrich-Regular',Helvetica] font-bold text-black text-[clamp(12px,1.5vw,20px)] truncate leading-tight">
        {title}
      </div>
      {author && (
        <div className="[font-family:'Aldrich-Regular',Helvetica] font-normal text-[#49454f] text-[clamp(10px,1.2vw,16px)] truncate">
          {author}
        </div>
      )}
    </div>
  </article>
);

export default BookCard;