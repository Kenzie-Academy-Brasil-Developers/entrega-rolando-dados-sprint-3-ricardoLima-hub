//Simular rolagem de dois dados várias vezes, armazenar
// a frequencia de cada resultado e depois fazer o display dessas frequencias;

//Dado de 6 faces - 1 a 6
//Dois dados - 2 a 12

//Simular 1000x. Cada lançamento, gerar número aleatório para cada dado;
//Usar array para armazenar a frequencia

let body = document.querySelector("body");
let container__text = document.createElement("div");
let container__bars = document.createElement("div")

container__text.id = "textResults";
container__bars.id = "barsResults";

body.appendChild(container__text);
body.appendChild(container__bars);

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const rollOfDices = () => {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    return dice1 + dice2
}

const dice_roller = () => {
    for (let counter = 1; counter <= 1000; counter++){
        count[rollOfDices()-2]++
    }
}



const showResults = () => {
    for (let i = 0; i < count.length; i++){
        //para as colunas
        let columns = document.createElement("p")
        columns.classList = "textResults__columns"
        columns.innerHTML = `${(i+2)}: ${count[i]}`
        container__text.appendChild(columns)

        //para as barras
        let graphics = document.createElement("p")
        graphics.classList = "barsResults__graphics"
        graphics.style.width = count[i] + 'px'
        graphics.style.backgroundColor = "black"
        graphics.style.color = "white"
        graphics.innerHTML = count[i]
        container__bars.appendChild(graphics)
    }
    
}

showResults(dice_roller())