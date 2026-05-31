document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ADAPTIVE MOBILE HEADER MENU TOGGLE
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", () => {
            if(navLinks.style.display === "flex") {
                navLinks.style.display = "none";
            } else {
                navLinks.style.display = "flex";
                navLinks.style.flexDirection = "column";
                navLinks.style.position = "absolute";
                navLinks.style.top = "100%";
                navLinks.style.left = "0";
                navLinks.style.width = "100%";
                navLinks.style.background = "#ffffff";
                navLinks.style.padding = "1.5rem";
                navLinks.style.borderBottom = "1px solid #e2e8f0";
            }
        });
    }

    // 2. FORMSPREE TRANSMISSION HANDLER
    const formElement = document.querySelector(".contact-form-block");
    if (formElement) {
        formElement.addEventListener("submit", function() {
            const actionBtn = formElement.querySelector(".submit-action-btn");
            if (actionBtn) {
                actionBtn.innerText = "Transmitting Details...";
                actionBtn.style.background = "#059669"; // Dynamic success Emerald notification color
                actionBtn.disabled = true;
            }
        });
    }

    console.log("Pottolla Kanchana's Professional Production Architecture Loaded Cleanly.");
});