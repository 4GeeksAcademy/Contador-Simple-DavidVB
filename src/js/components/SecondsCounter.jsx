//importar React
import React from 'react'


//Declarar la función donde se activa la propiedad props
const SecondsCounter = (props) => {

    //Declaro variables para el contador
    let segundos = 0;

    //Declara la variable para cambiar la longitud a 4 ceros 
    const formatoTiempo = (num) => {return num.toString().padStart(4, '0')};

    //funcion para activar el contador
    function inicio() {
        
        const intervalo = setInterval(() => {
            if (segundos === props.seconds) {
                clearInterval(intervalo);
                console.log("Contador 1: Ya finalicé.");
                return;
            } else {
                segundos++;
                console.log("Contador 1: "+segundos);
                document.querySelector('#cuenta').innerHTML = formatoTiempo(segundos);
            }
        }, 1000);
        
    }

    //Llamamos a la función
    inicio();

    //Devuelve el contenido del contador
    return (
        <div className='col-12 col-md-6 col-lg-3 text-center'>
            <h1>Contador simple</h1>
            <p>Segundos declarados: {props.seconds} </p>
            <p>Contando:  
                <i className="fa-regular fa-clock"></i>  
                <span id="cuenta"> { formatoTiempo(segundos) } </span>
            </p>
        </div>
    );

}

//Exportamos componente
export default SecondsCounter;
