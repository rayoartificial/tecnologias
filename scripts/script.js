
document.querySelectorAll(".collapse-button").forEach(el => {
    el.onclick = function() {
        var content = document.querySelector(`#${this.dataset.target}`);
        content.classList.toggle("section-collapse");
    }
})

const navbar = document.getElementById("navbar");

function collapse() {
    navbar.classList.toggle("navbar-collapse");
}
