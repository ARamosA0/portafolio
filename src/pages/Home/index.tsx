import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Divider } from "@mui/material";
import { getInfo } from '../../services/firebase';

import "./index.css";

//Inconos
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Buttons
import ColorButton from "../../components/ColorButtons";

// Card
import {OutputCard,OutputCardLenguaje, OutputCardFrameworks, OutputCardDataBase} from "../../components/Cards"

// ImageList
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Home = () => {

  const [info, setInfo] = useState<any>([]);

  const fetchFirebase = async () => {
      const infoPortafolio = await getInfo();
      setInfo(infoPortafolio);
  }

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

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
        <div>
        <Grid container spacing={3} className="container-titulo-navbar">
          <Grid item xs={3} className="titulo-nombre">
            <div>
              <h1 style={{color:'#fff', fontSize:40}}>{item.nombre}</h1>
              <h1 style={{color:'#fff', fontSize:40}}>{item.apellidos}</h1>
            </div>
            <Divider />
            <ColorButton></ColorButton>
          </Grid>
          <Grid item xs={5} className="titulo-imagen">
            <img src="https://www.tokioschool.com/wp-content/uploads/2021/03/desarrollador-full-stack-1.jpg" alt="" />
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
          <h4 className="titulo-descripcion-titulo-tipo" style={{marginTop:60}}>TECNOLOGIAS</h4>
          <h2 style={{color:'#fff', marginTop:20}}>Que Tecnologias Domino?</h2>
          <p style={{color:'#fff', width:700, textAlign:'center', marginTop:20, marginBottom:20}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, et
            nesciunt unde, nulla soluta eum, neque voluptatem fuga pariatur modi
            hic repudiandae cum. Similique debitis officia molestias voluptates
            sapiente nam?
          </p>
          <OutputCard></OutputCard>
        </div>
      </section>
      <section className="section-proyectos">
        <div className="section-proyectos-container">
          <div className="section-proyectos-titulo"> 
            <h4 className="titulo-descripcion-titulo-tipo" style={{marginTop:60}}>PROYECTOS</h4>
          </div>
          <div>
            <p style={{color:'#fff', width:700, textAlign:'center', marginTop:20, marginBottom:20}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, et
              nesciunt unde, nulla soluta eum, neque voluptatem fuga pariatur modi
              hic repudiandae cum. Similique debitis officia molestias voluptates
              sapiente nam?
            </p>
          </div>
          <div className="section-proyectos-proyectos">
            <Grid container>

            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>

            </Grid>
          </div> 
        </div>       
      </section>
      <section className="section-contact-main">
        <div className="section-contact-container">
          <div className="section-contact-title">
            <h4 className="titulo-descripcion-titulo-tipo" style={{marginTop:60}}>TECNOLOGIAS</h4>
          </div>
          <div>
            <p style={{color:'#fff', width:700, textAlign:'center', marginTop:20, marginBottom:20}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, et
              nesciunt unde, nulla soluta eum, neque voluptatem fuga pariatur modi
              hic repudiandae cum. Similique debitis officia molestias voluptates
              sapiente nam?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
