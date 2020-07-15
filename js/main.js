(() => {
    // set up the puzzle pieces and boards
    const animals = document.querySelectorAll('.animal'),
        dropZones = document.querySelectorAll('.drop-zone');


    function allowDrag(event) {
        console.log('started dragging an animal: this one - ', event.target.id);

        event.dataTransfer.setData('draggedImg', this.id);
    }

    function allowDragOver(event) {
        event.preventDefault();
        console.log('dragged something over me');

    }

    function allowDrop(event) {
        console.log('dropped something on me');
        let droppedImage = event.dataTransfer.getData('draggedImg');
        console.log(event.dataTransfer)
            //if the length of the number of children is 0 append child 
        if (event.currentTarget.children.length === 0) {
            event.target.appendChild(document.querySelector(`#${droppedImage}`));
        }
    }

    for (let zone of dropZones) {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
    }


    animals.forEach(animal => animal.addEventListener('dragstart', allowDrag));





    // console.log('click on icons to log id to console');

    // let theWilds = document.querySelectorAll('.wild');

    // function logID() {
    //     console.log("clicked on a graphic - this one: ", this.id);
    //     this.classList.add("selected");
    // }

    // theWilds.forEach(wild => { wild.addEventListener("click", logID); });



})();