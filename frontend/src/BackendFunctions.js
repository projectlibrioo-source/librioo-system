import { API_BASE_URL } from './config.js';
export function testfun(libraryId){
    console.log(libraryId);


}

//Login as Member
export async function authenticateMember(libraryId) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/loginmember?libraryid=${libraryId}`, {
            method: "POST"
        });
        
        return await response.json(); 
    } catch (e) {
        console.error("error found");
        return null;
    }
}


//Search for the books by book name
export async function searchBooksByName(keyword) {
    try {
        let apiUrl = keyword && keyword.trim() !== "" ?
            `${API_BASE_URL}/api/searchname?keyword=${encodeURIComponent(keyword)}`
            : `${API_BASE_URL}/api/getbook`;
            
        const response = await fetch(apiUrl);
        if (response.ok) {
            return await response.json(); // Book List
        } else {
            return null; // Handle error
        }
    } catch (e) {
        alert(e);
        return null; // Return null on error
    }
}

//Search for the books by category
export async function searchBooksByCategory(category){
    try{
        const response = await fetch(`${API_BASE_URL}/api/searchcategory?category=${encodeURIComponent(category)}`);

        if(response.ok){
            return await response.json()
        }else{
            return null; //Handle error
        }
    }catch(e){
        alert(e);
    }
}

//Login as a Guest
export async function authenticateGuest(guestid) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/loginguest?guestid=${guestid}`, {
            method: "POST"
        });

        if (response.ok) {
            return await response.json(); 
        } else {
            return null; 
        }
    } catch (e) {
        alert("Enter correctly formatted NIC");
        return null;
    }
}


//Get distinct Categories
export async function getAllCategory() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/getcategory`, {
            method: "GET"
        });

        if (response.ok) {
            return await response.json(); 
        } else {
            return null; 
        }
    } catch (e) {
        alert("Error while bringing distinct categories");
        return null;
    }
}

//Guide to Books Section
export async function navigateToBook(bookName) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/navigate/book?name=${encodeURIComponent(bookName)}`, {
            method: "POST"
        });

        if (response.ok) {
            return await response.text(); 
        } else {
            return null; 
        }
    } catch (e) {
        alert("Error during navigation to book:", e);
        return null;
    }
}

//Guide to Books Categories
export async function navigateToCategory(category) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/navigate/category?category=${encodeURIComponent(category)}`, {
            method: "POST"
        });

        if (response.ok) {
            return await response.text(); 
        } else {
            return null; 
        }
    } catch (e) {
        alert("Error during navigation to category:", e);
        return null;
    }
}

//Read Here
export async function readBookWithRobot() {
    try{

    }catch(e){
        alert(e);
    }
}

//Borrow a book with robot
export async function borrowBookWithRobot(borrowRequest) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/borrowrobot`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(borrowRequest)
        });

        if (response.ok) {
            return await response.json();
        } else {
            return null; // Handle unauthorized/forbidden
        }
    } catch (e) {
        console.error("Borrow API error:", e);
        return null;
    }
}