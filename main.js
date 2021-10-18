const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => { 
    navMenu.classList.toggle("nav-menu");
});

/* addEventListener("DOMContentLoaded", () => {
    
    const navToggle = document.querySelector(".nav-toggle")
    if (nav-toggle) {
        navToggle.addEventListener("click", () => { 
            const navMenu = document.querySelector(".nav-menu");
            navMenu.classList.toggle("show"); 
        })
        
    }
}); */