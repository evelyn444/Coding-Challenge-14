//Task 2: Fetch Tickets Using Async/Await and Handle Errors
const ticketContainer = document.getElementById ('ticketList');
const errorMessage = document.getElementById('errorMessage');
async function displayTicket (UserId) {
    try{ // trying andthrowing api info for user id
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
            const listItem = document.createElement('li'); //displaying ticket list
            listItem.textContent = `Customer Name: ${product, userid}, Issue Description: ${product.title}, Details: ${product.body}`;
            orderList.appendChild (listItem);
        }); 
    } catch (error){ //catch error message
        console.error ('Error:', error.message);
        //Task 4: Use finally to Ensure Cleanup
    } finally {
        
    }
}
displayTicket(1)