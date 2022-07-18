import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Divider } from "@mui/material";
import { getInfo } from '../../services/firebase';

import "./index.css";

//Inconos
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


// Buttons
import ColorButton from "../../components/ColorButtons";

// Card
import {OutputCard} from "../../components/Cards"

// ImageList
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Style
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Home = () => {

  const [info, setInfo] = useState<any>([]);

  const fetchFirebase = async () => {
      const infoPortafolio = await getInfo();
      setInfo(infoPortafolio);
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#45464b',
    width:200,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
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
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
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
      rows: 2,
      cols: 2,
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
      cols: 2,
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
              <a href={`#info`}>
                <li className="navbar-lista-li">Home</li>
              </a>
              <a href={`#tecnologias`}>
                <li className="navbar-lista-li">Tecnologias</li>
              </a>
              <a href={`#proyectos`}>
                <li className="navbar-lista-li">Proyectos</li>
              </a>
              <a href={`#contacto`}>
                <li className="navbar-lista-li">Contacto</li>
              </a>
              
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
        <div id="info">
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
      <section id="tecnologias" className="section-portafolio">
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
          {/* <OutputCardLenguaje></OutputCardLenguaje> */}
        </div>
      </section>
      <section id="proyectos" className="section-proyectos">
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
              <ImageList
                sx={{ width: 500, height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                      {...srcset(item.img, 121, item.rows, item.cols)}
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
      <section id="contacto" className="section-contact-main">
        <div className="section-contact-container">
          <div className="section-contact-title">
            <h4 className="titulo-descripcion-titulo-tipo" style={{marginTop:60}}>CONTACTO</h4>
          </div>
          <div>
            <p style={{color:'#fff', width:700, textAlign:'center', marginTop:20, marginBottom:20}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, et nesciunt unde, nulla soluta eum, neque voluptatem fuga pariatur modihic repudiandae cum. Similique debitis officia molestias voluptates sapiente nam?
            </p>
          </div>
          <div>
          {info.length > 0 && 
          info.map((item: any) => (
            <Grid container spacing={2} sx={{display:"flex", alignContent:"center", justifyItems:"center"}}>
                <Grid item md={4} sm={12}>
                  <Item><EmailIcon style={{marginRight:12}}/> {item.email} </Item>
                </Grid>
                <Grid item md={4} sm={12}>
                <Item><WhatsAppIcon style={{marginRight:12}}/> {item.numero} </Item>
                </Grid>
                <Grid item md={4} sm={12}>
                <Item><LinkedInIcon style={{marginRight:12}}/> Linkedin </Item>
                </Grid>
            </Grid>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
