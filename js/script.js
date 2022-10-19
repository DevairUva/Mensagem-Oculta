function incremento(){
    let incremento = document.querySelector("#increment");
    let select = document.getElementById("base_ou_cesar");
    let opcaoValor = select.options[select.selectedIndex].value;

    if(opcaoValor == "base64"){
        incremento.disabled = true;
    } else {
        incremento.disabled = false;
    }
}

function textoCodif(){
    let botao = document.getElementById("btn");    

    botao.textContent = "Codificar";
}

function textoDecodif(){
    let botao = document.getElementById("btn");    

    botao.textContent = "Decodificar";
}

function base64(){
    let fraseInicial = document.getElementById("msg_in");
    let codificado = btoa(fraseInicial.value);
    alert(codificado);
    // let decodificado = atob(fraseInicial.value);
    // alert(decodificado);
}

function cifraC(){

    let alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let fraseInicial = document.getElementById("msg_in");
//    alert(fraseInicial.value); teste da variavel
    let incremento = document.getElementById("increment");
//    console.log("incremento.value = " +incremento.value); //teste da variavel
    let xyx = parseInt(incremento.value);
//    console.log("xyx já convertido = "+xyx);
//    console.log(typeof xyx);
    //teste da variavel
    let fraseFinal = [];

    for (let i=0; i<fraseInicial.length; i++){
        for(let j=0; j<alfa.length; j++){
            if(fraseInicial[i] == alfa[j]){
                fraseFinal[i] = alfa[j];
                console.log(i);
                console.log(j);
            }
        }
    }


    // for(let i=0; i<5; i++){
    //     fraseFinal[i] = alfa[(i+xyx)];
    // }

    // alert(fraseFinal.join(""));
    // alert(fraseInicial.value);

//     for (let i = 0; i < fraseInicial.length; i++){
// //        if(fraseInicial[i] != ' '){
//             for (let j = 0; j < alfa.length; j++){
//                 if (fraseInicial[i] == alfa[j]){
//                     alert(j);
//                     alert(xyx);
//                     fraseFinal[i] = alfa[(j + xyx) % alfa.length];
//                     break;
//                 }
//             }
// //        }else{
// //            fraseFinal[i] = ' ';
// //        }
//     }
//     alert(fraseFinal.join(""));

}

function resposta(){
    let opcaoValor = select.options[select.selectedIndex].value;

    if(opcaoValor == "base64"){
        base64();
    } else {
        incremento.disabled = false;
    }
}