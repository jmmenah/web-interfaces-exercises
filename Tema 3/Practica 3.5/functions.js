    var cnv, ctx, ctx1, pos_u = 0;

		function anim() {
            ctx.clearRect(0, 0, 600, 400);
            ctx1.clearRect(0, 0, 600, 400);
            ctx2.clearRect(0, 0, 600, 400);
            ctx3.clearRect(0, 0, 600, 400);
            ctx.fillRect(20, 20, 100,pos_u);
            ctx1.fillRect(20, 440, 100,-200);
            ctx1.clearRect(20, 440, 100,-pos_u);
            ctx2.rect(20, 20, 100,200);
            ctx3.stroke();
            ctx3.rect(20, 240, 100,200);
            ctx3.stroke();

            pos_u += 1.67;
            setTimeout(anim, 500);
            if(pos_u>200){
                pos_u=0;
            }
		}

		window.onload = function() {
			cnv = document.getElementById('canvas');
            ctx = cnv.getContext('2d');
            ctx1 = cnv.getContext('2d');
            ctx2 = cnv.getContext('2d');
            ctx3 = cnv.getContext('2d');
			// iniciar la animación
			anim();
		}