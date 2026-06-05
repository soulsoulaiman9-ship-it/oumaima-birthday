
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
document.getElementById("museum").classList.remove("hidden");
document.getElementById("bgMusic").play().catch(()=>{});
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

function startMuseum(){

document.querySelector(".hero").style.display="none";

document.getElementById("museum").classList.remove("hidden");

const music=document.getElementById("bgMusic");

music.play().catch(err=>{
console.log(err);
});
}

/* FLOATING HEARTS */

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

document.getElementById("surprise").style.display="block";

createConfetti();

setTimeout(()=>{
alert("💙 Happy Birthday Oumaima 💙");
},1000);

}


