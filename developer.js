// Get modal elements
const modal = document.getElementById("devModal");
const btn = document.getElementById("devInfoBtn");
const closeBtn = document.querySelector(".close");

// Show modal when button is clicked
btn.onclick = function () {
    modal.style.display = "block";
};

// Close modal when "X" is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Close modal when clicking outside of the modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};