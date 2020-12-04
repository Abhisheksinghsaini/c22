//1= include matter.js (physics engine) in index .html
//2= name spacing (giving shortname to long form)

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
    var canvas = createCanvas(400, 400);
    //3=create phy engine and world
    engine = Engine.create();
    world = engine.world;
    //make the object static(should not move)
    var ground_options = {
            isStatic: true
        }
        //4= creat object and add it to the world with special option
    ground = Bodies.rectangle(200, 390, 200, 20, ground_options);

    World.add(world, ground)
        //make the ball bounce 
    var ball_option = {
        restitution: 1.0
    }
    ball = Bodies.circle(200, 100, 20, ball_option)
    World.add(world, ball);
    console.log(ground);
}

function draw() {
    background(0);
    Engine.update(engine);
    // 5= display the object
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 20, 20)

}