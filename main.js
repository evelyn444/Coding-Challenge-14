//Task 2: Fetch Tickets Using Async/Await and Handle Errors
const ticketContainer = document.getElementById ('ticketList');
const errorMessage = document.getElementById('errorMessage');
async function displayTicket (UserId) {
    try{
        const UserIdResponse = await fetch (`https://jsonplaceholder.typicode.com/posts${UserId}`);
        if (!UserIdResponse.ok){
            throw new Error ('Failed to retrieve UserId');
        }
        const userid = await UserIdResponse.json();
        console.log ('UserId:', userid);
        const ticketIdResponse = await fetch(`https://jsonplaceholder.typicode.com/posts${UserId}`);
        if (!ticketIdResponse.ok){
            throw new Error ('Failed to retrieve ticket data');
        }
        //Task 3:  Display Tickets Dynamically on the Page and  Task 2 continued 
        const ticketId = await ticketIdResponse.json();
        console.log ('TickedId:', ticketId);
        orders[0].products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `Customer Name: ${product, userid}, Issue Description: ${product.title}, Deatils: ${product.body}`;
            orderList.appendChild (listItem);
        }); 
    } catch (error){
        console.error ('Error:', error.message);
    }
}