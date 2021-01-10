const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var engine, world, body;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var particle;
var turn = 0;
var score = 0;
var count = 0;
var gameState = "start";

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,800,480,20);
  lWall = new Ground(0,400,10,800)
  rWall = new Ground(480,400,15,800);
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight));
  for (var j = 0; j < 480; j=j+50) { 
    plinkos.push(new Plinko(j,100)); 
  }
  for (var j = 40; j < 470; j=j+50) { 
    plinkos.push(new Plinko(j,200)); 
  }
  for (var j = 0; j < 480; j=j+50) { 
    plinkos.push(new Plinko(j,300)); 
  }
  for (var j = 40; j < 470; j=j+50) { 
    plinkos.push(new Plinko(j,400)); 
  }

  }
  
  Engine.run(engine);
}

function draw() {
  background("lightGray");  
  Engine.update(engine);
  if(particle===null){
    particle.display();
     
     if (particle.body.position.y>395) {
        if (particle.body.position.x < 480) {
          score=score+50;      
          particle=null;
          if ( count>= 15) gameState ="end";                           
        }

        else if (particle.body.position.x < 340 && particle.body.position.x > 151) {
          score = score + 300;
          particle=null;
            if ( count>= 5) gameState ="end";
        }
      
        else if (particle.body.position.x < 500 && particle.body.position.x > 341) {
          score = score + 100;
          particle=null;
            if ( count>= 5)  gameState ="end";
        }     
        else if (particle.body.position.x < 580 && particle.body.position.x > 501) {
          score = score + 300;
          particle=null;
            if ( count>= 5) gameState ="end";
        } 
        else if (particle.body.position.x < 800 && particle.body.position.x > 581) {
          score = score + 500;
          particle=null;
            if ( count>= 5) gameState ="end";
        } 
     }
   }
  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var j = 0; j < plinkos.length; j++) { 
    plinkos[j].display(); 
  }
  

  /*if(frameCount%60===0) {
    particles.push(new Particle(random(20,460),10,10));
  }
  for(var j = 0; j < particles.length; j++) {
    particles[j].display();
  }*/

  push();
  textSize(20);
  fill("black");
  text("Score: "+score, 20,30);
  pop();

  push();
  textSize(15);
  fill("black");
  text("50",30,500);
  text("25",110,500);
  text("10",190,500);
  text("10",270,500);
  text("25",350,500);
  text("50",430,500);
  pop();
  

  ground.display();
  lWall.display();
  rWall.display();

  drawSprites();

}

function mousePressed() {
  if(gameState!== "end") {
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
    particles.push(particle);
    console.log("mouse is working");
  }
  return false;
}
