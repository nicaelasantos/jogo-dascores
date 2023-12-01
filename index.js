const todasCoresVetor = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

// Selecionar 10 cores aleatórias
const coresSelecionadas = [];
for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * todasCoresVetor.length);
    coresSelecionadas.push(todasCoresVetor[randomIndex]);
    todasCoresVetor.pop(todasCoresVetor[randomIndex])
}

// Mostrar as cores selecionadas
const listaCores = document.getElementById("lista-opcoes");
coresSelecionadas.forEach(color => {
    const itemLista = document.createElement("li");
    itemLista.id = color;
    itemLista.className = "color-option";
    itemLista.style.backgroundColor = color;
    itemLista.addEventListener("click", () => conferirEscolha(color));
    listaCores.appendChild(itemLista);
});

//Selecionar uma cor aleatória
const corAleatoria = coresSelecionadas[Math.floor(Math.random() * coresSelecionadas.length)];

//Mostrar a cor selecionada
const colorDisplayDiv = document.getElementById("color-display");
//colorDisplayDiv.style.backgroundColor = corAleatoria;

const nomeCorTitle = document.getElementById("nome-cor");
nomeCorTitle.innerHTML = corAleatoria;

// Função para verificar se a cor está correta
let tentativas = 3;

const logDiv = document.getElementById("log");

function conferirEscolha(selecao) {
    if(tentativas == 0) return;

    if (selecao == corAleatoria) {
        document.body.style.backgroundColor = corAleatoria;
        exibeMensagem("Parabéns! Você acertou a cor!");
    } else {
        tentativas--;
        if (tentativas == 0) {
            //exibeMensagem(`Você perdeu! A cor correta era: ${corAleatoria}. Aperte F5 para tentar novamente.`);
            exibeMensagem(`Você perdeu! A cor correta foi destacada.<br>Aperte aqui para tentar novamente.`);
            logDiv.addEventListener("click", recarregarPagina);
            logDiv.style.cursor = "pointer";
            marcarCorCorreta(corAleatoria);
        } else {
            exibeMensagem(`Tente novamente! Você tem mais ${tentativas} tentativas.`);
        }
    }
}

function marcarCorCorreta(corAleatoria){
    opcoes = document.querySelectorAll(".color-option");
    opcoes.forEach(opcao => {
        if(opcao.id != corAleatoria)
            opcao.style.backgroundColor = "black";
    });
}

function exibeMensagem(mensagem){
    logDiv.innerHTML = mensagem;
}

function recarregarPagina(){
    location.reload();
}