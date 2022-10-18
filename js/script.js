function incrementoOffa(){
    var tipo = document.querySelector("tipo");
    var increment = document.getElementById("increment")

    if(tipo.value == "base64"){
        increment.disabled;
    }
}

function incrementoOff(){
    var incremento = document.querySelector("#increment");

    incremento.disabled = true;
}


function incrementoO(){
    var incremento = document.querySelector("#increment");
    var select = document.getElementById("base_ou_cesar");
    var opcaoValor = select.options[select.selectedIndex].value;

    if(opcaoValor == "base64"){
        incremento.disabled = true;
    } else {
        incremento.disabled = false;
    }

}

// function imprimir(){

//     var fraseInicial = document.getElementById("msg_in");
//     var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     var incremento = getElementById("increment");
//     var x = parseInt(incremento);
//     var fraseFinal = [];

//     for (var i = 0; i < fraseInicial.length; i++){
//         if(fraseInicial[i] != ' '){
//             for (var j = 0; j < alfa.length; j++){
//                 if (fraseInicial[i] == alfa[j]){
//                     fraseFinal[i] = alfa[(j + x) % alfa.length];
//                     break;
//                 }
//             }
//         }else{
//             fraseFinal[i] = ' ';
//         }
//     }
//     alert(fraseFinal);
    
// }