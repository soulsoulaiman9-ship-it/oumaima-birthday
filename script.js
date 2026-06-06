
const reasons=[
"Your honey-olive eyes",
"Your dimply smile",
"Your warm presence",
"8 years of friendship",
"How easy it is to talk to you",
"The way you remember things that matter",
"How you make difficult days lighter",
"Your kindness",
"Your laugh",
"Your support",
"Our high school memories",
"Our prepa memories",
"Staying close despite different schools",
"Your reliability",
"How deeply you care",
"Your sense of humor",
"How you've grown",
"Your patience",
"The trust we've built",
"Knowing you're always there",
"The love in small actions",
"The person you're becoming",
"Simply being you"
];
document.getElementById("teddy").onclick = () => {
const speech = document.getElementById("teddySpeech");

speech.style.display =
speech.style.display === "block"
? "none"
: "block";
};
document.getElementById("balloon").onclick = () => {

document.getElementById("balloon").style.display="none";

document.getElementById("birthdayPopup").style.display="block";

createConfetti();
};
function createConfetti(){

for(let i=0;i<100;i++){

const confetti=document.createElement("div");

confetti.innerHTML=["💙","🎀","✨","🎉","💖"][Math.floor(Math.random()*5)];

confetti.style.position="fixed";
confetti.style.left=Math.random()*100+"vw";
confetti.style.top="-20px";
confetti.style.fontSize="30px";
confetti.style.zIndex="9999";

document.body.appendChild(confetti);

confetti.animate([
{transform:"translateY(0px)"},
{transform:"translateY(120vh)"}
],{
duration:3000+Math.random()*3000
});

setTimeout(()=>confetti.remove(),6000);
}
}
document.getElementById("secretHeart").onclick = () => {
alert("You found the hidden memory! 💙");
};
const notes = [
"You're my favorite person.",
"8 years later and you're still stuck with me and you will always be .",
"You make ordinary days better.",
"Your smile should alwasy be as bright as the sun.",
"Thank you for existing."
];

document.getElementById("fortuneCookie").onclick=()=>{
alert(notes[Math.floor(Math.random()*notes.length)]);
};

function startMuseum(){

document.querySelector(".hero").style.display="none";

document.getElementById("museum")
.classList.remove("hidden");

document.getElementById("mainMusic")
.play()
.catch(()=>{});

}

const stars=document.getElementById("stars");
const box=document.getElementById("reasonBox");

reasons.forEach((r,i)=>{
 let s=document.createElement("div");
 s.className="star";
 s.innerHTML="⭐";
 s.onclick=()=>box.innerHTML=`#${i+1}<br>${r}`;
 stars.appendChild(s);
});

setInterval(()=>{
    const heart=document.createElement("div");

    heart.className="heart";

    const hearts=["💙","🤍","🎀","✨"];

    heart.innerHTML=
    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=
    (20+Math.random()*20)+"px";

    document
    .querySelector(".floating-hearts")
    .appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

},1000);
/* GALLERY LIGHTBOX */

document.addEventListener("DOMContentLoaded",()=>{

document
.querySelectorAll(".gallery img")
.forEach(img=>{

img.addEventListener("click",()=>{

document.getElementById(
"lightbox"
).style.display="flex";

document.getElementById(
"lightboxImg"
).src=img.src;

});

});

document.getElementById(
"lightbox"
).onclick=()=>{

document.getElementById(
"lightbox"
).style.display="none";

};

});

/* FINAL SURPRISE */

function revealSurprise(){

document.getElementById("surprise")
.style.display="block";

createConfetti();

/* stop Oghniya */
document.getElementById("mainMusic").pause();

/* start Mariage d'Amour */
const finalSong =
document.getElementById("bgMusic");

finalSong.currentTime = 0;

finalSong.play().catch(()=>{});

}
document.addEventListener("mousemove",(e)=>{

const sparkle=document.createElement("div");

sparkle.className="sparkle";

const icons=["✨","💙","🎀","🤍"];

sparkle.innerHTML=
icons[Math.floor(Math.random()*icons.length)];

sparkle.style.left=e.clientX+"px";
sparkle.style.top=e.clientY+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},1000);

});
document.addEventListener("DOMContentLoaded",()=>{

const giftBox =
document.getElementById("giftBox");

if(giftBox){

giftBox.onclick = ()=>{

giftBox.style.display="none";

document.getElementById("finalLetter")
.style.display="block";

createConfetti();

};

}
document.addEventListener("DOMContentLoaded", () => {
  const door = document.getElementById("finalDoor");

  if (door) {
    door.style.opacity = "0";
    door.style.transform = "translateY(20px)";

    setTimeout(() => {
      door.style.transition = "1.5s ease";
      door.style.opacity = "1";
      door.style.transform = "translateY(0px)";
    }, 1000);
  }
});
function startFinalCeremony(){

  const door = document.getElementById("finalDoor");

  door.innerHTML = "🚪<p>The door is opening...</p>";

  setTimeout(() => {
    door.style.opacity = "0";
    door.style.transform = "scale(1.2)";
  }, 800);

  setTimeout(() => {
    document.getElementById("museum").style.display="none";
    document.getElementById("finalTransition").classList.remove("hidden");

    createStars();

    typeWriter(text, 30);
  }, 1500);
}

  const text = `
🏛️ Final Museum Closing Ceremony

You have reached the last room.

...

Or at least that's what museums usually say.

...

The problem is that our story isn't finished yet.

Museum Closing Report

Artifacts Collected: Memories

Treasures Preserved: Moments

Most Valuable Exhibit: Oumaima

━━━━━━━━━━━━━━

After reviewing every room,

every photo,

every letter,

every laugh,

every conversation,

and every memory...

the museum has reached one conclusion.

...

The best thing that happened in these eight years

wasn't any particular memory.

It wasn't any single photo in this gallery.

It wasn't any specific day.

The best thing that happened in these eight years

was having you there for all of them.

💙

you're still one of my favorite chapters.

Thank you for visiting

The Museum of 8 Years of Us.

This exhibit will remain open indefinitely.

💙
`;

  typeWriter(text, 30);
)
function startLoadingGlitch(){
  let percent = 99;
  const loadingText = document.getElementById("loadingText");

  setInterval(()=>{
    loadingText.innerText = percent + "%";
  }, 800);
}
function createStars(){
  const canvas = document.getElementById("starsCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];

  for(let i=0;i<150;i++){
    stars.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*2,
      d: Math.random()*1
    });
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";

    for(let s of stars){
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fill();

      s.y += s.d;

      if(s.y > canvas.height){
        s.y = 0;
        s.x = Math.random()*canvas.width;
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

});


