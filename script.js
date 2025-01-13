if (window.location.pathname.includes("reader.html")) {
  const queryParams = new URLSearchParams(window.location.search);
  const bookPath = queryParams.get("book");

  if (bookPath) {
    console.log("Loading book:", bookPath); // Debugging log

    try {
      const epub = ePub(bookPath); // Initialize ePub
      const rendition = epub.renderTo("reader", {
        width: "100%",
        height: "100%",
      });
      rendition.display();
      console.log("Book loaded successfully!"); // Debugging log
    } catch (error) {
      console.error("Error loading ePub:", error); // Debugging log
    }
  } else {
    console.error("No book path found!");
  }

  document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
