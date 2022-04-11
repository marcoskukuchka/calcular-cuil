
let errorCuit = document.getElementById("cuitInvalido");
let numeroCuit = document.getElementById("cuil"); 

function mostrarErrorCuit(numeroCuit){
    let esValido = validarCuit(numeroCuit);
    if(esValido){
        errorCuit.innerText = "Cuit/Cuil Valido"
    }else{
        errorCuit.innerText = "Cuit/Cuil Invalido"
    }
}


function validarCuit(cuit) {
    if(cuit.length != 11) {
        return false;

    }

    let acumulado   = 0;
    let digitos     = cuit.split("");
    let digito      = digitos.pop();

    for(let i = 0; i < digitos.length; i++) {
        acumulado += digitos[9 - i] * (2 + (i % 6));
    }

    let verif = 11 - (acumulado % 11);
    if(verif == 11) {
        verif = 0;
    } else if(verif == 10) {
        verif = 9;
    }

    return digito == verif;
}



