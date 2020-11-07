let canvas;
let logo;
let logos = [];


function preload () {
  logo = loadImage('baliomaker.png')
}

function setup () {
  canvas = createCanvas(0,0);
  canvas.position(0,0);
  canvas.style('z-index:-1;');
  for(let i = 0; i < (window.innerHeight/50); i++) {
    logos[i] = {
      x: random(window.innerWidth),
      y: random(-1000 + (window.innerHeight/1.5),-10)
    }
  }
}

function draw () {
  background('#2d2c3e');
    push();
    for(let i = 0; i < logos.length; i++) {
      if(logos[i].y < window.innerHeight) {
        image(logo,logos[i].x,logos[i].y,50,50);
        logos[i].y++;
    } else {
    logos.splice(i,1);
    logos.push({
      x: random(window.innerWidth),
      y: random(-1000 + (window.innerHeight/1.5),-10)
    });
  }
   }
   pop();
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};
