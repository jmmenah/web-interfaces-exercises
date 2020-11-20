function mostrar(num){
    let imagen = document.getElementsByClassName('imagen');
    imagen[num].style="transform:scale(1.3);";
    let coche = document.getElementsByClassName('coche');
    coche[num].style="transform:scale(1.1); background:rgba(255,117,020,0.7);transition: background-color 1000ms linear;";
    let tit = document.getElementsByClassName('titulo');
    tit[num].style='visibility:visible;transform: translate(0px, 15px);';
    let tex = document.getElementsByClassName('texto');
    tex[num].style='visibility:visible;transform: translate(0px, -45px);';
    let bot = document.getElementsByClassName('boton');
    bot[num].style='visibility:visible;transform: translate(0px, -25px);';
}
function ocultar(num){
    let imagen = document.getElementsByClassName('imagen');
    imagen[num].style="transform:scale(1);transition-delay: 0s;";
    let coche = document.getElementsByClassName('coche');
    coche[num].style="transform:scale(1);transition-delay: 0s;";
    let tit = document.getElementsByClassName('titulo');
    tit[num].style='visibility:hidden;transition-delay: 0s;';
    let tex = document.getElementsByClassName('texto');
    tex[num].style='visibility:hidden;transition-delay: 0s;';
    let bot = document.getElementsByClassName('boton');
    bot[num].style='visibility:hidden;transition-delay: 0s;';
}
