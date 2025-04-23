// Function to toggle visibility of code examples
function toggleExample(exampleId) {
  const example = document.getElementById(exampleId);
  if (example.style.display === "none" || example.style.display === "") {
    example.style.display = "block";
  } else {
    example.style.display = "none";
  }
}

// Function to handle "Mark as Complete" button
const completeButtons = document.querySelectorAll('.complete-btn');

completeButtons.forEach(button => {
  button.addEventListener('click', function () {
    const lessonCard = this.closest('.lesson-card');
    lessonCard.classList.add('completed'); // Add "completed" class to the lesson card
  });
});

// Scroll to top button visibility
const topBtn = document.getElementById("topBtn");

// Show the "scroll to top" button when the user scrolls down 20px
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Function to scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Function to make lesson cards visible on scroll (animation)
const lessonCards = document.querySelectorAll('.lesson-card');

function checkVisibility() {
  lessonCards.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    if (cardPosition <= window.innerHeight * 0.8) { // If the card is near the viewport
      card.classList.add('visible');
    }
  });
}

// Check visibility on scroll
window.addEventListener('scroll', checkVisibility);

// Run visibility check on page load
window.addEventListener('load', checkVisibility);

// Function to highlight active section link in the navbar
const navLinks = document.querySelectorAll('.top-nav a');

function updateActiveLink() {
  let currentSection = "";
  document.querySelectorAll("section").forEach(section => {
    if (window.scrollY >= section.offsetTop - 50) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Highlight active link during scroll
window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
