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
      <div className="h-full flex flex-col overflow-y-auto overflow-x-hidden px-[20px] sm:px-[100px]">

        {/* Title Section */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: 'clamp(20px, 25vw, 320px)',
          width: '100%',
          marginBottom: 'clamp(20px, 4vh, 60px)',
          marginTop: 'clamp(10px, 2vh, 40px)',
          flexShrink: 0
        }}>
          <h1 
            className="[font-family:'ADLaM_Display-Regular',Helvetica] font-normal text-[#caf9ff] tracking-[0] leading-[normal]"
            style={{ fontSize: 'clamp(24px, 4vh, 60px)' }}
          >
            User Details
          </h1>
        </div>

        {/* Content Area */}
        <div style={{ 
          paddingLeft: 'clamp(0px, 12vw, 100px)',
          flex: 1,
          minHeight: '100px',
          display: 'flex',
          overflow: 'visible',
          paddingBottom: '20px' 
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: 'clamp(15px, 4vw, 100px)', 
            alignItems: 'stretch',
            width: '100%',
            height: '100%',
            flexWrap: 'wrap'
          }}>
            
            {/* Left side: Form & Buttons */}
            <div style={{ 
              flex: 1, 
              minWidth: '300px',
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(15px, 2vh, 30px)', 
              maxWidth: '650px' 
            }}>
              
              {/* --- Form Section --- */}
              <form 
                className="flex flex-col gap-[15px] sm:gap-[25px] w-full"
                onSubmit={(e) => { e.preventDefault(); handleProceed(); }}
              >
                {formFields.map((field) => (
                  /* CONTAINER STYLE: 
                     Matches the outer dark glassmorphism box in your image 
                  */
                  <div 
                    key={field.id}
                    className="
                      w-full 
                      h-[60px] sm:h-[80px]
                      bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040]
                      flex flex-row items-center
                      px-4 sm:px-6
                      gap-[10px]
                    "
                  >
                    {/* Label */}
                    <label
                      htmlFor={field.id}
                      className="
                        w-[100px] sm:w-[160px] flex-shrink-0
                        [-webkit-text-fill-color:white] 
                        [font-family:'Aldrich-Regular',Helvetica] 
                        text-[16px] sm:text-[24px]
                        whitespace-nowrap
                        text-center
                        
                      "
                    >
                      {field.label}
                    </label>

                    {/* INPUT FIELD STYLE: 
                       Matches the inner lighter box in your image 
                    */}
                    <div className="flex-1 max-w-[440px] h-[40px] sm:h-[50px] bg-[#ffffff20] rounded-[15px] flex items-center shadow-inner">
                      <input
                        id={field.id}
                        type={field.type}
                        value={field.value}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="
                          w-full h-full
                          bg-transparent
                          px-3
                          text-white
                          [font-family:'Aldrich-Regular',Helvetica] 
                          text-[16px] sm:text-[22px]
                          text-center
                          placeholder-gray-400
                          focus:outline-none focus:ring-2 focus:ring-[#caf9ff] rounded-[15px]
                        "
                      />
                    </div>
                  </div>
                ))}

                {/* --- Navigation Buttons --- */}
                <div className="flex flex-row gap-[50px] sm:gap-[50px] w-full mt-4">
                  
                  {/* Back Button */}
                  <button
                    type="button"
                    onClick={handleBack}
                    className="
                      flex-1 h-[60px] sm:h-[80px] 
                      flex items-center justify-center 
                      bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                      cursor-pointer transition-all hover:bg-[#00000060] 
                      focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                    "
                  >
                    <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[clamp(16px,2.5vw,32px)]">
                      BACK
                    </span>
                  </button>

                  {/* Proceed Button */}
                  <button
                    type="submit"
                    className="
                      flex-1 h-[60px] sm:h-[80px] 
                      flex items-center justify-center 
                      bg-[#00000045] rounded-[20px] shadow-[0px_4px_4px_#00000040] 
                      cursor-pointer transition-all hover:bg-[#00000060] 
                      focus:outline-none focus:ring-2 focus:ring-[#ff7421]
                    "
                  >
                    <span className="[-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-[clamp(16px,2.5vw,32px)]">
                      PROCEED
                    </span>
                  </button>

                </div>
              </form>

            </div>

            {/* Right side: Robot image (Desktop) */}
            <div style={{ 
              flexShrink: 0, 
              width: 'clamp(100px, 18vw, 400px)',
              display: 'flex',
              alignItems: 'flex-start',
              overflow: 'hidden',
              marginTop: '-2px' 
            }} className="hidden sm:flex">
              <img
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '600px',
                  objectFit: 'contain'
                }}
                alt="Smart Library Assistant Robot"
                src={robotImage}
              />
            </div>
            
             

          </div>
        </div>
      </div>
    </RobotLayout>
  );
};

export default UserDetails;