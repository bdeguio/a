document.getElementById("loadEpub").addEventListener("click", () => {
  const fileInput = document.getElementById("fileInput").files[0];
  if (fileInput) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const epub = ePub(event.target.result);
      const rendition = epub.renderTo("reader", {
        width: "100%",
        height: "600px",
      });
      rendition.display();
    };
    reader.readAsArrayBuffer(fileInput);
  } else {
    alert("Please upload an ePub file!");
  }
});
