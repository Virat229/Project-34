const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var boxes = [];
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  for(var i = 70;i < 420;i = i+ 70){
  boxes.push(new Box(600,i,70,70));
  }
  for(var i = 70;i < 350; i = i + 70){
    boxes.push(new Box(800,i,70,70));
  }
  for(var i = 70;i < 490; i = i + 70){
    boxes.push(new Box(700,i,70,70));
  }
  for(var i = 70;i < 420; i = i + 70){
    boxes.push(new Box(900,i,70,70));
  }
  

}

function draw() {
  background(bg);
  Engine.update(engine);

  
  for(var i = 0;i < 20;i ++){
    boxes[i].display();
  }
  
  ground.display();
  
  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x : mouseX,y : mouseY})
}
