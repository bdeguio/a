if (window.location.pathname.includes("reader.html")) {
  const queryParams = new URLSearchParams(window.location.search);
  const bookPath = queryParams.get("book");

  console.log("Book path from URL:", bookPath); // Log the book path

  if (bookPath) {
    try {
      const epub = ePub(bookPath);
      console.log("ePub initialized:", epub); // Confirm ePub.js initialization

      const rendition = epub.renderTo("reader", {
        width: "100%",
        height: "100%",
      });
      console.log("Rendering ePub...");

      rendition.display()
        .then(() => console.log("ePub displayed successfully!"))
        .catch((error) => console.error("Error displaying ePub:", error));
    } catch (error) {
      console.error("Error initializing or rendering ePub:", error);
    }
  } else {
    console.error("No book path found in the URL!");
  }

  // Back button functionality
  document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
