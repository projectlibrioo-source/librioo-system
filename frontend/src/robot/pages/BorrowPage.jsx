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
  };

  return (
    <RobotLayout>
      <div className="h-full flex flex-col overflow-y-auto overflow-x-hidden px-[100px]">

        {/* Title */}
        <div
          style={{
            paddingLeft: "clamp(0px, 10vw, 80px)",
            marginBottom: "clamp(10px, 2vh, 40px)",
          }}
        >
          <h1
            className="[font-family:'ADLaM_Display-Regular',Helvetica] text-[#caf9ff]"
            style={{ fontSize: "clamp(20px, 3.5vh, 60px)" }}
          >
            Borrow Book
          </h1>
        </div>

        {/* Content */}
        <div
          style={{
            paddingLeft: "clamp(0px, 12vw, 100px)",
            flex: 1,
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "clamp(20px, 4vw, 100px)",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            {/* LEFT: Form */}
            <form
              onSubmit={handleBorrow}
              style={{
                flex: 1,
                maxWidth: "720px",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(20px, 3vh, 45px)",
              }}
            >
              {/* Book ID */}
              <div className="bg-[#d9d9d926] rounded-[20px] shadow-md px-6 py-6">
                <label
                  className="text-white [font-family:'Aldrich-Regular',Helvetica]"
                  style={{ fontSize: "clamp(18px, 2.5vw, 32px)" }}
                >
                  Book ID :
                </label>

                <input
                  value={bookId}
                  onChange={(e) => setBookId(e.target.value)}
                  required
                  className="mt-4 w-full bg-[#d9d9d926] rounded-[20px] shadow-md px-6 text-white focus:outline-none focus:ring-2 focus:ring-[#caf9ff]"
                  style={{
                    height: "clamp(45px, 6vh, 68px)",
                    fontSize: "clamp(16px, 2vw, 24px)",
                  }}
                />
              </div>

              {/* Book Name */}
              <div className="bg-[#d9d9d926] rounded-[20px] shadow-md px-6 py-6">
                <label
                  className="text-white [font-family:'Aldrich-Regular',Helvetica]"
                  style={{ fontSize: "clamp(18px, 2.5vw, 32px)" }}
                >
                  Book Name :
                </label>

                <input
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  required
                  className="mt-4 w-full bg-[#d9d9d926] rounded-[20px] shadow-md px-6 text-white focus:outline-none focus:ring-2 focus:ring-[#caf9ff]"
                  style={{
                    height: "clamp(45px, 6vh, 68px)",
                    fontSize: "clamp(16px, 2vw, 24px)",
                  }}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-6">
                <button
                  type="button"
                  onClick={() => {
                    setBookId("");
                    setBookName("");
                  }}
                  className="flex-1 bg-[#00000045] rounded-[20px] shadow-md hover:bg-[#00000060]"
                  style={{ height: "clamp(50px, 7vh, 80px)" }}
                >
                  <span
                    className="text-white [font-family:'Aldrich-Regular',Helvetica]"
                    style={{ fontSize: "clamp(18px, 2.5vw, 32px)" }}
                  >
                    CANCEL
                  </span>
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-[#00000045] rounded-[20px] shadow-md hover:bg-[#00000060]"
                  style={{ height: "clamp(50px, 7vh, 80px)" }}
                >
                  <span
                    className="text-white [font-family:'Aldrich-Regular',Helvetica]"
                    style={{ fontSize: "clamp(18px, 2.5vw, 32px)" }}
                  >
                    BORROW
                  </span>
                </button>
              </div>
            </form>

            {/* RIGHT: Robot */}
            <div
              style={{
                width: "clamp(120px, 18vw, 400px)",
                flexShrink: 0,
              }}
            >
              <img
                src={robotImage}
                alt="Smart Library Assistant Robot"
                style={{
                  width: "100%",
                  maxHeight: "620px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </RobotLayout>
  );
}
