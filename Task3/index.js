
function escapeHTML(str) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return str.replace(/[&<>"']/g, function (m) {
    return map[m];
  });
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

  
    document
      .querySelectorAll(".error")
      .forEach((span) => (span.textContent = ""));


    const name = escapeHTML(document.getElementById("name").value.trim());
    const email = escapeHTML(document.getElementById("email").value.trim());
    const message = escapeHTML(document.getElementById("message").value.trim());

    let isValid = true;

    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Invalid email address";
      isValid = false;
    }

  
    if (message === "") {
      document.getElementById("messageError").textContent =
        "Message is required";
      isValid = false;
    }

    if (isValid) {
     
      console.log("Form submitted with data:", { name, email, message });
      alert("Form submitted successfully!");
    }
  });


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 
      navLinks.forEach((link) => link.classList.remove("active")); 
      this.classList.add("active"); 
    });
  });
});


document
  .getElementById("loadContentBtn")
  .addEventListener("click", function () {
    const contentArea = document.getElementById("contentArea");


    const newContent = document.createElement("p");
    newContent.textContent = "Here is some dynamically loaded content!";
    contentArea.appendChild(newContent);
  });
