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


    </RobotLayout>


}