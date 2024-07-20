import './Services.css'
import { Card } from './Card/Card';
import servIco1 from './img/serv1-ico.ico'
import servIco2 from './img/serv2-ico.ico'
import servIco3 from './img/serv3-ico.ico'
import servIco4 from './img/serv4-ico.ico'
import servIco5 from './img/serv5-ico.ico'
import servIco6 from './img/serv6-ico.ico'

function Servicios() {
  
    let productos = [
        { 
          "img" : servIco1,
          "title" : "Diseño Web",
          "descripcion" : "Unico diseño web soluciones creadas con amor y acordadas a nuevas tecnologias."
        }, 
        { 
          "img" : servIco2,
          "title" : "Desarrollo Web",
          "descripcion" : "Dedico toda mi atención a escribir cada línea de código, lo que es prueba de una metodología bien definida y un razonamiento impecable."
        }, 
        { 
          "img" : servIco3,
          "title" : "Mantenimiento del sitio web",
          "descripcion" : "Entendemos la importancia de tener un sitio web bien mantenido y actualizado para garantizar una experiencia en línea perfecta para sus visitantes."
        }, 
        { 
          "img" : servIco4,
          "title" : "SEO",
          "descripcion" : "Puedo ayudarte a desarrollar autoridad y visibilidad de marca. Estás a sólo un clic de llegar al público objetivo."
        }, 
        { 
          "img" : servIco5,
          "title" : "Diseño UI/UX",
          "descripcion" : "Transforme su visión digital en realidad con nuestros servicios expertos de diseño UI/UX. Creamos interfaces fluidas y fáciles de usar que dejan una impresión duradera."
        }, 
        { 
          "img" : servIco6,
          "title" : "Sistema de gestión de contenidos",
          "descripcion" : "El CMS adecuado hará que su sitio web sea fácil de administrar y actualizar."
        }
      ]
    



    return (
        <div className='contenedor-servicio'>
            <a className="anchor" id="servicios"></a>
            <h2 className='titulo'>SERVICIOS</h2>
            <div className='contenedor'>
                
                {productos.map(elemento=><Card img={elemento.img} title={elemento.title}  descripcion={elemento.descripcion} />) }

            </div>
        </div>  
    )
  }
  
  export default Servicios