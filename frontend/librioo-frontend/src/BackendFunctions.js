export function testfun(libraryId){
    console.log(libraryId);
    
    
}

export async function memberLogin(libraryId) {
    try{
        const response = await fetch(`http://localhost:8080/api/loginmember?libraryid=${libraryId}`, {
            method: "POST",
        });

        if(response.ok){
            const memberData = await response.json();
            return memberData;
            
          
        }else{
            return null;
        }
    }catch(e){
        alert("Error occured "+e);
    }
}

export async function searchBooksByName(keyword) {
  if (!keyword || keyword.trim() === "") return [];

  try {
    const response = await fetch(
      `http://localhost:8080/api/searchname?keyword=${encodeURIComponent(keyword)}`
    );

    // if (!response.ok) {
    //   throw new Error("Failed to fetch books");
    // }

    return await response.json();
  } catch (error) {
    console.error("Search API error:", error);
    return [];
  }
}

export async function guestLogin(guestid) {
    try{
        const response = await fetch(`http://localhost:8080/api/loginguest?guestid=${guestid}`, {
            method: "POST",
        });

        if(response.ok){
            const guestData = await response.json();
            return guestData;
            
          
        }else{
            return null;
        }
    }catch(e){
        alert("Error occured "+e);
    }
}