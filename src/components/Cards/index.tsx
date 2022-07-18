import {useState, useEffect} from 'react';
import { Card, CardContent, CardMedia,CardActions,Grid,Typography,Modal,Backdrop, Fade } from "@mui/material";

import { getInfo } from '../../services/firebase';

import sitioweb from '../../assets/sitioweb.png';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import './index.css'


export const OutputCard = () => {
    const [info, setInfo] = useState<any>([]);
    const [openLenguaje, setOpenLenguaje] = useState(false);
    const [openFramework, setOpenFramework] = useState(false);
    const [openData, setOpenData] = useState(false);


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#323335',
        pt: 2,
        px: 4,
        pb: 3,
      };

    const fetchFirebase = async () => {
        const infoPortafolio = await getInfo();
        setInfo(infoPortafolio);
    }
    const handleOpenLenguaje = () => {
        setOpenLenguaje(true);
    };
    const handleCloseLenguaje = () => {
      setOpenLenguaje(false);
    };

    const handleOpenFramework = () => {
        setOpenFramework(true);
    };
    const handleCloseFramework = () => {
      setOpenFramework(false);
    };

    const handleOpenData = () => {
        setOpenData(true);
    };
    const handleCloseData = () => {
      setOpenData(false);
    };
    useEffect(() => {
        fetchFirebase();
    })
    

    
    return (
        <>
            <Grid container spacing={5} className='card-container-principal'>
                <Grid item md={3} sm={1}>
                    <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                        <CardActions id="lenguajes" className='card-container' style={{backgroundColor:'#2c2d32'}} onClick={handleOpenLenguaje}>
                            <CardMedia
                                style={{backgroundColor:'#2c2d32'}}
                                component="img"
                                height="250"
                                image={sitioweb}
                                alt="logo"
                                sx={{objectFit:"contain", height:200, display:"flex", justifyContent:"center", alignItems:"center"}}>
                            </CardMedia>
                            <Typography variant="h5" color="#fff" sx={{fontWeight:700}}>
                                LANAGUAGE
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={3} sm={1}>
                    <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                        <CardActions id="frameworks" className='card-container' style={{backgroundColor:'#2c2d32'}} onClick={handleOpenFramework}>
                            <CardMedia
                                style={{backgroundColor:'#2c2d32'}}
                                component="img"
                                height="250"
                                image={sitioweb}
                                alt="logo"
                                sx={{objectFit:"contain", height:200, display:"flex", justifyContent:"center", alignItems:"center"}}>
                            </CardMedia>
                            <Typography variant="h5" color="#fff" sx={{fontWeight:700}}>
                                FRAMEWORKS
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={3} sm={1}>
                    <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                        <CardActions id="baseDatos" className='card-container' style={{backgroundColor:'#2c2d32'}} onClick={handleOpenData}>
                            <CardMedia
                                style={{backgroundColor:'#2c2d32'}}
                                component="img"
                                height="250"
                                image={sitioweb}
                                alt="logo"
                                sx={{objectFit:"contain", height:200, display:"flex", justifyContent:"center", alignItems:"center"}}>
                            </CardMedia>
                            <Typography variant="h5" color="#fff" sx={{fontWeight:700}}>
                                DATABASES
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            
            <Modal
            open={openLenguaje}
            onClose={handleCloseLenguaje}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}>
                <Fade in={openLenguaje}>
                    <ImageList sx={{ ...style, width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {info.length > 0 && 
                    info[0].lenguajes.map((item:any) => (
                        <ImageListItem key={item.id}>
                            <img src={item.img} alt={item.nombre} loading="lazy" srcSet={item.img} />
                        </ImageListItem>
                    ))}
                    </ImageList>
                </Fade>
            </Modal>

            <Modal
            open={openFramework}
            onClose={handleCloseFramework}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}>
                <Fade in={openFramework}>
                    <ImageList sx={{ ...style, width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {info.length > 0 && 
                    info[0].frameworks.map((item:any) => (
                        <ImageListItem key={item.id}>
                            <img src={item.img} alt={item.nombre} loading="lazy" srcSet={item.img} />
                        </ImageListItem>
                    ))}
                    </ImageList>
                </Fade>
            </Modal>

            <Modal
            open={openData}
            onClose={handleCloseData}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}>
                <Fade in={openData}>
                    <ImageList sx={{ ...style, width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {info.length > 0 && 
                    info[0].baseDatos.map((item:any) => (
                        <ImageListItem key={item.id}>
                            <img src={item.img} alt={item.nombre} loading="lazy" srcSet={item.img} />
                        </ImageListItem>
                    ))}
                    </ImageList>
                </Fade>
            </Modal>
        </>
    );
};


