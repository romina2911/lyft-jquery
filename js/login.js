$(document).ready(function(){
    //extrayendo elementos 
    var $email = $('#inputPassword3');
   //asociando eventos a los elementos seleccionados
   $email.on('input', function (event){
       $(this).val();
       var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
       console.log(PATERNEMAIL.test($(this).val()));
   
    });
   
   $password.on('input', function(event) {
       if($(this).val().length >= 6){
           alert('cumple');
       }else{
           alert('no cumple');
       }
   
     });
   });

 