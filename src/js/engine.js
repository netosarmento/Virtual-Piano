const pianoKeys = document.querySelectorAll(".piano-keys .key"); // escolhendo as classes que quero 

const volumeSlider = document.querySelector(".volume-slider input"); // ajeitando o volume

let mapedkeys = [];

let audio = new Audio(`/src/tunes/a.wav`); 




const playTune = (key) => {
    audio.src = `/src/tunes/${key}.wav`;  // usando variavel
    audio.play();
    
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    clickedKey.classList.add("active"); // importando a classe active tive que importa como classe
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
});
}
document.addEventListener("keydown", (e) => {
    if (mapedkeys.includes(e.key)) {
        playTune(e.key);
    }
})
const handleVolume = (e)=> {
    audio.volume = e.target.value;
};

volumeSlider.addEventListener("input", handleVolume); //chamando a função