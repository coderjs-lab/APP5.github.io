// 'Raksha'-Women Safety App
// Creating the canvas
var canvas;

// Creating variables for the two class or objects
var welcome;
var main;

// Background music
var bgmusic;

// Background images
var welcomebg;
var bgmain;

// Safety tips images
var tips1Img, tips2Img, tips3Img;

// Self defence images
var defence1Img, defence2Img, defence3Img, defence4Img;

// Escaping threat images
var escape1, escape2, escape3, escape4, escape5;

// SOS Alert images
var emergencybg;
var sosnoImg;

// Women laws image
var womenlaws;

// Information about me image
var infoImg;

// Preloading images and sounds
function preload(){
  welcomebg = loadImage("untitled-poster_45603426.png");
  bgmain = loadImage('raksha app bg.png');

  tips1Img = loadImage('tips1.png');
  tips2Img = loadImage('tips2.png');
  tips3Img = loadImage('tips3.png');

  defence1Img = loadImage('defence1.png');
  defence2Img = loadImage('defence2.png');
  defence3Img = loadImage('defence3.png');
  defence4Img = loadImage('videos2.png');

  escape1 = loadImage('escape1.png');
  escape2 = loadImage('escape2.png');
  escape3 = loadImage('escape3.png');
  escape4 = loadImage('escape4.png');
  escape5 = loadImage('escape5.png');

  emergencybg = loadImage('sosbg.png');
  sosnoImg = loadImage('otherno.png');

  womenlaws = loadImage('laws.png');

  infoImg = loadImage('infoImg.png');
}

// Setting up the app initially
function setup() {
  canvas = createCanvas(350,700);
  welcome = new Welcome();
  
  bgmusic = createAudio('bensound-inspire.mp3');
  bgmusic.autoplay(true);
  bgmusic.volume(0.35);
}

// Drawing or displaying our app on the screen
function draw() {

  welcome.display();

  // Initiating app states
  if(Welcome.appState === 1){
    Welcome.appState = 2;
  }
  if(Welcome.appState === 2){
    welcome = null;

    main = new Main();
    main.display();
  }

  drawSprites();
 
}