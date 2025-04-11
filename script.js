function calculate() {
    const username = document.getElementById("username").value.trim();
    const microSize = parseFloat(document.getElementById("microSize").value);
    const magnification = parseFloat(document.getElementById("magnification").value);
    const resultBox = document.getElementById("result");
  
    if (!username || isNaN(microSize) || isNaN(magnification) || magnification === 0) {
      resultBox.innerText = "⚠️ Please fill all fields correctly!";
      return;
    }
  
    const actualSize = (microSize / magnification).toFixed(2);
    resultBox.innerText = `🧪 Hello ${username}, the actual size is ${actualSize} mm.`;
  
    // Optional: store data in local storage
    localStorage.setItem("lastResult", JSON.stringify({ username, microSize, magnification, actualSize }));
  }