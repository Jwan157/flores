window.addEventListener("load", () => {
  document.body.classList.remove("container");

  const audio = document.querySelector("audio");
  if(audio){
    audio.volume = 0.45;
    const button = document.createElement("button");
    button.className = "music-toggle";
    button.type = "button";
    button.title = "Pausar / reproducir música";
    button.textContent = "♫";
    button.addEventListener("click", () => {
      if(audio.paused){
        audio.play().catch(()=>{});
        button.textContent = "♫";
      }else{
        audio.pause();
        button.textContent = "Ⅱ";
      }
    });
    document.body.appendChild(button);
  }
});
