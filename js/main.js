(() => {
    // set up the puzzle pieces and boards
    const animals = document.querySelectorAll('.animal'),
        dropZones = document.querySelectorAll('.drop-zone'),
        animalsWrap = document.querySelector('.animalsWrap');


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
        //if the length of the number of children is 0 append child 
        if (event.currentTarget.children.length !== 0) {
            //setup
            let currentAnimal = event.currentTarget.children[0];
            let currentZone = event.currentTarget;

            //reset current animals audio
            let audio = document.querySelector(`audio[data-sound="${currentAnimal.id}"]`)

            audio.pause();
            audio.currentTime = 0;

            //remove current animal
            currentAnimal = currentZone.removeChild(currentAnimal);

            //add current animal to original home
            animalsWrap.appendChild(currentAnimal);
            //continue


        }


        event.currentTarget.appendChild(document.querySelector(`#${droppedImage}`));

        let audio = document.querySelector(`audio[data-sound="${droppedImage}"]`)

        if (!audio) { return; }

        audio.currentTime = 0;
        audio.loop = true;
        audio.play();

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