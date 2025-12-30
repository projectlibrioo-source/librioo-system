import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logolib31 from "../../assets/logolib3-1.png";
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-1.png";

const UserDetails = () => {
  // ⚠️ SAMPLE DATA — backend devs should replace this with actual user data fetched from API
  const [formData, setFormData] = useState({
    name: "Sandun Witharana", // TODO: Replace with backend-provided user name
    libraryId: "L21857541",   // TODO: Replace with backend-provided library ID
    email: "sandun@gmail.com", // TODO: Replace with backend-provided email
    contactNo: "0712222338",   // TODO: Replace with backend-provided contact number
  });

  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBack = () => {
    // Navigate back to login or member login page
    navigate("/robot/member-login");
  };

  const handleProceed = () => {
    // ⚠️ BACKEND INTEGRATION POINT:
    // Replace console.log with API call to save/update user details
    console.log("Proceed button clicked", formData);
  };

  const formFields = [
    { id: "name", label: "Name :", value: formData.name, type: "text", top: "214px" },
    { id: "libraryId", label: "Library ID :", value: formData.libraryId, type: "text", top: "314px" },
    { id: "email", label: "Email :", value: formData.email, type: "email", top: "414px" },
    { id: "contactNo", label: "Contact No :", value: formData.contactNo, type: "tel", top: "514px" },
  ];

  return (
    <main className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full min-w-[1280px] min-h-[720px] relative">
      
      {/* HEADER - Synchronized with Page 1 */}
      <header className="absolute top-3.5 left-16 w-[1152px] h-[100px]">
        <div className="absolute top-0 left-0 w-[1280px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />

        <h2 className="absolute top-[45px] left-[59px] [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
          Smart Library Assistant
        </h2>

        <img
          className="absolute top-0 left-[43px] w-[191px] h-[72px] aspect-[2.86]"
          alt="Logolib Smart Library Assistant"
          src={logolib31}
        />
      </header>

      {/* PAGE TITLE - Synchronized with Page 1 */}
      <section className="absolute top-[120px] left-[194px] w-[650px]">
        <h1 className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] text-[40px] text-center tracking-[0] leading-[normal]">
          User Details
        </h1>
      </section>

      {/* FORM AREA */}
      <form onSubmit={(e) => { e.preventDefault(); handleProceed(); }}>
        {formFields.map((field) => (
          <div
            key={field.id}
            className="absolute left-[194px] w-[650px] h-[80px]" 
            style={{ top: field.top }}
          >
            {/* 1. THE BIGGER BOX - Background for the entire row */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />

            {/* Label - Properly centered vertically (h-80 / 2) */}
            <label
              htmlFor={field.id}
              className="absolute top-[24px] left-[40px] [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[32px] tracking-[0] leading-[normal] whitespace-nowrap"
            >
              {field.label.split(":")[0].trim()}
            </label>

            {/* 3. THE COLON - Using the exact same text classes as above */}
            <span className="absolute top-[22px] left-[245px] 
                            [-webkit-text-fill-color:white] 
                            [font-family:'Aldrich-Regular',Helvetica] 
                            font-normal text-[32px] tracking-[0] leading-[normal]">
              :
            </span>

            {/* THE INNER INPUT BOX - Recessed area styled to match the Page 1 Label typography */}
            <div className="absolute top-[13px] left-[280px] w-[355px] h-[54px] bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040]">
              <input
                id={field.id}
                type={field.type}
                value={field.value}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="absolute top-[11px] left-[20px] bg-transparent px-10 
                          [-webkit-text-fill-color:white] 
                          [font-family:'Aldrich-Regular',Helvetica] 
                          font-normal text-[32px] tracking-[0] leading-[normal] 
                          focus:outline-none focus:ring-1 focus:ring-[#caf9ff] rounded-[20px]"
                aria-label={field.label.replace(":", "").trim()}
              />
            </div>
          </div>
        ))}

        {/* NAVIGATION - Updated positioning to match width of form rows */}
        <nav className="absolute top-[624px] left-[194px] w-[650px] flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="w-[200px] h-[60px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
          >
            <span className="flex items-center justify-center w-fit [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
              BACK
            </span>
          </button>

          <button
            type="submit"
            className="w-[200px] h-[60px] flex items-center justify-center bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] cursor-pointer transition-all hover:bg-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#ff7421]"
          >
            <span className="flex items-center justify-center w-fit [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
              PROCEED
            </span>
          </button>
        </nav>
      </form>

      {/* ROBOT - Exact match to Page 1 positioning */}
      <img
        className="absolute top-[194px] left-[952px] w-[269px] h-[457px] aspect-[0.58] object-cover"
        alt="Smart Library Assistant Robot"
        src={robotImage}
      />
    </main>
  );
};

export default UserDetails;