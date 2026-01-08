import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout"; 
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-1.png";

const UserDetails = () => {
  // ⚠️ SAMPLE DATA — backend devs should replace this with actual user data
  const [formData, setFormData] = useState({
    name: "Sandun Witharana", 
    libraryId: "L21857541",   
    email: "sandun@gmail.com", 
    contactNo: "0712222338",   
  });

  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBack = () => {
    navigate("/robot/member-login");
  };

  const handleProceed = () => {
    console.log("Proceed button clicked", formData);
    navigate("/robot/selection"); 
  };

  const formFields = [
    { id: "name", label: "Name :", value: formData.name, type: "text" },
    { id: "libraryId", label: "Library ID :", value: formData.libraryId, type: "text" },
    { id: "email", label: "Email :", value: formData.email, type: "email" },
    { id: "contactNo", label: "Contact No :", value: formData.contactNo, type: "tel" },
  ];

  return (
    <RobotLayout>
      {/* 1. MAIN CONTAINER
          - CHANGED: overflow-hidden (Removes scrolling)
          - Flex Column layout
      */}
      <div className="h-full w-full flex flex-col overflow-hidden p-3 lg:px-[100px]">
        
        {/* 2. CONTENT WRAPPER
            - justify-center: Centers content vertically
        */}
        <div className="
          flex-1 w-full
          flex flex-col lg:flex-row 
          items-center lg:items-start lg:justify-between
          justify-center
          gap-2 lg:gap-[clamp(20px,4vw,100px)]
          lg:pl-[clamp(0px,5vw,80px)] 
          lg:pr-[clamp(20px,10vw,150px)]
        ">
          
            {/* 3. ROBOT IMAGE 
               - Mobile: Very small (100px) to save space for the form
               - Desktop: Large and pushed down slightly
            */}
            <div className="
              order-1 lg:order-2
              flex-shrink-0 
              w-[100px] lg:w-[clamp(200px,25vw,300px)] 
              flex items-center justify-center
              lg:mt-[100px] 
            ">
              <img
                className="w-full h-auto object-contain"
                alt="Smart Library Assistant Robot"
                src={robotImage}
              />
            </div>

            {/* 4. FORM SECTION
               - Mobile: Tight gaps (gap-2) to fit 4 inputs + buttons
            */}
            <div className="
              order-2 lg:order-1
              flex flex-col w-full lg:max-w-[650px] 
              gap-3 lg:gap-8 
              lg:-mt-[20px]
            ">
              
              {/* Title */}
              <h1 className="
                [font-family:'ADLaM_Display-Regular',Helvetica] font-normal 
                text-[#caf9ff] text-center leading-tight
                text-[24px] lg:text-[40px]
              ">
                User Details
              </h1>

              {/* INPUT FIELDS LOOP */}
              <form 
                className="flex flex-col gap-2 lg:gap-6 w-full"
                onSubmit={(e) => { e.preventDefault(); handleProceed(); }}
              >
                {formFields.map((field) => (
                  <div 
                    key={field.id}
                    className="
                      w-full 
                      h-[50px] lg:h-[80px] /* Compact height for mobile */
                      bg-[#d9d9d926] rounded-[15px] lg:rounded-[20px] shadow-[0px_4px_4px_#00000040]
                      flex flex-row items-center
                      px-4 lg:px-8
                      gap-4
                    "
                  >
                    {/* Label */}
                    <label
                      htmlFor={field.id}
                      className="
                        flex-shrink-0 w-[90px] lg:w-auto
                        [-webkit-text-fill-color:white] 
                        [font-family:'Aldrich-Regular',Helvetica] 
                        text-[16px] lg:text-[28px]
                        whitespace-nowrap
                        text-left
                      "
                    >
                      {field.label}
                    </label>

                    {/* Input Field */}
                    <input
                      id={field.id}
                      type={field.type}
                      value={field.value}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="
                        flex-1 h-full
                        bg-transparent
                        text-white
                        [font-family:'Aldrich-Regular',Helvetica] 
                        text-[16px] lg:text-[28px]
                        placeholder-gray-400
                        focus:outline-none focus:border-b-2 focus:border-[#caf9ff]
                      "
                    />
                  </div>
                ))}

                {/* NAVIGATION BUTTONS */}
                <div className="flex justify-between w-full mt-2 lg:mt-4 gap-3">
                  
                  {/* Back Button */}
                  <button
                    type="button"
                    onClick={handleBack}
                    className="
                      flex-1 lg:flex-none lg:w-[200px] 
                      h-[45px] lg:h-[60px] 
                      flex items-center justify-center 
                      bg-[#00000045] rounded-[15px] lg:rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                      cursor-pointer transition-all hover:bg-[#00000060] 
                      focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                    "
                  >
                    <span className="
                      [-webkit-text-fill-color:white] 
                      [font-family:'Aldrich-Regular',Helvetica] 
                      text-[16px] lg:text-[24px]
                    ">
                      BACK
                    </span>
                  </button>

                  {/* Proceed Button */}
                  <button
                    type="submit"
                    className="
                      flex-1 lg:flex-none lg:w-[200px] 
                      h-[45px] lg:h-[60px] 
                      flex items-center justify-center 
                      bg-[#00000045] rounded-[15px] lg:rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                      cursor-pointer transition-all hover:bg-[#00000060] 
                      focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                    "
                  >
                    <span className="
                      [-webkit-text-fill-color:white] 
                      [font-family:'Aldrich-Regular',Helvetica] 
                      text-[16px] lg:text-[24px]
                    ">
                      PROCEED
                    </span>
                  </button>

                </div>
              </form>

            </div>

        </div>
      </div>
    </RobotLayout>
  );
};

export default UserDetails;