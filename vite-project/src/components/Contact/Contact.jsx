import './Contact.css'
import i1 from './img/telefono.png'
import i2 from './img/email.png'
import i3 from './img/ubicacion.png'

function Contacto (){

    return(
        <div className='seccion-contacto'>
            <a className="anchor" id="contacto"></a>
            <h2 className='tit-contacto'>CONTACTO</h2>
            <div className='contenedor-contacto'>
                <div className="info-personal">
                    <h2 className="info-tit1">Dejame un mensaje</h2>
                    <p className="info-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi quasi similique adipisci aperiam possimus quaerat repellat quidem dolores iusto blanditiis nemo corrupti placeat neque facilis architecto, vel, numquam mollitia?</p>
                    <div className="telefono">   
                        <div className="icoc1"><img className="imgtel" src={i1} alt=""/></div>
                        <p className="numerotel">3512479217</p>
                    </div>
                    <div className="email">
                        <div className="ico2"><img className="imgemail" src={i2} alt=""/></div>    
                        <p className="diremail">ricardofedericovega@gmail.com</p>
                    </div>
                    <div className="ubicacion">
                        <div className="ico3"><img className="imgubicacion" src={i3} alt=""/></div>
                        <p className="ubi">Córdoba Capital - Argentina</p>
                    </div>
                </div>

                <div className="formulario">
                    <form className="interiorform" action="">
                        <input className="icasillero" type="text" placeholder="Nombre Completo*"/>
                        <input className="icasillero" type="number" placeholder="Número de teléfono"/>
                        <input className="icasillero" type="email" placeholder="Email*"/>
                        <input className="icasillero" type="text" placeholder="Servicios que necesitas?"/>
                    </form>
                    <a className="botonformulario" href="">Enviar</a>
                </div>
            </div>

        </div>
    )

}

export default Contacto