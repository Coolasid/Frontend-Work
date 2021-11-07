const accordionItemHeader = document.querySelectorAll(".accordion-item-header");

accordionItemHeader.forEach((el) => {
    el.addEventListener("click", event =>{
        el.classList.toggle("active")
    })
})