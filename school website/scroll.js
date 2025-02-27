
window.addEventListener("scroll", function() {
        let navbar = document.getElementById("container");

        if (window.scrollY > 50) { // When scrolled down 50px
            navbar.style.background = "rgb(255, 0, 0)"; // Gray background
            navbar.style.transition = "background 0.3s ease-in-out"; // Smooth transition
        } else {
            navbar.style.background = "transparent"; // Back to transparent
        }
    }
);


