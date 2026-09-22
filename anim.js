// Letras sincronizadas con la canción
const audio = document.querySelector("audio");
const lyrics = document.querySelector("#lyrics");

const lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 18 },
  { text: "Lonely before the sun cried", time: 27 },
  { text: "Fell from the sky", time: 32 },
  { text: "Like water drops", time: 33 },
  { text: "Where I'm now? I don't know why", time: 41 },
  { text: "Nice butterflies in my hands", time: 47 },
  { text: "Too much light for twilight", time: 54 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "That vision", time: 67 },
  { text: "Really strong, blew my mind", time: 72 },
  { text: "Silence, let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 200 }
];

function updateLyrics(){
  if(!audio || !lyrics) return;
  const time = Math.floor(audio.currentTime);
  const current = lyricsData.find(line => time >= line.time && time < line.time + 6);
  if(current){
    lyrics.textContent = current.text;
    lyrics.style.opacity = "1";
  } else {
    lyrics.style.opacity = "0";
  }
}
setInterval(updateLyrics, 300);

// Luciérnagas suaves para el fondo.
const fireflies = document.querySelector("#fireflies");
if(fireflies){
  for(let i=0;i<34;i++){
    const f=document.createElement("span");
    f.className="firefly";
    f.style.left=(5+Math.random()*90)+"%";
    f.style.top=(18+Math.random()*67)+"%";
    f.style.setProperty("--fx",(-35+Math.random()*70)+"px");
    f.style.setProperty("--fy",(-45+Math.random()*90)+"px");
    f.style.animationDelay=(-Math.random()*5)+"s";
    f.style.animationDuration=(3+Math.random()*4)+"s";
    fireflies.appendChild(f);
  }
}

// Partículas muy sutiles alrededor del cursor.
document.addEventListener("pointermove", e => {
  if(Math.random() > .94){
    const dot=document.createElement("span");
    dot.style.position="fixed";
    dot.style.left=e.clientX+"px";
    dot.style.top=e.clientY+"px";
    dot.style.width="4px";
    dot.style.height="4px";
    dot.style.borderRadius="50%";
    dot.style.background="#ffe34b";
    dot.style.boxShadow="0 0 10px #ffe34b";
    dot.style.pointerEvents="none";
    dot.style.zIndex="75";
    dot.animate([
      {opacity:0,transform:"translate(0,0) scale(.5)"},
      {opacity:1,transform:"translate(0,-7px) scale(1)"},
      {opacity:0,transform:"translate(0,-18px) scale(0)"}
    ],{duration:700,easing:"ease-out"});
    document.body.appendChild(dot);
    setTimeout(()=>dot.remove(),700);
  }
}
);
