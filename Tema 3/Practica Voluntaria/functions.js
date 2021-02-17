let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  let grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  let ang;
  let num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

const hour_hand_length = 0.45;
const minute_hand_length = 0.7;
const sec_hand_length = 0.9;

// create a svg tag
const svg_container = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_container.setAttribute("viewBox", "-1 -1 2 2");

const clock_frame = document.createElementNS("http://www.w3.org/2000/svg", "circle");
clock_frame.setAttribute("cx", "0");
clock_frame.setAttribute("cy", "0");
clock_frame.setAttribute("r", ".97");
clock_frame.setAttribute("style", "fill:none;stroke:black; stroke-width:2%");
svg_container.appendChild(clock_frame);

// draw second marks
for (let ii = 0;ii < 60; ii++) {
    const jj = 2 * Math.PI / 60 *ii;
    const sec_pos = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    sec_pos.setAttribute("cx", (Math.cos(jj)*.9) .toString ());
    sec_pos.setAttribute("cy", (Math.sin(jj)*.9) .toString ());
    sec_pos.setAttribute("r", "0.8%");
    sec_pos.setAttribute("style", "fill:grey;stroke:none;");
    svg_container.appendChild(sec_pos);
};

// draw hour marks
for (let ii = 0;ii < 12; ii++) {
    const jj = 2 * Math.PI / 12 *ii;
    const hour_pos = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    hour_pos.setAttribute("cx", (Math.cos(jj)*.9) .toString ());
    hour_pos.setAttribute("cy", (Math.sin(jj)*.9) .toString ());
    hour_pos.setAttribute("r", "3%");
    hour_pos.setAttribute("style", "fill:black;stroke:none;");
    svg_container.appendChild(hour_pos);
};

// hour hand
const hour_hand = document.createElementNS("http://www.w3.org/2000/svg", "line");
hour_hand.setAttribute("x1", "0");
hour_hand.setAttribute("y1", "0");
hour_hand.setAttribute("x2", "0");
hour_hand.setAttribute("y2", (-1 * hour_hand_length) .toString ());
hour_hand.setAttribute("style", "stroke:blue; stroke-width:5%;stroke-linecap:round");
hour_hand.setAttribute("transform", "rotate(" + (((new Date()).getHours() % 12) * 30 + (new Date()).getMinutes() /2) +  ")");
svg_container.appendChild(hour_hand);

// minute hand
const minute_hand = document.createElementNS("http://www.w3.org/2000/svg", "line");
minute_hand.setAttribute("x1", "0");
minute_hand.setAttribute("y1", "0");
minute_hand.setAttribute("x2", "0");
minute_hand.setAttribute("y2", (-1 * minute_hand_length) .toString ());
minute_hand.setAttribute("style", "stroke:red; stroke-width:3%;stroke-linecap:round");
minute_hand.setAttribute("transform", "rotate(" + ((new Date()).getMinutes()*6) +  ")");
svg_container.appendChild(minute_hand);

const sec_hand = document.createElementNS("http://www.w3.org/2000/svg", "line");
sec_hand.setAttribute("x1", "0");
sec_hand.setAttribute("y1", "0");
sec_hand.setAttribute("x2", "0");
sec_hand.setAttribute("y2", (-1 * sec_hand_length) .toString ());
sec_hand.setAttribute("style", "stroke:black; stroke-width:1%;stroke-linecap:round");
sec_hand.setAttribute("transform", "rotate(" + ((new Date()).getSeconds()*6) +  ")");
svg_container.appendChild(sec_hand);

const f_update_clock = (() => {
    const dd = new Date();
    sec_hand.setAttribute("transform", "rotate(" + (dd.getSeconds()*6) +  ")");
    minute_hand.setAttribute("transform", "rotate(" + (dd.getMinutes()*6) +  ")");
    hour_hand.setAttribute("transform", "rotate(" + ((dd.getHours() % 12) * 30 + dd.getMinutes() /2) +  ")");
});

const newNode = document.createElement("div");
newNode.style.maxWidth= "300px";
newNode. appendChild(svg_container);
document.currentScript. insertAdjacentElement("afterend", newNode);

setInterval( f_update_clock , 1000);