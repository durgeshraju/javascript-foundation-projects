// Referencing the DOM elements
const textContent = document.querySelector("#textContent");
const toggleBtn = document.querySelector("#toggleBtn");

// Event Listeners
toggleBtn.addEventListener('click', () => {
      const isHidden = textContent.classList.toggle('hidden');
      toggleBtn.textContent = isHidden ? 'Show Text' : 'Hide Text';
      toggleBtn.setAttribute("aria-expanded", String(!isHidden));
});