"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const likeButton = document.getElementById("likeButton");
  const likeCount = document.getElementById("likeCount");
  let count = 0;

  likeButton.addEventListener("click", function () {
    count++;
    likeCount.textContent = count;
  });

  const dislikeButton = document.getElementById("dislikeButton");

  dislikeButton.addEventListener("mouseenter", function () {
    const direction = dislikeButton.getAttribute("data-direction");

    const randomX = Math.random() * 300 - 100;
    const randomY = Math.random() * 300 - 100;

    dislikeButton.style.transition = "transform 0.5s ease-in-out";
    dislikeButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });

  dislikeButton.addEventListener("mouseleave", function () {
    dislikeButton.style.transition = "transform 0.5s ease-in-out";
    dislikeButton.style.transform = "translate(0, 0)";
  });

  dislikeButton.addEventListener("transitionend", function () {
    dislikeButton.style.transition = "none";
  });
});
