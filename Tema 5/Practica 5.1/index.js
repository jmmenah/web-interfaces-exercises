$(document).ready(function () {
    $('.datepicker').datepicker({
        endDate: '-18y'
    });

    $('#caducidad').ready(function() {
    let currentTime = new Date();
    let month ="0"+(currentTime.getMonth()+1);
    let minDate=currentTime.getFullYear()+"-"+month.slice(-2);
    $('#caducidad').attr('min',minDate);
    });

    $('#nombre').on("keypress click",function(e) {
        if(e.charCode >= 48 && e.charCode <= 57) {
            return false;
        }
    });

    $('#nombre').on('focusout', function(){
        let regexNombre=/^[A-Za-z]{0,20}$/;
        let nombre=document.getElementById('nombre').value;
        if(regexNombre.test(nombre) == true){
            document.getElementById('nombreError').innerHTML='';
        }else{
            document.getElementById('nombreError').innerHTML='Nombre erroneo';
        }
    });

    $('#apellidos').on("keypress click",function(e) {
        if(e.charCode >= 48 && e.charCode <= 57) {
            return false;
        }
    });

    $('#apellidos').on('focusout', function(){
        let regexApell=/^[A-Za-z ]{0,40}$/;
        let apellidos=document.getElementById('apellidos').value;
        if(regexApell.test(apellidos) == true){
            document.getElementById('apellidosError').innerHTML='';
        }else{
            document.getElementById('apellidosError').innerHTML='Apellidos erroneos';
        }
    });

    $('#codpostal').on('focusout', function(){
        let regexCodPostal=/^\w{40}$/;
        let codpostal=document.getElementById('codpostal').value;
        if(regexCodPostal.test(codpostal) == true){
            document.getElementById('codpostalError').innerHTML='';
        }else{
            document.getElementById('codpostalError').innerHTML='Nombre erroneo';
        }
    });

    $('#dni').on("focusout", function() {
        let numero
        let letr
        let letra
        let expresion_regular_dni
        let dni=document.getElementById('dni').value;
       
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
       
        if(expresion_regular_dni.test (dni) == true){
           numero = dni.substr(0,dni.length-1);
           letr = dni.substr(dni.length-1,1);
           numero = numero % 23;
           letra='TRWAGMYFPDXBNJZSQVHLCKET';
           letra=letra.substring(numero,numero+1);
          if (letra!=letr.toUpperCase()) {
            document.getElementById('dniError').innerHTML='Dni erroneo, la letra del NIF no se corresponde';
           }else{
            document.getElementById('dniError').innerHTML='';
           }
        }else{
            document.getElementById('dniError').innerHTML='Dni erroneo, formato no válido';
         }
      });

    $('#sexo').on("focusout",function() {
        if(document.getElementById('sexo').value =='hombre' || document.getElementById('sexo').value == 'mujer' || document.getElementById('sexo').value == 'otro') {
            document.getElementById('sexoError').innerHTML=''; 
        }else{
            document.getElementById('sexoError').innerHTML='Elige una opción valida';
        }
    });

    $('#codpostal').on("keypress click",function(e) {
        if(e.charCode < 48 || e.charCode > 57) {
            return false;
        }
    });

    $('#codpostal').on('focusout', function(){
        let regexCodPostal=/^\d{5}$/;
        let codpostal=document.getElementById('codpostal').value;
        if(regexCodPostal.test(codpostal) == true){
            document.getElementById('codpostalError').innerHTML='';
        }else{
            document.getElementById('codpostalError').innerHTML='Codigo postal erroneo';
        }
    });


    $('#poblacion').on("keypress click",function(e) {
        if(e.charCode >= 48 && e.charCode <= 57) {
            return false;
        }
    });

    $('#poblacion').on('focusout', function(){
        let regexPobl=/^[A-Za-z]{0,40}$/;
        let poblacion=document.getElementById('poblacion').value;
        if(regexPobl.test(poblacion) == true){
            document.getElementById('poblacioneError').innerHTML='';
        }else{
            document.getElementById('poblacionError').innerHTML='Poblacion erronea';
        }
    });

    $('#pais').on("keypress click",function(e) {
        if(e.charCode >= 48 && e.charCode <= 57) {
            return false;
        }
    });

    $('#pais').on('focusout', function(){
        let regexNombre=/^[A-Za-z]{0,40}$/;
        let nombre=document.getElementById('pais').value;
        if(regexNombre.test(nombre) == true){
            document.getElementById('paisError').innerHTML='';
        }else{
            document.getElementById('paisError').innerHTML='Pais erroneo';
        }
    });

    $('#tarjeta').on("keypress click",function(e) {
        if(e.charCode < 48 || e.charCode > 57) {
            return false;
        }
    });

    $('#tarjeta').on("focusout",function() {
        let tarjeta=document.getElementById('tarjeta').value.replace(/ |-/g,'');
        document.getElementById('tarjeta').value=tarjeta;
        if(document.getElementById('tarjeta').value.slice(0,1)=='5') {
            $('#mastercard').show();
            $('#visa').hide();
            document.getElementById('tarjetaError').innerHTML=''; 
        }

        if(document.getElementById('tarjeta').value.slice(0,1)=='4') {
            $('#mastercard').hide();
            $('#visa').show();
            document.getElementById('tarjetaError').innerHTML=''; 
        }

        if(document.getElementById('tarjeta').value.slice(0,1)!='4' &&
         document.getElementById('tarjeta').value.slice(0,1)!='5' ) {
            $('#mastercard').show();
            $('#visa').show();
            document.getElementById('tarjetaError').innerHTML='Introduce una tarjeta valida'; 
        }
        
        if(document.getElementById('tarjeta').value.length != 16){
            document.getElementById('tarjetaError').innerHTML='Introduce una tarjeta valida';
        }
    });

    $('#cvv').on("keypress click",function(e) {
        if(e.charCode < 48 || e.charCode > 57) {
            return false;
        }
    });

    $('#cvv').on('focusout', function(){
        let regexCVV=/^\d{3}$/;
        let cvv=document.getElementById('cvv').value;
        if(regexCVV.test(cvv) == true){
            document.getElementById('cvvError').innerHTML='';
        }else{
            document.getElementById('cvvError').innerHTML='CVV erroneo';
        }
    });

    $('#enviar').on('click',function(){
        if(document.getElementById('nombreError').innerHTML == '' &&
        document.getElementById('apellidosError').innerHTML == '' &&
        document.getElementById('dniError').innerHTML == '' &&
        document.getElementById('sexoError').innerHTML == '' &&
        document.getElementById('nombreError').innerHTML == '' &&
        document.getElementById('poblacionError').innerHTML == '' &&
        document.getElementById('paisError').innerHTML == '' &&
        document.getElementById('tarjetaError').innerHTML == '' &&
        document.getElementById('cvvError').innerHTML == ''){
            location.reload();
        }else{
            document.getElementById('error').innerHTML='Hay errores';
        }
    })

})