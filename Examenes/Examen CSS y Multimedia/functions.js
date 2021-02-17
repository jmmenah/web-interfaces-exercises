function play(){
    document.getElementById('play').style="display:none;";
    document.getElementById('pause').style="display:inline;";
    let multimedia=document.getElementById('cancion');
    multimedia.play();
}
function pause(){
    document.getElementById('play').style="display:inline;";
    document.getElementById('pause').style="display:none;";
    let multimedia=document.getElementById('cancion');
    multimedia.pause();
}