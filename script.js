
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

const surprise=
document.getElementById("surprise");

surprise.style.display="block";

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

}
