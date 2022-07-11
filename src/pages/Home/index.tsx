import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Divider, Card, CardContent } from "@mui/material";
import { getInfo } from '../../services/firebase';

import "./index.css";

//Inconos
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Buttons
import ColorButton from "../../components/ColorButtons";

// Card
// import OutputCard from "../../components/Cards"




const Home = () => {

  const [info, setInfo] = useState<any>([]);

  const fetchFirebase = async () => {
      const infoPortafolio = await getInfo();
      setInfo(infoPortafolio);
  }

  useEffect(() => {
    fetchFirebase();
  })
  return (
    <>
      <nav className="navabar-principal">
        <div className="navbar">
          <h1 className="navbar-logo">AR</h1>
          <div className="navbar-lista-div">
            <ul className="navbar-lista-ul">
              <Link to={`/`}>
                <li className="navbar-lista-li">Home</li>
              </Link>
              <Link to={`/`}>
                <li className="navbar-lista-li">Portafolio</li>
              </Link>
              <Link to={`/`}>
                <li className="navbar-lista-li">Proyectos</li>
              </Link>
              <Link to={`/`}>
                <li className="navbar-lista-li">Contacto</li>
              </Link>
              
                <span>|</span>
                {info.length > 0 && 
                info.map((item: any) => (
                <div className="navbar-icons">
                  <a href={item.github}>
                  <GitHubIcon className="navbar-icon-icon" />
                  </a>
                  <a href={item.linkedin}>
                  <LinkedInIcon className="navbar-icon-icon" />
                  </a>
                </div>
                ))}
              
            </ul>
          </div>
        </div>
      {info.length > 0 && 
      info.map((item: any) => (
        <div className="container-titulo-navbar">
        <Grid container spacing={3}>
          <Grid item xs={3} className="titulo-nombre">
            <div>
              <h2 style={{color:'#fff'}}>{item.nombre}</h2>
              <h2 style={{color:'#fff'}}>{item.apellidos}</h2>
            </div>
            <Divider />
            <ColorButton></ColorButton>
          </Grid>
          <Grid item xs={5} className="titulo-imagen">
            <img src="" alt="" />
            <Divider />
          </Grid>
          <Grid item xs={4} className="titulo-descripcion">
            <div>
              <h6 className="titulo-descripcion-titulo-tipo">INTRODUCCION</h6>
              <h1 style={{color:'#fff', marginTop:10}}>
                FULLSTACK DEVELOPER
              </h1>
              <p style={{color:'#fff', marginTop:10, width:400}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente minus, vel eligendi ipsam fuga maxime deserunt
                accusantium alias quia nostrum esse, expedita mollitia
                molestias provident itaque deleniti architecto delectus
                voluptate!
              </p>
            </div>
            <Divider />
          </Grid>
        </Grid>
      </div>
      ))}
      </nav>
      <section className="section-portafolio">
        <div className="section-portafolio-tecnologias" >
          <h6 className="titulo-descripcion-titulo-tipo" style={{marginTop:60}}>Tecnologias</h6>
          <h2 style={{color:'#fff', marginTop:20}}>Que Tecnologias Domino?</h2>
          <p style={{color:'#fff', width:700, textAlign:'center', marginTop:20}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, et
            nesciunt unde, nulla soluta eum, neque voluptatem fuga pariatur modi
            hic repudiandae cum. Similique debitis officia molestias voluptates
            sapiente nam?
          </p>
          <Grid container>
            <Grid item xs={3}>

              {/* <OutputCard></OutputCard> */}
            {info.length > 0 && 
            info.map((item: any,i:number) => (
                item.tecn.forEach((t:any,i:number)=>(
                  <Card key={i} variant="outlined" style={{ border: 'none' }}>
                      <Grid className='card-container'>
                          <CardContent className='card-content' style={{backgroundColor:'#2c2d32'}}>
                              <img src={t.img} alt="logo" className='logo' />
                              <h4>{t.tec}</h4>
                          </CardContent>
                      </Grid>
                  </Card>
                ))
            ))}
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Home;
