// Small JS effect: Greeting based on time
const header = document.querySelector('header h1');
const hours = new Date().getHours();
let greeting;
if (hours < 12) {
  greeting = "Good Morning";
} else if (hours < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
header.textContent = `${greeting}, I'm Muhammed Shadi 👋`;
