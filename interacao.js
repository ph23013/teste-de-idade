function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById("txtano");
    let res = document.querySelector("div#res");
    if (fano.value == 0 || fano.value < 1900 || Number(fano.value) > ano ) {
        window.alert("[erro] verificar os dados e tente novamente!")
    } else {
       let fsex = document.getElementsByName('radsex');
       let idade = ano - Number(fano.value);
       let genero = '';
       let img = document.createElement("img");
       img.setAttribute("id", "foto");
     
    
    if (fsex[0].checked) {
        genero = "homem"
        if (idade > 0 && idade < 10){
            //crianca
            img.setAttribute("src", "image/foto-crianca-m.png");
            document.body.style.background = "#515154";
        }else if (idade < 21) {
            //jovem
            img.setAttribute("src", "image/foto-jovem-m.png");
            document.body.style.background = "#515154";
        }else if (idade < 50) {
            //adulto
            img.setAttribute("src", "image/foto-adulto-m.png");
            document.body.style.background = "#515154";
        }else{
            //idoso
            img.setAttribute("src", "image/foto-idoso-m.png");
            document.body.style.background = "#515154";
        }
        } else if (fsex[1].checked) {
            genero = "mulher"
            if (idade >=0 && idade < 10){
            //crianca
            img.setAttribute("src", "image/foto-crianca-f.png");
            document.body.style.background = "#515154";
        }else if (idade < 21) {
            //jovem
            img.setAttribute("src", "image/foto-jovem-f.png");
            document.body.style.background = "#515154";
        }else if (idade < 50) {
            //adulto
            img.setAttribute("src", "image/foto-adulto-f.png");
            document.body.style.background = "#515154";
        }else{
            //idoso
            img.setAttribute("src", "image/foto-idoso-f.png");
            document.body.style.background = "#515154";
        }
        }
        res.style.textAlign = "center"
        res.innerHTML = `detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}