// this is an IIFE (Immediately Invoked Function Expression)
// also called the Module pattern
//
(() => { // shorthand function declaration (also called a fat arrow function)
  console.log('fired!');

  // select elements here
  // querySelectorAll is a one-to-many selection -> find EVERY element that matches the selector
  let wilds = document.querySelectorAll(".wild"),
      // one to one connection -> one variable name means one element
      svgWild = document.querySelector("svg");

        function logID() 
        { console.log("clicked on a graphic - this one: ", this.id);
    this.classList.add("selected"); }

  theWilds.forEach(wild => wild.addEventListener("click", logID));

  svgWild.addEventListener("click", logID);
})();
