import React from 'react'

//Declaramos la funcion
const SecondsCounter3 = () => {

    //Declaramos variables
    let segundos = 0;
    let intervalo;

    //funcion para formatear el numero a minutos y segundos
    const formatoMinutos = (num) => {
        const minutos = Math.floor((num % 3600) / 60);
        const segundos = num % 60;

        //Anadimos ceros a la izquierda
        const minutosStr = minutos.toString().padStart(2, '0');
        const segundosStr = segundos.toString().padStart(2, '0');

        return minutosStr + " : " + segundosStr;
    }

    //funcion de inicio
    function inicio() {
        console.log("Activando contador 3: ");
        //Solo inicia si no hay un intervalo activo
        if (!intervalo) {
            intervalo = setInterval(() => {
                segundos++;
                console.log("Contador 3: "+segundos);
                document.querySelector("#cuenta3").innerHTML = formatoMinutos(segundos);
            }, 1000);
        }
    }

    //funcion de pausa
    function pausa() {
        clearInterval(intervalo);
        console.log("Se paró el contador.");
    }

    //funcion de reinicio
    function reinicio() {
        pausa();
        segundos = 0;
        console.log("Reiniciando contador: "+segundos);
        document.querySelector("#cuenta3").innerHTML = formatoMinutos(segundos);
    }

    return (
        <div className='col-12 col-md-6 col-lg-3 text-center'>
            <h1>Contador con botones</h1>
            <p>
                <i class="fa-solid fa-clock"></i> 
                <span id="cuenta3">{ formatoMinutos(segundos) }</span>
            </p>
            <div className="botones">
                <button onClick={inicio}>Iniciar</button>
                <button onClick={pausa}>Pausar</button>
                <button onClick={reinicio}>Reinicio</button>
            </div>
        </div>
    );
}

//exportamos la funcion
export default SecondsCounter3;