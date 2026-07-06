// Like Counter — your JavaScript goes here.
//
// Available elements:
//   #likeCount  — the count display
//   #likeBtn    — 👍 Like
//   #unlikeBtn  — 👎 Unlike
//   #resetBtn   — 🔄 Reset

// Grab the elements using any selector: #id, .class, button, etc.

const getEl = (selector) => document.querySelector(selector);

// Display Count Number

const countDisplay = () => {
    return getEl("#likeCount");
}

// Eventlistners to attached and perform actions

const counterControls = getEl("#counterControls");

counterControls.addEventListener('click', function(event) {
    const btn = event.target.closest('button');
    console.log('btn is:', btn);
})

// Like Count

// Unlike Count

// Reset Count