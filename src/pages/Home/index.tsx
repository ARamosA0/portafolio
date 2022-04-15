import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Grid} from "@mui/material"

import './index.css'

//Inconos
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Home = () => {


    
    return( 
        <>  
            <nav className='navabar-principal'>
                <div className='navbar'>                
                    <h1 className='navbar-logo'>AR</h1>
                    <div className='navbar-lista-div'>
                        <ul className='navbar-lista-ul'>
                            <Link to= {`/`}>
                                <li className='navbar-lista-li'>Home</li>
                            </Link>
                            <Link to= {`/`}>
                                <li className='navbar-lista-li'>Portafolio</li>
                            </Link>
                            <Link to= {`/`}>
                                <li className='navbar-lista-li'>Proyectos</li>
                            </Link>
                            <Link to= {`/`}>
                                <li className='navbar-lista-li'>Contacto</li>
                            </Link>
                            <div className='navbar-icons'>
                                <span>|</span>
                                <Link to={'/'}>
        
                                    <GitHubIcon className='navbar-icon-icon'/>
                                </Link>
                                <Link to={'/'}>
                                    <LinkedInIcon className='navbar-icon-icon'/>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className=''>

                </div>
            </nav>
            <section className='section-portafolio'>
                <div>
                    <h6>Tecnologias</h6>
                    <h3>Que Tecnologias Domino?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, et nesciunt unde, nulla soluta eum, neque voluptatem fuga pariatur modi hic repudiandae cum. Similique debitis officia molestias voluptates sapiente nam?
                    </p>
                </div>
            </section>
        </> 
    )   
}

export default Home;