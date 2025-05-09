// We use const here because these elements do not change.
const form = document.getElementById("form");
const result = document.getElementById("result");

// Add an event listener for the form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the page from reloading

  // Get the values from the input fields
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adjective = document.getElementById("adjective").value;

  // Create the sentence using template literals for easier formatting
  var sentence = `${verb}ing ${adjective} ${noun} is the real test of character. #LifeRules`;

  // Capitalize the first letter of the sentence
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  // Display the sentence in the result paragraph
  result.textContent = sentence;

  // Clear the input fields after submission
  document.getElementById("noun").value = "";
  document.getElementById("verb").value = "";
  document.getElementById("adjective").value = "";
});
