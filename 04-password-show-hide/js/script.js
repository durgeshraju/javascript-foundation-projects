// Get refrences

const getEl = (selector) => document.querySelector(selector);

// Event Listners + password value 'visibility | show & hide'

getEl(".password-field").addEventListener('click', (event) => {
    const eyeButton = event.target.closest('.eye-btn')
    if(!eyeButton) return;

    let isPasswordVisible = getEl('#passwordInput');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeButton.classList.add("visible");
        eyeButton.setAttribute("aria-label", "Hide password");
    } else {
        passwordInput.type = "password";
        eyeButton.classList.remove("visible");
        eyeButton.setAttribute("aria-label", "Show password");
    }
});