

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
            console.log(memberData);
          
        }else{
            alert("Invalid Library ID");
        }
    }catch(e){
        alert("Error occured "+e)
    }
}