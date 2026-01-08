import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout"; 
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-2.png";
import { memberLogin } from "../../BackendFunctions";

const MemberLogin = () => {
  const [libraryId, setLibraryId] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Prevent empty logins
    if (!libraryId.trim()) {
        alert("Please enter a Library ID");
        return;
    }

    setIsLoading(true); // Disable button

    try {
        console.log("Attempting login for ID:", libraryId);
        
        // Call the backend function
        const member = await memberLogin(libraryId);

        if (member) {
            console.log("Login successful:", member);
            // Optional: Save member info to localStorage if you need it later
            // localStorage.setItem("currentMember", JSON.stringify(member)); 
            
            alert("Login Success");
            navigate("/robot/search");
        } else {
            // If memberLogin returns null, the ID was not found
            alert("Invalid Library ID. Please try again.");
        }
    } catch (error) {
        console.error("Login error:", error);
    } finally {
        setIsLoading(false); // Re-enable button
    }
  };

  const handleBack = () => {
    navigate("/robot/login");
  };

  return (
    <main className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-w-[1280px] min-h-[780px] relative">
      
      {/* HEADER - Exact match to Page 1 */}
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

      {/* PAGE TITLE - Exact match to Page 1 */}
      <section className="absolute top-[143px] left-[194px] w-[650px]">
        <h1 className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[40px] text-center tracking-[0] leading-[normal]">
          Member Login
        </h1>
      </section>

      {/* FORM AREA*/}
      <form 
        onSubmit={handleLogin}
        className="absolute top-[283px] left-[194px] w-[650px] h-[101px]"
      >
        {/* The Bigger Box */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />

        <label
        htmlFor="library-id"
        className="absolute top-[32px] left-[50px] w-fit 
                    [-webkit-text-fill-color:white] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    font-normal text-[32px] tracking-[0] leading-[normal] whitespace-nowrap"
        >
        Library ID :
        </label>

        {/* The Input */}
        <input
          type="text"
          id="library-id"
          value={libraryId}
          onChange={(e) => setLibraryId(e.target.value)}
          className="absolute top-[16px] right-[40px] w-[301px] h-[68px] bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040] px-6 text-white text-[24px] [font-family:'Aldrich-Regular',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#caf9ff]"
          required
          autoFocus
        />
      </form>

              {/* Buttons Row - INCREASED GAP HERE */}
              <div className="flex flex-row justify-between w-full gap-[200px] mt-16">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 h-[80px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
                >
                  <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[32px]">
                    BACK
                  </span>
                </button>

        <button
          type="submit"
          onClick={handleLogin}
          disabled={isLoading} // Disable button when loading
          className={`w-[280px] h-[80px] flex items-center justify-center rounded-[20px] shadow-[0px_4px_4px_#00000040] transition-all focus:outline-none focus:ring-2 focus:ring-[#ff7421]
            ${isLoading ? "bg-[#ffffff20] cursor-not-allowed" : "bg-[#00000045] cursor-pointer hover:bg-[#00000060]"}`}
        >
          <span className="flex items-center justify-center w-fit 
                    [-webkit-text-fill-color:white] 
                    [font-family:'Aldrich-Regular',Helvetica] 
                    font-normal text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            {isLoading ? "..." : "LOGIN"}
          </span>
        </button>
      </nav>

      {/* ROBOT - Exact match to Page 1 */}
      <img
        className="absolute top-[140px] left-[952px] w-[269px] h-[457px] aspect-[0.58] object-cover"
        alt="Smart Library Assistant Robot"
        src={robotImage}
      />
    </main>
  );
};

export default MemberLogin;