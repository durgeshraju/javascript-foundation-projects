// Like Counter — your JavaScript goes here.
//
// Available elements:
//   #likeCount  — the count display
//   #likeBtn    — 👍 Like
//   #unlikeBtn  — 👎 Unlike
//   #resetBtn   — 🔄 Reset

// Grab the elements using any selector: #id, .class, button, etc.

const getEl = (selector) => document.querySelector(selector);

const counterControls = getEl("#counterControls");
const likeCount = getEl("#likeCount");
const resetBtn = getEl("#resetBtn");
const unlikeBtn = getEl("#unlikeBtn");

// Event listeners to attach and perform actions

counterControls.addEventListener('click', function(event) {
    const btn = event.target.closest('button');
    if(!btn) return;    

    // Like Count

    if(btn.id === "likeBtn"){
        const currentCount = Number(likeCount.textContent);
        likeCount.textContent = currentCount + 1;
        resetBtn.disabled = false;
        unlikeBtn.disabled = false;
    }

    // Unlike Count

    if(btn.id === "unlikeBtn"){
        const currentCount = Number(likeCount.textContent);

        if(currentCount === 0){
            return;
        }

        const newCount = currentCount - 1;
        likeCount.textContent = newCount;

        if(newCount === 0){
            resetBtn.disabled = true;
            unlikeBtn.disabled = true;
        }        
    }

    // Reset Count

    if(btn.id === "resetBtn"){
        likeCount.textContent = 0;
        resetBtn.disabled = true;
        unlikeBtn.disabled = true;
    }
});