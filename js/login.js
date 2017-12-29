$(document).ready(function(){
    //extrayendo elementos 
    var $email = $('#inputEmail3');
    var $password = $('#inputPassword3');
    var $checked =$('input[type=checkbox]');
    var $submit = $('button[type=submit]') 
   
    //verificando valores para habilitar boton
    var verifyEmail = false;
    var verifyPassword=false;
    var verifyChecked = false;



   //asociando eventos a los elementos seleccionados
   //Validando email
   $email.on('input', function (){
       $(this).val();
       var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
       console.log(PATERNEMAIL.test($(this).val()));
       if(PATERNEMAIL.test($(this).val())){
       verifyEmail = true;
        activeButton();
       }else{
       verifyEmail = false;
        desactiveButton();
       }
    });
    //validando password
   $password.on('input', function() {
    if($(this).val().length >= 6){
         verifyPassword = true;
            activeButton();
    } else {
       verifyPassword = false;
      desactiveButton();
    }
   });

   //asociar evento a checkbox
   $checked.on('click', function(event){
       if(event.target.checked){
           verifyChecked=true;
           activeButton();
       }else{
        verifyChecked = false;
        desactiveButton();
       }
   });

   //creando función active button
   function activeButton(){
       console.log(verifyEmail&&verifyPassword&&verifyChecked);
       if(verifyEmail&&verifyPassword&&verifyChecked)
           $submit.attr('disabled', false);
    
   }

   function desactiveButton() {
        $submit.attr('disabled', true);
     }

});

 