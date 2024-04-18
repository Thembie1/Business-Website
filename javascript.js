document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Process form submission here (e.g., send data to server)
  // You can use AJAX or other techniques to handle the form submission
  // For this example, we'll just log the form data to the console
  var formData = new FormData(event.target);
  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  // Optionally, you can display a success message or redirect the user
  alert("Form submitted successfully!");
});