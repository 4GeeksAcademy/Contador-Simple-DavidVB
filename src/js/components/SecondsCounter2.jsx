//importar react
import React from 'react'

//Declarar la función donde se activa la propiedad props
const SecondsCounter2 = (props) => {

    //Declaro variables
    let segundos = props.seconds;
    let x = String(props.seconds).length;

    //Declara la variable para cambiar la longitud a x ceros dependiendo de la longitud del numero dado
    const formatoTiempo = (num) => {return num.toString().padStart(x, '0')};

    //funcion para activar el contador
    function inicio2(num) {
        let contador = num;

        const intervalo = setInterval(() => {
            console.log("Contador 2: "+contador);

            if(contador === 0) {
                clearInterval(intervalo);
                console.log("Cuenta 2: finalizada");
                return;
            } else {
                contador--;
                document.querySelector('#cuenta2').innerHTML = formatoTiempo(contador);
            }
        }, 1000)
    }

    //Llamamos a la función
    inicio2(segundos);
    

    //Devuelve el contenido del contador
    return (
        <div className='col-12 col-md-6 col-lg-3'>
            <h1>Contador regresivo</h1>
            <p>Segundos declarados: {props.seconds} </p>
            <p>Contando:  
                <i className="fa-regular fa-clock"></i>  
                <span id="cuenta2">{ formatoTiempo(segundos) }</span>
            </p>
        </div>
    );
}

//Exportamos componente
export default SecondsCounter2;