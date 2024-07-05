function loadSection(section) {
    document.querySelectorAll("section").forEach(el => {
        el.style.display = "none";
    });

    document.querySelector(`#${section}`).style.display = "block";
}

function removeActive() {
    document.querySelectorAll(".nav-link").forEach(el => {
        if (el.classList.contains("active")) {
            el.classList.remove("active");
        } 
    })
}

document.querySelectorAll(".nav-link").forEach(link => {
    link.onclick = function() {
        loadSection(this.dataset.section);
        removeActive();
        link.classList.add("active");
        return false
    }
})

const themeButton = document.getElementById("theme-button");

function darkTheme() {
    if (themeButton.matches(".active")) {
        document.querySelectorAll("body").forEach(el => {
            el.classList.remove("dark-theme-container");
        })
    
        document.querySelectorAll("h1, h2, p, li").forEach(el => {
            el.classList.remove("dark-theme-text");
        })

        themeButton.classList.remove("active");
    } else {
        document.querySelectorAll("body").forEach(el => {
            el.classList.add("dark-theme-container");
        })
    
        document.querySelectorAll("h1, h2, p, li").forEach(el => {
            el.classList.add("dark-theme-text");
        })

        themeButton.classList.add("active");
    }
}
