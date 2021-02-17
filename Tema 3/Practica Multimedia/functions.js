if(window.innerWidth<600){
    document.getElementById("logo").style="display:none";
}
function infoFoto(){
    document.getElementById("info").innerHTML="Estas viendo fotos";
    document.getElementById("logo").style="display:none";
}
function clearInfo(){
    document.getElementById("info").innerHTML="";
    document.getElementById("logo").style="display:block";
    if(window.innerWidth<600){
        document.getElementById("logo").style="display:none";
    }
}
function videoInit(n){
    document.getElementsByClassName('video')[n].play();
}
function videoPause(n){
    document.getElementsByClassName('video')[n].pause();
}
function videoReload(n){
    document.getElementsByClassName('video')[n].load();
}
function like(n){
    document.getElementsByClassName('vista')[n].style="border:2px green solid;background-color:green;";
}
function dislike(n){
    document.getElementsByClassName('vista')[n].style="border:2px red solid;background-color:red;";
}
function infoVideo(){
    document.getElementById("info").innerHTML="Estas viendo videos";
    document.getElementById("logo").style="display:none";
}
function clearVideo(){
    document.getElementById("info").innerHTML="";
    document.getElementById("info").innerHTML="";
    document.getElementById("logo").style="display:block";
    if(window.innerWidth<600){
        document.getElementById("logo").style="display:none";
    }
}
function mostrar(n){
    document.getElementsByClassName('cantante')[n].style="display:block;background-color:green;";
    document.getElementsByClassName('foto')[n].style="background-color:green;";
}
function ocultar(n){
    document.getElementsByClassName('cantante')[n].style="display:none;";
    document.getElementsByClassName('foto')[n].style="background-color:none;";
}
function infoMusica(){
    document.getElementById("info").innerHTML="Estas escuchando musica";
    document.getElementById("logo").style="display:none";
}
function clearMusica(){
    document.getElementById("info").innerHTML="";
    document.getElementById("info").innerHTML="";
    document.getElementById("logo").style="display:block";
    if(window.innerWidth<600){
        document.getElementById("logo").style="display:none";
    }
}