
//Este array guarda el último resultado calculado
const resAnterior = [];

//Aquí se declaran e inicializan las funciones
const displayOnScreen = (value) => {
    document.getElementById('display').innerHTML += value;
}

const calcularSeno = () => {
    const value1 = document.getElementById('display').innerText;
    const value2 = Math.sin(value1);
    const value = value2.toFixed(2);
    document.getElementById('showResult').innerHTML = value;
    document.getElementById('display').innerHTML = "";
}

const calcularCoseno = () => {
    const value1 = document.getElementById('display').innerText;
    const value2 = Math.cos(value1);
    const value = value2.toFixed(2);
    document.getElementById('showResult').innerHTML = value;
    document.getElementById('display').innerHTML = "";
}

const calcularTangente = () => {
    const valueS = document.getElementById('display').innerText;
    
    const valueB = Math.tan(valueS);
    const value = valueB.toFixed(2);
    document.getElementById('showResult').innerHTML = value;
    document.getElementById('display').innerHTML = "";
}

const calcularLogaritmo = () => {
    const value1 = document.getElementById('display').innerText;
    const value2 = Math.log(value1);
    const value = value2.toFixed(2);
    document.getElementById('showResult').innerHTML = value;
    document.getElementById('display').innerHTML = "";
}

const calcularRaiz = () => {
    const valueS = document.getElementById('display').innerText;
    const valueB = Math.sqrt(valueS);
    const value = valueB.toFixed(1);
    document.getElementById('showResult').innerHTML = value;
    document.getElementById('display').innerHTML = "";
}

const calculo = () => {
    let esc = eval(document.getElementById('display').innerHTML);
    document.getElementById('showResult').innerText = esc;
    document.getElementById('display').innerHTML = "";
    resAnterior.push(esc);
}

const limpiarPantallas = () => {
    document.getElementById('display').innerHTML = "";
    document.getElementById('showResult').innerHTML = "";
}

const del = () => {
    const newText = document.getElementById('display').innerHTML;
    document.getElementById('display').innerText = newText.substring(0, newText.length - 1);
}

//Los valores de entrada de las teclas se guardan en una variable

const uno = document.getElementById("numUno");
const dos = document.getElementById("numDos");
const tres = document.getElementById("numTres");
const cuatro = document.getElementById("numCuatro");
const cinco = document.getElementById("numCinco");
const seis = document.getElementById("numSeis");
const siete = document.getElementById("numSiete");
const ocho = document.getElementById("numOcho");
const nueve = document.getElementById("numNueve");
const cero = document.getElementById("numCero");

const borrar = document.getElementById("borrarTodo");
const ultimoR = document.getElementById("anterior");
const seno = document.getElementById("seno");
const coseno = document.getElementById("coseno");
const tangente = document.getElementById("tangente");
const borraUltimo = document.getElementById("borraUltimo");
const ln = document.getElementById("logaritmo");
const raiz = document.getElementById("raiz");
const dividir = document.getElementById("dividir");
const multiplicar = document.getElementById("multiplicar");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("tecRestar");
const igual = document.getElementById("igual");
const coma = document.getElementById("coma");

//Aquí se espera el evento de las teclas para ejecutar una función

uno.addEventListener("click", () => { 
    displayOnScreen(1);
})

dos.addEventListener("click", () => { 
    displayOnScreen(2);
})

tres.addEventListener("click", () => { 
    displayOnScreen(3);
})

cuatro.addEventListener("click", () => { 
    displayOnScreen(4);
})

cinco.addEventListener("click", () => { 
    displayOnScreen(5);
})

seis.addEventListener("click", () => { 
    displayOnScreen(6);
})

siete.addEventListener("click", () => { 
    displayOnScreen(7);
})

ocho.addEventListener("click", () => { 
    displayOnScreen(8);
})

nueve.addEventListener("click", () => { 
    displayOnScreen(9);
})

cero.addEventListener("click", () => { 
    displayOnScreen(0);
})

borrar.addEventListener("click", () => {
    limpiarPantallas();
});

borraUltimo.addEventListener("click", () => {
    del();
})

dividir.addEventListener("click", () => { 
    displayOnScreen("/");
});

sumar.addEventListener("click", () => { 
    displayOnScreen('+');
});

restar.addEventListener("click", () => { 
    displayOnScreen("-");
})
multiplicar.addEventListener("click", () => { 
    displayOnScreen('*');
})
coma.addEventListener("click", () => { 
    displayOnScreen(".");
})

igual.addEventListener("click", () => {
    calculo();
})

ultimoR.addEventListener("click", () => { 
    const value = resAnterior[resAnterior.length - 1];
    console.log(value);
    
    displayOnScreen(value);
});