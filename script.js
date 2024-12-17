// Select DOM elements
const addButton = document.getElementById("add-btn");
const destinationInput = document.getElementById("destination");
const travelList = document.getElementById("travel-list");

// Add event listener to the "Add" button
addButton.addEventListener("click", addDestination);

// Function to add a new destination
function addDestination() {
    const destinationName = destinationInput.value.trim();

    // Check if input is not empty
    if (destinationName === "") {
        alert("Please enter a destination name!");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${destinationName}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Add delete functionality to the button
    listItem.querySelector(".delete-btn").addEventListener("click", function() {
        listItem.remove(); // Remove the item from the list
    });

    // Append the new list item to the travel list
    travelList.appendChild(listItem);

    // Clear the input field
    destinationInput.value = "";
}
