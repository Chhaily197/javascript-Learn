document.addEventListener("DOMContentLoaded", function () {
  // Fetch book data from JSON file
  fetch("books.json")
    .then(response => response.json())
    .then(data => displayBooks(data));

  function displayBooks(books) {
    const container = document.getElementById("bookContainer");

    // Create book cards
    books.forEach(book => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("img");
      image.src = book.image;
      card.appendChild(image);

      const name = document.createElement("h3");
      name.textContent = book.name;
      card.appendChild(name);

      const price = document.createElement("p");
      price.textContent = `$${book.price.toFixed(2)}`;
      card.appendChild(price);

      const button = document.createElement("button");
      button.textContent = "View Details";
      button.addEventListener("click", () => showDetails(book.id));
      card.appendChild(button);

      container.appendChild(card);

      // Create details section for each book
      const details = document.createElement("div");
      details.classList.add("details");
      details.id = `details${book.id}`;
      details.innerHTML = `
        <p>ID: ${book.id}</p>
        <p>Description: ${book.description}</p>
        <p>Author: ${book.author}</p>
        <p>Genre: ${book.genre}</p>
      `;

      container.appendChild(details);
    });
  }

  function showDetails(bookId) {
    sessionStorage.setItem("selectedBookId", bookId);

    window.location.href = 'Details.html';
  }
});
