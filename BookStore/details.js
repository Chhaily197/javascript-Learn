document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the selected book ID from sessionStorage
  const selectedBookId = sessionStorage.getItem("selectedBookId");

  // Fetch book data from JSON file
  fetch("books.json")
    .then(response => response.json())
    .then(data => displayDetails(data));

  function displayDetails(books) {
    const container = document.getElementById("detailsContainer");

    // Find the selected book
    const selectedBook = books.find(book => book.id == selectedBookId);

    if (selectedBook) {
      // Display details for the selected book
      const details = document.createElement("div");
      details.innerHTML = `
        <h2>${selectedBook.name}</h2>
        <img src="${selectedBook.image}" alt="${selectedBook.name}">
        <p>ID: ${selectedBook.id}</p>
        <p>Description: ${selectedBook.description}</p>
        <p>Author: ${selectedBook.author}</p>
        <p>Genre: ${selectedBook.genre}</p>
        <p>Price: $${selectedBook.price.toFixed(2)}</p>
      `;

      container.appendChild(details);
    } else {
      // Display an error message if the book is not found
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Book not found.";
      container.appendChild(errorMessage);
    }
  }
});
