class Welcome {
    constructor(){
        // Creating the name input, the greeting and the proceed button
        this.input = createInput("Name");
        this.button = createButton('PROCEED');
        this.greeting = createElement('h2');
        this.buttonSound = loadSound('Button-click-sound.mp3');
    }

    // Initiating appState
    appState = 0;

    // Hiding the element
    hide(){
        this.greeting.hide();
    }

    // Displaying evrything on the screen
    display(){
        background(welcomebg);
       

        this.input.position(350/2 - 85, 400);
        this.button.position(350/2 - 35, 430);

        // Function to click on the proceed button
        this.button.mousePressed(()=>{
            this.buttonSound.play();
            this.input.hide();
            this.button.hide();
            var username = this.input.value();
            this.greeting.html("Hello <br>" + username);
            this.greeting.style("color", "white");
            this.greeting.style("font-size", "15px");
            this.greeting.position(350/2 + 120, 627);
            Welcome.appState = 1;
        });
        
    }
}