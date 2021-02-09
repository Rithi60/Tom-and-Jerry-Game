var cat, catImage, catRunningImage;
var mouse, mouseImage, mouseTeasingImage1, mouseTeasingImage2;
var background, backgroundImage; 
function preload() {

    console.log("called");
    //load the images here
    backgroundImage = loadImage("Images/garden.png");
    catImage = loadImage("Images/cat1.png");
    catRunningImage = loadAnimation("Images/cat2.png");
    mouseImage = loadImage("Images/mouse1.png");
    mouseTeasingImage1 = loadAnimation("Images/mouse2.png");
    mouseTeasingImage2 = loadAnimation("Images/mouse3.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    background = createSprite(500, 400, 1000, 800);
    background.addImage(backgroundImage);

    cat = createSprite(700, 600, 30, 30);
    cat.scale = 0.15;
    
    cat.addImage(catImage);

    mouse = createSprite(200, 600, 30, 30);
    mouse.addImage(mouseImage);
    mouse.scale = 0.1;

}



function draw() {

    //background(255);
    //Write condition here to evalute if tom and jerry collide

    


    drawSprites();
}


function keyPressed(){
if(keyDown("left")){
    cat.addAnimation("running",catRunningImage);
    cat.changeAnimation("running",catRunningImage);
    cat.velocityX = -3;
    mouse.addAnimation("mouse1", mouseTeasingImage1, "mouse2", mouseTeasingImage2);
    mouse.changeAnimation("mouse1", mouseTeasingImage1, "mouse2", mouseTeasingImage2);


}


}