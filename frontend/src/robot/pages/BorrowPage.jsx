import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout";
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";

export default function BorrowPage() {

  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const navigate = useNavigate();

  const handleBorrow = (e) => {
    e.preventDefault();
    console.log("Borrowing:", { bookId, bookName });
    // Add your backend logic here
  };

  const handleCancel = () => {
    setBookId("");
    setBookName("");
    // Optional: navigate back if needed, e.g., navigate("/robot/search");
  };

  return (
    <RobotLayout>

      {/* Safe Float Animation */}
      <style>
        {`
          @keyframes safeFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-safe-float {
            animation: safeFloat 6s ease-in-out infinite;
          }
        `}
      </style>

      <div className="relative flex flex-col items-center justify-center w-full h-full p-4 overflow-x-hidden md:p-8"></div>

        {/* --- HOLOGRAPHIC BACKGROUND ORBS --- */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-400/20 blur-[120px] rounded-full z-0 pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#ff7421]/15 blur-[120px] rounded-full z-0 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

    </RobotLayout>


}