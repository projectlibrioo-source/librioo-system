import React from "react";
import RobotLayout from "../layouts/RobotLayout";

const FollowPage = () => {
  return (
    <RobotLayout>
      {/* MAIN CONTAINER 
          - h-full w-full: Fills the RobotLayout content area
          - flex items-center justify-center: Centers the text perfectly
          - p-4: Adds padding so text doesn't touch edges on small phones
      */}
      <div className="h-full w-full flex items-center justify-center p-4">
        
        {/* "FOLLOW ME" TEXT 
            - Responsive Text Size: 50px on Mobile -> 100px on Desktop
            - Responsive Tracking: 2px on Mobile -> 10px on Desktop
        */}
        <h1 
          className="
            text-[#fcfbfa] 
            font-[Aldrich-Regular] 
            uppercase 
            text-center
            leading-tight
            /* Responsive Styles */
            text-[50px] sm:text-[70px] lg:text-[100px]
            tracking-[2px] lg:tracking-[10px]
          "
          style={{
            WebkitTextStroke: "2px #ff7421", 
            paintOrder: "stroke fill"
          }}
        >
          FOLLOW ME
        </h1>
        
      </div>
    </RobotLayout>
  );
};

export default FollowPage;