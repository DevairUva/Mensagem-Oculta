function incrementoOffa(){
    let tipo = document.querySelector("tipo");
    let increment = document.getElementById("increment")

    if(tipo.value == "base64"){
        increment.disabled;
    }
}

function incrementoO(){
    let incremento = document.querySelector("#increment");
    let select = document.getElementById("base_ou_cesar");
    let opcaoValor = select.options[select.selectedIndex].value;

    if(opcaoValor == "base64"){
        incremento.disabled = true;
    } else {
        incremento.disabled = false;
    }

}

// function imprimir(){

//     let fraseInicial = document.getElementById("msg_in");
//     let alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     let incremento = getElementById("increment");
//     let x = parseInt(incremento);
//     let fraseFinal = [];

//     for (let i = 0; i < fraseInicial.length; i++){
//         if(fraseInicial[i] != ' '){
//             for (let j = 0; j < alfa.length; j++){
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