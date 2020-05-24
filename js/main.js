(() => { 
  console.log('click on icons to log id to console');

 let theWilds = document.querySelectorAll('.wild');

  function logID() {
    console.log("clicked on a graphic - this one: ", this.id);
    this.classList.add("selected");
  }
  
  theWilds.forEach(wild => { wild.addEventListener("click", logID);});
})();
