const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var divisions = [];
var particle = [];
var plinko = [];

var divisionHeight = 300;

function setup() {
  
  createCanvas(500,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,560,10);
  /*div1 = new Division(10,660,10,250);
  div2 = new Division(90,660,10,250);
  div3 = new Division(170,660,10,250);
  div4 = new Division(250,660,10,250);
  div5 = new Division(330,660,10,250);
  div6 = new Division(410,660,10,250);
  div7 = new Division(475,660,10,250);*/

  for (var k = 10; k <= width; k = k+80){
    divisions.push(new Division(k,height - divisionHeight/2,10,divisionHeight));
  }
 
  for (var o = 40;o < width; o = o +50){
    plinko.push( new Plinko (o,75,10));
  }

  for (var o = 15;o < width-10; o = o +50){
    plinko.push( new Plinko (o,175,10));
  }
  for (var o = 40;o < width; o = o +50){
    plinko.push( new Plinko (o,275,10));

  }for (var o = 15;o < width-10; o = o +50){
    plinko.push( new Plinko (o,375,10));
  }
  if(frameCount%60===0){
    particle.push(new particle(random(width/2-10,width/2+10),10,10))
  }
  
}
  

function draw() {
  background("black");  
  drawSprites();

  
  
  ground.display();
  /*div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();*/

  for(var k = 0; k< divisions.length; k = k+1){
    divisions[k].display();
  }
  for( var o = 0; o < plinko.length;o++){
    plinko[o].display();
  }
  for( var j = 0; j < particle.length;j++){
    particle[j].display();
  }

}