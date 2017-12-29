$(document).ready(function(){
    //extrayendo elementos 
    var $email = $('#inputEmail3');
    var $password = $('#inputPassword3');
    var $checkbox =$('.checklog');
    var $submit = $('button[type=submit]') 
    console.log($checkbox);
    //verificando valores para habilitar boton
    var verifyEmail = false;
    var verifyPassword=false;
    var verifyCheck = false;



   //asociando eventos a los elementos seleccionados
   //Validando email
   $email.on('input', function (event){
       $(this).val();
       var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
       console.log(PATERNEMAIL.test($(this).val()));
       if(PATERNEMAIL.test($(this).val())){
        var verifyEmail = true;
        activeButton();
       }else{
        desactiveButton();
       }
    });
    //validando password
   $password.on('input', function(event) {
    if($(this).val().length <= 6){
        console.log('la contraseña debe tener minimo 6 caracteres');
    }else{
        console.log('contraseña valida');
    }
   });

   //asociar evento a checkbox
   $checkbox.on('click', function(event){
       if(event.target.checked){
           console.log('acepta');
       }else{
        console.log('no acepta');
       }
   });

   //creando función active button
   function activeButton(){
           $submit.attr('disabled', false);
    
   }

   function desactiveButton() {
        $submit.attr('disabled', true);
     }

});

 