// Check if we are on the reader page
if (window.location.pathname.includes("reader.html")) {
  const queryParams = new URLSearchParams(window.location.search);
  const bookPath = queryParams.get("book");

  if (bookPath) {
    const epub = ePub(bookPath);
    const rendition = epub.renderTo("reader", {
      width: "100%",
      height: "100%",
    });
    rendition.display();
  }

  document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
