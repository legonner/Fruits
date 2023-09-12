"use strict";

const fruitListItems = document.querySelectorAll(".fruit-list__item");

fruitListItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
        this.classList.add("hovered");
        setTimeout(() => {
            this.classList.remove("hovered");
        }, 300);
    });

    item.addEventListener("click", function () {
        this.classList.add("shake");
        setTimeout(() => {
            this.classList.remove("shake");
        }, 400);
    });
});