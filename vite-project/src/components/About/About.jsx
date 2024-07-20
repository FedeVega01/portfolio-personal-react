import "./About.css";


function About(){
    return(
       
        <div id="about">
            <div id="conteiner-foto">
               <div id="foto-completa">
                    <div id="decorado"></div>
                    <div id="foto"></div>
               </div>
            </div>
            <div id="texto">
                <h2 id="text-1">ACERCA DE MÍ</h2>
                <p id="text-2">Diseñador UIUX | Centro XYZ de soluciones de TI.
                Con más de 2 años en UI/UX, me especializo en la creación de interfaces cautivadoras e intuitivas que impulsan el crecimiento empresarial. Mi experiencia abarca múltiples industrias como SaaS, NFT, comercio electrónico, atención médica, etc. </p>
                <div id="parrafo">
                    <p>Aspectos destacados de la experiencia:
                colaborando estrechamente con los clientes para obtener soluciones de vanguardia.
                Solucionador de problemas orientado a los detalles, dominando herramientas para lograr un aspecto visualmente impresionante en
                diseños y prototipos.
                Estoy actualizado con las últimas tendencias, comprometido a brindar experiencias de usuario excepcionales.
                Prospere en entornos de ritmo rápido, sobresaliendo en comunicación y colaboración multifuncional.</p>
                </div>
                
                <button type="button" class="btn-about-1 btn-primary">Contratame</button>
                <button type="button" class="btn-about-2 btn-primary">Reanudar</button>
                
            </div>
        </div>
    )
}

export default About;