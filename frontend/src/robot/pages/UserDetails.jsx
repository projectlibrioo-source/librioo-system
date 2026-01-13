import React, { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import RobotLayout from "../layouts/RobotLayout"; 
import robotImage from "../../assets/pixverse-image-effect-prompt-give-me-three-pic-removebg-preview-1-1.png";

const UserDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

 // 1. Get the user data AND the userType ('member' or 'guest')
  const passedUser = location.state?.user || {};
  const userType = location.state?.userType || "member"; // Default to member if undefined

  console.log("Current User:", passedUser);
  console.log("User Type:", userType);

  // 2. Prepare the ID Label and Value dynamically
  // If guest, label is "Guest ID", otherwise "Library ID"
  const idLabel = userType === "guest" ? "Guest ID :" : "Library ID :";
  
  // 3. Map the data based on what your backend sends
  const formData = {
    // Name: Checks 'fullName' (Guest) OR 'name' (Member)
    name: passedUser.fullName || passedUser.name || "", 

    // ID: Checks 'guestID' (Guest) OR 'libraryId' (Member)
    id: userType === "guest" 
        ? (passedUser.guestID || passedUser.guestId || "") // Added guestID based on your image
        : (passedUser.libraryID || passedUser.ID || ""), 

    // Email: 'email' is usually the same for both
    email: passedUser.email || "", 

    // Contact: Checks 'phoneNumber' (Guest) OR 'contactNo' (Member)
    contactNo: passedUser.phoneNumber || passedUser.contactNo || passedUser.mobile || "",   
  };

  // 4. Handle Back Button Logic
  const handleBack = () => {
    if (userType === "guest") {
        navigate("/robot/guest-login"); // Go back to guest login
    } else {
        navigate("/robot/member-login"); // Go back to member login
    }
  };

  // Optional: Redirect back to login if someone tries to access this page directly without logging in
  useEffect(() => {
    if (!passedUser.libraryId && !passedUser.id) {
        // console.warn("No user data found, redirecting...");
        // navigate("/robot/member-login"); // Uncomment this later to secure the page
    }
  }, [passedUser, navigate]);


  const handleProceed = () => {
      console.log("Proceeding with user:", formData);
      // Pass the user data to the NEXT page (Selection) as well
      navigate("/robot/search", { state: { user: formData } }); 
    };

  const formFields = [
    { id: "name", label: "Name :", value: formData.name, type: "text" },
    { id: "id", label: idLabel, value: formData.id, type: "text" },
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
          marginRight: '60px',
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
                      h-[80px] sm:h-[100px]
                      bg-[#d9d9d926] rounded-[20px] shadow-[0px_4px_4px_#00000040]
                      flex flex-row items-center
                      px-4 sm:px-6
                      gap-[100px]
                    "
                  >
                    {/* Label */}
                    <label
                      htmlFor={field.id}
                      className="
                        w-[100px] sm:w-[160px] flex-shrink-0 ml-[10px]
                        [-webkit-text-fill-color:white] 
                        [font-family:'Aldrich-Regular',Helvetica] 
                        text-[25px] sm:text-[33px]
                        whitespace-nowrap
                        text-center
                      "
                    >
                      {field.label}
                    </label>

                    {/* INPUT FIELD STYLE: 
                       Matches the inner lighter box in your image 
                    */}
                    <div className="flex-1 mr-[20px] h-[50px] sm:h-[50px] bg-[#ffffff20] rounded-[15px] flex items-center shadow-inner">
                      <input
                        id={field.id}
                        type={field.type}
                        value={field.value}
                        readOnly
                        className="
                          w-full h-full
                          bg-transparent
                          px-3
                          text-white
                          [font-family:'Aldrich-Regular',Helvetica] 
                          text-[25px] sm:text-[22px]
                          text-center
                          placeholder-gray-400
                          focus:outline-none 
                          cursor-default
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