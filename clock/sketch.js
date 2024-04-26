var secLength = 160;
var secWidth= 1;
var minLength = 140;
var minWidth = 3;
var hourLength = 90;
var hourWidth = 5;
function setup() {
    createCanvas(900, 600);
    background(0);
}

function draw() {
    background(255);
    drawClock();
    
}

function drawClock()
{
    translate(width/2, height/2);
    ellipse(0,0.350,350);

    drawSecArrow();

    drawMinArrow();

    drawHourArrow();
}

function drawSecArrow()
{
    push();
    strokeWeight(secWidth);
    stroke(200,0,0);
    var secAngle = map(second(), 0, 60, 0, 360);
    rotate(radians(secAngle));
    line(0, 0, 0, -secLength)
    pop();

}

function drawMinArrow()
{
    push();
    strokeWeight(minWidth);
    stroke(0,0,0);
    var minAngle = map(minute(), 0, 60, 0, 360);
    rotate(radians(minAngle));
    line(0, 0, 0, -minLength);
    push();
      translate(0, -minLength);
      rotate(radians(-45));
      line(0, 0, 0, 10);
      pop();

      push();
      translate(0, -minLength);
      rotate(radians(45));
      line(0, 0, 0, 10);
      pop();
    pop();
    drawMins();
}

function drawMins()
{
    var mins = 60;
    var minStep = 360/mins;
    for (var i = 0; i < mins; i++)
    {
        push();
        rotate(radians(minStep * i));
        translate(0, -165);
        line(0 , 0, 0, -10);
        pop();
    }
}

function drawHourArrow()
{
    push();
    strokeWeight(hourWidth);
    stroke(0,0,0);
    var hourAngle = map(hour(), 0, 12, 0, 360);
    rotate(radians(hourAngle));
    line(0, 0, 0, -hourLength);
        push();
        translate(0, -hourLength);
        rotate(radians(-45));
        line(0, 0, 0, 10);
        pop();

        push();
        translate(0, -hourLength);
        rotate(radians(45));
        line(0, 0, 0, 10);
        pop();
    pop();
    drawHours();
}

function drawHours()
{
    var hours = 12;
    var hourStep = 360/hours;
    for (var i = 1; i < hours+1; i++)
    {
        push();
        rotate(radians(hourStep * i));
        translate(0, -155);
        line(0 , 0, 0, -20);
        text(i, 0 , -30);
        pop();
        

    }
}
