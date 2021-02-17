window.onload = function() {
    // Ejercicio 1
    $(document).ready(function(){
        $("tr:even>td:odd").css("background-color","black");
        $("tr:odd>td:even").css("background-color","black");
    });

    //Ejercicio 2
    let max = 25;

    $('#max').html(max);

    $('#texto').keyup(function() {
        let chars = $(this).val().length;
        let diff = max - chars;
        $('#contador').html(diff+" caractere(s) restantes");   
    });

    //Ejercicio 3
    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            $('#eventos').html('Has pulsado enter');
        }
    });

    $(document).mousedown(function(e) {
        if(e.which == 1) {
            $('#eventos').html('Has hecho click izquierdo');
        }
        else if(e.which == 3) {
            $('#eventos').html('Has hecho click derecho');
        }
    });

    //Ejercicio 4
    $('#nonumeros').on('keypress',function(e) {
        if(e.charCode < 48 || e.charCode > 57) {
            return false;
        }
    })
}