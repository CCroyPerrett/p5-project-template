bcolor = {r: 255, g:0, b:100};
window;

function setup() {
 // put setup code here
  textOutput();

  createCanvas(400, 500, WEBGL);

  angleMode(DEGREES);

}

function draw() {
  // put drawing code here
    background(220);
    orbitControl();
    fill(bcolor.r, bcolor.g, bcolor.b);
    box(100,300,5);

    fill(100, 100, 100);
    circle(100,100,50);

    /*window = new p5.Geometry();
    let v0 = createVector(-40, 0, 0);
    let v1 = createVector(0, -40, 0);
    let v2 = createVector(40, 0, 0);
    window.vertices.push(v0, v1, v2);
    model(window);*/
}

function generateDoor(){

  bcolor.r = random(0,255); bcolor.g = random(0,255); bcolor.b = random(0,255);
  /*quad(doorx, doory, doorx + 80, doory + 20, doorx+80, doory +170, doorx, doory + 150); //frame
  quad(doorx, doory, doorx + 80, doory + 20, doorx + 100, doory+10, doorx+20, doory-10);
  quad(doorx + 80, doory + 20, doorx + 100, doory+10, doorx + 100, doory+160, doorx + 80, doory + 170);*/
}
