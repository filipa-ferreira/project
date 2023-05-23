import {getVideos} from './data.js';


//* Modelo de dados
const videos = getVideos();

//* /////Declaracao Das variaveis Globais //////////
let controlBtns = document.querySelector('#controlBtns');
let volControl = document.querySelector('#volumeControl meter');
//let rangeVol = document.querySelector('#rangeVol');
let player = document.querySelector('#player');
let video = player.firstElementChild;
let durationTxt = player.querySelector('#durationTxt');
let timeTxt = player.querySelector('#timeTxt');

let progress = video.nextElementSibling;


//* Default inicial do player
let currentVideo = 0;
video.volume = 0.5;
volControl.value = video.volume;
//rangeVol.value = video.volume;
//playVideo(currentVideo);
video.src = `media/${videos[currentVideo].url}`;



//* Definir Eventos
controlBtns.addEventListener('click', controlVideo, false);
video.addEventListener('canplay', initVideo, false);
video.addEventListener('timeupdate', updateTime, false);
progress.addEventListener('click', changeTime, false);




//* Listeners dos Eventos
function controlVideo ({target}){

    // se for o playBtn
    if(target.id === 'playBtn'){
       playVideo(currentVideo);
    }

    if(target.id === 'pauseBtn'){
       pauseVideo();
    }

    if(target.id === 'stopBtn'){
       stopVideo();
    }

    if(target.id === 'muteBtn'){
        muteVideo();
    }

    if(target.id === 'volUpBtn'){
        changeVol(0.1);
    }

    if(target.id === 'volDownBtn'){
        changeVol(-0.1);
    }
}

function initVideo(e){
    durationTxt.textContent = `Tempo Total : ${humanizeDuration(video.duration * 1000 , {language: 'pt'})}`;

    timeTxt.textContent = `Tempo Total : ${humanizeDuration( Math.round(video.currentTime) * 1000 , {language: 'pt'})}`;
}

function updateTime(){
    timeTxt.textContent = `Tempo Total : ${humanizeDuration( Math.round(video.currentTime) * 1000 , {language: 'pt'})}`;

    //progress.value = video.currentTime / video.duration;
   try {
        progress.max = video.duration;
        progress.value = video.currentTime;
   } catch (error) {
        console.log('erro capturado: ', error);
   }
}

function changeTime (e) {

    //console.log(e);
    video.currentTime = video.duration * e.offsetX / 640;

    /* 640px     --------- video.duration
    offsetX   ---------  x */
}




//* Logica da aplicação / business Logic

function playVideo(index){

    video.src = `media/${videos[index].url}`;
    video.play();

}

function pauseVideo(){
    video.pause();
}

function stopVideo(){
    video.pause();
    video.currentTime = 0;
}

function muteVideo(){
    //video.muted ? video.muted = false : video.muted = true;
    video.muted = !video.muted;
    video.muted ? volControl.value = 0 : volControl.value = video.volume;
    //video.muted ? rangeVol.value = 0 : rangeVol.value = video.volume;

}

function changeVol(val){
    volControl.value += val;
    //rangeVol.value += val;

    video.volume = volControl.value;

    video.muted = false;
}