var cnv, ctx2, ctx1, pos_u = 0;

function anim() {
    ctx1.clearRect(0, 0, 800, 800);
    ctx2.clearRect(0, 0, 800, 800);
    ctx1.beginPath();
    ctx1.fillRect(160+pos_u, 180, 200, 100);
    ctx2.rect(200+pos_u, 20, 100,400);
    ctx2.stroke();

    pos_u += 40;
    setTimeout(anim, 500);
    if(pos_u>200){
        pos_u=0;
    }
}

window.onload = function() {
    cnv = document.getElementById('canvas');
    ctx1 = cnv.getContext('2d');
    ctx2 = cnv.getContext('2d');
    // iniciar la animación
    anim();
}