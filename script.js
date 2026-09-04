const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const texts = [
  "AI & Data Science Student",
  "Aspiring Developer",
  "Learning. Building. Growing."
];

let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeText() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 70);
  } else {
    setTimeout(deleteText, 1500);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 40);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    setTimeout(typeText, 300);
  }
}

typeText();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});