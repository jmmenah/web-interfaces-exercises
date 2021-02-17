window.onload = function() {
    // Ejercicio 1
    $(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                $("#boton").show();
            }
            else if($(this).is(":not(:checked)")){
                $("#boton").hide();
            }
        });
    });

    //Ejercicio 2
    function blink(){
        $('#parpadeo').toggle();
    }
    $(document).ready(function() {
        setInterval(blink, 5000);
    });
    
    //Ejercicio 3
    $('#lista').ready(function(){
        let newList = $(this).val();
        
        $('#crearLista').click(function(){
            $('.actual').append($('<li>', {
                 text: $('#lista').val()
            }));
        });
        
    });
    
    //Ejercicio 4

    $('img').click(function() {
        $('img').css({ opacity: 0.4 });
        $(this).css({ opacity: 1 });
        $(this).toggleClass('scale');
    });

    //Ejercicio 5
        $('.respuesta').hide();
        $('.pregunta').show();
    $('.pregunta').click(function() {
        if($(this).children('.respuesta').css('display')=='none'){
            $(this).children('.respuesta').show();
            $(this).children('.preg').hide();
        }else{
            $(this).children('.respuesta').hide();
            $(this).children('.preg').show();
        }
    });

    //Ejercicio 6

    $("#atrapa").mouseenter(function(){
        $("#atrapa").css('float','right')
    });
    $("#atrapa").mouseleave(function(){
        $("#atrapa").css('float','left')
    });

}