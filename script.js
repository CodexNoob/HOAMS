const items = document.querySelectorAll(".collapsible");
items.forEach(item => {
    item.addEventListener("click", function() {
        item.classList.toggle("collapsible__expanded");
    });
});