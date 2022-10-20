function codificacao(){ //habbilita o tipo de codificação
    const incremento = document.querySelector('#increment');
    const select = document.getElementById('base_ou_cesar');
    const opcaoValor = select.options[select.selectedIndex].value;
    const botao = document.getElementById('btn');

    if(opcaoValor == 'base64'){
        incremento.disabled = true;
        botao.setAttribute('onclick', 'base64();');        
    } else {
        incremento.disabled = false;
        botao.setAttribute('onclick', 'cifraC();');
    }
}

function textoCodif(){ //muda o texto do botão para 'codificar'
    const botao = document.getElementById('btn');    

    botao.value = 'Codificar';
}

function textoDecodif(){ //muda o texto do botão para 'decodificar'
    const botao = document.getElementById('btn');    

    botao.value = 'Decodificar';
}

function base64(){ //função para codificar em base64
    //a função deve codificar ou decodificar a partir da opção escolhida no input radio
    const fraseInicial = document.getElementById('msg_in');
    const codificado = btoa(fraseInicial.value);
    const decodificado = atob(fraseInicial.value);
    const resposta = document.getElementById('answer');
    const codificar = document.getElementById('codif');
    const decodificar = document.getElementById('decodif');

    if(codificar.checked){
        resposta.setAttribute('value', codificado);        
    }else if(decodificar.checked){
        resposta.setAttribute('value', decodificado);
    }else{
        alert("Escolha entre codificar ou decodificar");
    }
}

function teste(){
    alert("testando o botão");
}

function cifraC(){ //função para codificar em Cesar

    const alfa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const fraseInicial = document.getElementById('msg_in');
//    alert(fraseInicial.value); teste da variavel
    const incremento = document.getElementById('increment');
//    console.log('incremento.value = ' +incremento.value); //teste da variavel
    const xyx = parseInt(incremento.value);
//    console.log('xyx já convertido = '+xyx);
//    console.log(typeof xyx);
    //teste da variavel
    const fraseFinal = [];

    for (const i=0; i<fraseInicial.length; i++){
        for(const j=0; j<alfa.length; j++){
            if(fraseInicial.value[i] == alfa[j]){
                fraseFinal[i] = alfa[j];
                alert(fraseFinal.value);
            }
        }
    }


    // for(const i=0; i<5; i++){
    //     fraseFinal[i] = alfa[(i+xyx)];
    // }

    // alert(fraseFinal.join(''));
    // alert(fraseInicial.value);

//     for (const i = 0; i < fraseInicial.length; i++){
// //        if(fraseInicial[i] != ' '){
//             for (const j = 0; j < alfa.length; j++){
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
//     alert(fraseFinal.join(''));
}

// function resposta(){
//     const opcaoValor = select.options[select.selectedIndex].value;

//     if(opcaoValor == 'base64'){
//         base64();
//     } else {
//         incremento.disabled = false;
//     }
// }