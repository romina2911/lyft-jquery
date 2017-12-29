$(document).ready(function(){
    //extrayendo elementos 
    var $email = $('#inputEmail3');
    var $password = $('#inputPassword3');
   //asociando eventos a los elementos seleccionados
   //Validando email
   $email.on('input', function (event){
       $(this).val();
       var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
       console.log(PATERNEMAIL.test($(this).val()));
       if(PATERNEMAIL.test($(this).val())){
           alert('Este correo es valido')
       }else{
           console.log('Ingrese un correo valido');
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
});

 