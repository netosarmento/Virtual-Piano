const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
let mapedkeys = []; // biblioteca das teclas mapeadas
let audio = new Audio(`/src/tunes/a.wav`);

const playTune = (key) => {
    audio.src = `/src/tunes/${key}.wav`;  // Usando a variável para mudar a fonte do áudio
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active"); // Adiciona a classe active
    setTimeout(() => {
        clickedKey.classList.remove("active"); // Remove a classe active após 150ms
    }, 150);
};

// Adicionando o evento de clique para cada tecla
pianoKeys.forEach((key) => {
    key.addEventListener("click", () => {
        playTune(key.dataset.key);
    });
});

document.addEventListener("keydown", (e) => { // colocando para fazer som ao apertar a tecla
    if (mapedkeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // Atualiza o volume do áudio
    
};

volumeSlider.addEventListener("input", handleVolume); // Chamando a função
