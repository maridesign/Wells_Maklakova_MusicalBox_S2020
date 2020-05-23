// this is an IIFE (Immediately Invoked Function Expression)
// also called the Module pattern
//
(() => { // shorthand function declaration (also called a fat arrow function)
  console.log('fired!');

  // select elements here
  // querySelectorAll is a one-to-many selection -> find EVERY element that matches the selector
  let theBadges = document.querySelectorAll(".badge"),
      // one to one connection -> one variable name means one element
      svgBadge = document.querySelector("svg"),
      mainHeading = document.querySelector("#mainHeading");

    setTimeout(function() {
      mainHeading.textContent = "JavaScript really isn't that hard when you understand a few things";
      mainHeading.classList.add("selected");
    }, 3000);
   //debugger; // pause your code execution here

  // functions go in the middle
  function logID() {
    console.log("clicked on a graphic - this one: ", this.id);
    this.classList.add("selected");
  }

  // event handling
  // theBadge.addEventListener("click", logID);
  theBadges.forEach(badge => badge.addEventListener("click", logID));

  svgBadge.addEventListener("click", logID);
})();
// this is an IIFE (Immediately Invoked Function Expression)
// also called the Module pattern
//
(() => { // shorthand function declaration (also called a fat arrow function)
  console.log('fired!');

  // select elements here
  // querySelectorAll is a one-to-many selection -> find EVERY element that matches the selector
  let characterButtons = document.querySelectorAll("button"),
      mainHeading = document.querySelector("#mainHeading"),
      mainImage = document.querySelector(".hero");


   //debugger; // pause your code execution here

  // functions go in the middle
  function switchImage() {
    console.log("clicked on a button");

    let currentImage = this.dataset.character + ".jpg";

    mainImage.src = "images/" + currentImage;
  }

  // event handling
  characterButtons.forEach(button => button.addEventListener("click", switchImage));

})();
