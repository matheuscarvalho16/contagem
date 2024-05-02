const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const dataContagem = "17 May 2024";

function countdown() {

    const dataFinal = new Date(dataContagem);
    const dataAtual = new Date();

    const totalSegundo = (dataFinal - dataAtual) / 1000;

    const diasD = Math.floor(totalSegundo / 3600 / 24);
    const horasD = Math.floor(totalSegundo / 3600) % 24;
    const minutosD = Math.floor(totalSegundo / 60) % 60;
    const segundosD = Math.floor(totalSegundo) % 60;

    diasEl.innerHTML = diasD;
    horasEl.innerHTML = formatTime(horasD);
    minutosEl.innerHTML = formatTime(minutosD);
    segundosEl.innerHTML = formatTime(segundosD);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time
}

countdown();

setInterval(countdown, 1000)