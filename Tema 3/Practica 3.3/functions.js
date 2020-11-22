function videoInit(){
    document.getElementById('video').style.display="inline";
    document.getElementById('video').play();
    let visor = document.getElementsByClassName('visor');
    visor[0].style="display:inline-block";
}
function videoPause(){
    document.getElementById('video').style.display="none";
    document.getElementById('video').pause();
    let visor = document.getElementsByClassName('visor');
    visor[0].style="display:hidden";
}
function videoLoad(){
    document.getElementById('video').style.display="inline";
    document.getElementById('video').load();
    document.getElementById('video').play();
}
function musicInit(){
    document.getElementById('music').style.display="inline";
    document.getElementById('music').play();
    let visor = document.getElementsByClassName('visor');
    visor[1].style="display:inline-block";
}
function musicPause(){
    document.getElementById('music').style.display="none";
    document.getElementById('music').pause();
    let visor = document.getElementsByClassName('visor');
    visor[1].style="display:hidden";
}
function musicLoad(){
    document.getElementById('music').style.display="inline";
    document.getElementById('music').load();
    document.getElementById('music').play();
}