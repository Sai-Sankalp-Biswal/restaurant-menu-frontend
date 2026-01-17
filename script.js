const homeSection = document.getElementById("home");
const menuSection = document.getElementById("menu");
const dropdown = document.getElementById("categoryDropdown");

function showMenu() {
    homeSection.classList.add("hidden");
    menuSection.classList.remove("hidden");
}

function showHome() {
    menuSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
}

dropdown.addEventListener("change", () => {
    filterMenu(dropdown.value);
});

function filterMenu(category) {
    const items = document.querySelectorAll(".menu-item");

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
function setActive(link) {
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");
}
