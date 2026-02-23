const canvas = document.getElementById("globe");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];
let mouse = {x:innerWidth/2,y:innerHeight/2};

window.addEventListener("resize",()=>{
canvas.width = innerWidth;
canvas.height = innerHeight;
});

window.addEventListener("mousemove",e=>{
mouse.x = e.clientX;
mouse.y = e.clientY;
});

window.addEventListener("click",()=>{
for(let i=0;i<20;i++){
particles.push(createParticle(mouse.x,mouse.y));
}
});

function createParticle(x,y){
return{
x,
y,
vx:(Math.random()-0.5)*2,
vy:(Math.random()-0.5)*2,
size:Math.random()*3+1,
life:200+Math.random()*100
};
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x += p.vx;
p.y += p.vy;
p.life--;

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,0.8)";
ctx.fill();
});

particles = particles.filter(p=>p.life>0);

requestAnimationFrame(draw);
}

draw();
