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

function cifraC(){//função para codificar em cesar
    var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const fraseInicial = document.getElementById('msg_in');
    const incremento = document.getElementById('increment');
    const x = parseInt(incremento.value);
    const resposta = [];
    const tamanho = fraseInicial.value.length;
    const codificar = document.getElementById('codif');
    const decodificar = document.getElementById('decodif');
    const fraseFinal = document.getElementById('answer');

    if(codificar.checked){
        for(i=0; i<tamanho; i++){
            if(fraseInicial.value[i] != " "){
                for(j=0; j<alfa.length; j++){
                    if(fraseInicial.value[i] == alfa[j]){
                        resposta[i] = alfa[(j+x) % alfa.length];
                    }
                }
            }else{
                resposta[i] = ' ';
            }
        }
        fraseFinal.setAttribute('value', resposta.join(""));
    } else if (decodificar.checked){
        for(i=0; i<tamanho; i++){
            if(fraseInicial.value[i] != " "){
                for(j=0; j<alfa.length; j++){
                    if(fraseInicial.value[i] == alfa[j]){
                        resposta[i] = alfa[(j-x) % alfa.length];
                    }
                }
            }else{
                resposta[i] = ' ';
            }
        }
        fraseFinal.setAttribute('value', resposta.join(""));
    }
}