// ==============================
// Example of Scope, Parameters, Return Values
// ==============================

// Function with parameters and return value
function checkAge(name, age) {
  if (age >= 18) {
    return `Welcome ${name}, you are old enough! 🎉`;
  } else {
    return `Sorry ${name}, you must be at least 18. 🚫`;
  }
}

// ==============================
// Form Validation + Custom Logic
// ==============================
const signupForm = document.getElementById("signupForm");
const formMsg = document.getElementById("formMsg");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);

  if (!name || isNaN(age)) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
    return;
  }

  // Use our custom function with parameters + return value
  const message = checkAge(name, age);
  formMsg.textContent = message;
  formMsg.style.color = age >= 18 ? "green" : "red";
});

// ==============================
// Animation Trigger on Button
// ==============================
const box = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  // Toggle class to trigger CSS transition
  box.classList.toggle("active");

  // Also add pulse animation temporarily
  box.classList.add("pulse");
  setTimeout(() => {
    box.classList.remove("pulse");
  }, 2000); // removes after 2 seconds
});

// ==============================
// Greeting Section
// ==============================
const greetBtn = document.getElementById("greetBtn");
const greetInput = document.getElementById("greetInput");
const greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", () => {
  let name = greetInput.value.trim();

  // Example of local scope variable
  if (name) {
    greeting.textContent = `Hello, ${name}! 👋`;
  } else {
    greeting.textContent = "Please enter your name first.";
  }
});
