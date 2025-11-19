/* ==============================
   Part 2: JavaScript Functions - Scope, Parameters & Return Values
   ============================== */

/* Function to move a box dynamically */
function moveBox(boxElement, distance) {
    // Local variable (function scope)
    let currentTransform = boxElement.style.transform || "translateX(0px)";
    let match = currentTransform.match(/translateX\(([-\d]+)px\)/);
    let currentX = match ? parseInt(match[1]) : 0;

    // Calculate new position
    let newX = currentX + distance;
    boxElement.style.transform = `translateX(${newX}px)`;

    return newX; // return value
}

/* Function to toggle a class */
function toggleClass(element, className) {
    element.classList.toggle(className);
    return element.classList.contains(className);
}

/* ==============================
   Part 3: Combining CSS Animations with JS
   ============================== */

// Move Box on Button Click
const box = document.getElementById("box");
const moveBtn = document.getElementById("moveBtn");
moveBtn.addEventListener("click", function() {
    moveBox(box, 50); // Move box 50px each click
});

// Card Flip Animation
const card = document.getElementById("card");
const flipBtn = document.getElementById("flipBtn");
flipBtn.addEventListener("click", function() {
    toggleClass(card, "flipped");
});

// You can reuse toggleClass function for other dynamic animations
