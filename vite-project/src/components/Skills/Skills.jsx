import './Skill.css'
import { Card } from './Card/Card';
import sk1 from './img/html-ico.ico'
import sk2 from './img/css-ico.ico'
import sk3 from './img/react-ico.ico'
import sk4 from './img/js-ico.ico'
import sk5 from './img/python-ico.ico'
import sk6 from './img/mysql-ico.ico'
import sk7 from './img/photoshop-ico.ico'
import sk8 from './img/illustrator-ico.ico'

function Skills (){
    
    let sk =[

        { 
            "img" : sk1,
            "descripcion" : "HTML"
        },
        { 
            "img" : sk2,
            "descripcion" : "CSS"
        }, 
        { 
            "img" : sk3,
            "descripcion" : "React"
        }, 
        { 
            "img" : sk4,
            "descripcion" : "JS"
        }, 
        { 
            "img" : sk5,
            "descripcion" : "Python"
        }, 
        { 
            "img" : sk6,
            "descripcion" : "My-sql"
        }, 
        { 
            "img" : sk7,
            "descripcion" : "Photoshop"
        }, 
        { 
            "img" : sk8,
            "descripcion" : "Illustrator"
        }  

    ]

    
    return(
        <div className='contenedor-skills'>
            <h2 className='titulo-skills'>SKILLS</h2>
            <div className='contenedor-sks'>
                
                {sk.map(elemento=><Card img={elemento.img}  descripcion={elemento.descripcion} />) }

            </div>
        
        </div>
    )
}

export default Skills