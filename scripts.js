
const resAnterior = [];

const mostrarEnPantalla = (value) => {
    document.getElementById('pantalla').innerHTML += value;
}

const calcularSeno = () => {
    const valueS = document.getElementById('pantalla').innerText;
    
    const valueB = Math.sin(valueS);
    const value = valueB.toFixed(2);
    document.getElementById('pantallaResultado').innerHTML = value;
    document.getElementById('pantalla').innerHTML = "";
}

const calcularCoseno = () => {
    const valueS = document.getElementById('pantalla').innerText;
    
    const valueB = Math.cos(valueS);
    const value = valueB.toFixed(2);
    document.getElementById('pantallaResultado').innerHTML = value;
    document.getElementById('pantalla').innerHTML = "";
}

const calcularTangente = () => {
    const valueS = document.getElementById('pantalla').innerText;
    
    const valueB = Math.tan(valueS);
    const value = valueB.toFixed(2);
    document.getElementById('pantallaResultado').innerHTML = value;
    document.getElementById('pantalla').innerHTML = "";
}

const calcularLogaritmo = () => {
    const valueS = document.getElementById('pantalla').innerText;
    
    const valueB = Math.log(valueS);
    const value = valueB.toFixed(2);
    document.getElementById('pantallaResultado').innerHTML = value;
    document.getElementById('pantalla').innerHTML = "";
}

const calcularRaiz = () => {
    const valueS = document.getElementById('pantalla').innerText;
    
    const valueB = Math.sqrt(valueS);
    const value = valueB.toFixed(1);
    document.getElementById('pantallaResultado').innerHTML = value;
    document.getElementById('pantalla').innerHTML = "";
    
}

const calculo = () => {
    let esc = eval(document.getElementById('pantalla').innerHTML);
    document.getElementById('pantallaResultado').innerText = esc;

    document.getElementById('pantalla').innerHTML = "";

    resAnterior.push(esc);
}

const limpiarPantallas = () => {
    document.getElementById('pantalla').innerHTML = "";
    document.getElementById('pantallaResultado').innerHTML = "";
}

const del = () => {
    const newText = document.getElementById('pantalla').innerHTML;
    document.getElementById('pantalla').innerText = newText.substring(0, newText.length - 1);
}


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
const seno = document.getElementById("seno");
const coseno = document.getElementById("coseno");
const borraUltimo = document.getElementById("borraUltimo");
const ln = document.getElementById("logaritmo");
const raiz = document.getElementById("raiz");
const tangente = document.getElementById("tangente");
const dividir = document.getElementById("dividir");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("tecRestar");
const igual = document.getElementById("igual");
const ultimoR = document.getElementById("anterior");
const multiplicar = document.getElementById("multiplicar");
const coma = document.getElementById("coma");

uno.addEventListener("click", function () { 
    mostrarEnPantalla(1);
})

dos.addEventListener("click", function () { 
    mostrarEnPantalla(2);
})

tres.addEventListener("click", function () { 
    mostrarEnPantalla(3);
})

cuatro.addEventListener("click", function () { 
    mostrarEnPantalla(4);
})

cinco.addEventListener("click", function () { 
    mostrarEnPantalla(5);
})

seis.addEventListener("click", function () { 
    mostrarEnPantalla(6);
})

siete.addEventListener("click", function () { 
    mostrarEnPantalla(7);
})

ocho.addEventListener("click", function () { 
    mostrarEnPantalla(8);
})

nueve.addEventListener("click", function () { 
    mostrarEnPantalla(9);
})

cero.addEventListener("click", function () { 
    mostrarEnPantalla(0);
})

borrar.addEventListener("click", function() {
    limpiarPantallas();
});

borraUltimo.addEventListener("click", function () {
    del();
})

dividir.addEventListener("click", function () { 
    mostrarEnPantalla("/");
});

sumar.addEventListener("click", function () { 
    mostrarEnPantalla('+');
});

restar.addEventListener("click", function () { 
    mostrarEnPantalla("-");
})
multiplicar.addEventListener("click", function () { 
    mostrarEnPantalla('*');
})
coma.addEventListener("click", function () { 
    mostrarEnPantalla(".");
})

igual.addEventListener("click", function () {
    calculo();
})

ultimoR.addEventListener("click", function () { 
    const value = resAnterior[resAnterior.length - 1];
    console.log(value);
    
    mostrarEnPantalla(value);
});