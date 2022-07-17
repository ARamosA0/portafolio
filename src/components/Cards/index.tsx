import {useState, useEffect} from 'react';
import { Card, CardContent, CardMedia,CardActions,Grid,Typography } from "@mui/material";

import { getInfo } from '../../services/firebase';

import sitioweb from '../../assets/sitioweb.png';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import './index.css'


export const OutputCard = () => {
    return (
        <Grid container spacing={5} className='card-container-principal'>
            <Grid item xs={3}>
                <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                    <CardActions className='card-container' style={{backgroundColor:'#2c2d32'}}>
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
            <Grid item xs={3}>
                <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                    <CardActions className='card-container' style={{backgroundColor:'#2c2d32'}}>
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
            <Grid item xs={3}>
                <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                    <CardActions className='card-container' style={{backgroundColor:'#2c2d32'}}>
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
    );
};


export const OutputCardLenguaje = () => {
    const [info, setInfo] = useState<any>([]);
    const fetchFirebase = async () => {
        const infoPortafolio = await getInfo();
        setInfo(infoPortafolio);
    }
    // console.log(info);
    useEffect(() => {
        fetchFirebase();
    })
    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {info.length > 0 && 
        info[0].lenguajes.map((item:any) => (
            <ImageListItem key={item.id}>
            </ImageListItem>
        ))}
        </ImageList>
    );
};

export const OutputCardFrameworks = () => {
    const [info, setInfo] = useState<any>([]);
    const fetchFirebase = async () => {
        const infoPortafolio = await getInfo();
        setInfo(infoPortafolio);
    }
    useEffect(() => {
        fetchFirebase();
    })
    return (
        <Grid container spacing={2}>
        {info.length > 0 && 
            info[0].tecn.map((item:any,index:number) => (
                    <Grid key={index} item xs={3}>
                        <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="100"
                                // image={item.img}
                                alt="logo">
                            </CardMedia>
                                <CardContent className='card-container' style={{backgroundColor:'#2c2d32'}}>
                                    <Typography variant="h5" color="#fff">
                                    {item.tec}
                                    </Typography>
                                </CardContent>
                        </Card>
                    </Grid>
        ))}
        </Grid>
    );
}

export const OutputCardDataBase = () => {
    const [info, setInfo] = useState<any>([]);
    const fetchFirebase = async () => {
        const infoPortafolio = await getInfo();
        setInfo(infoPortafolio);
    }
    useEffect(() => {
        fetchFirebase();
    })
    return (
        <Grid container spacing={2}>
        {info.length > 0 && 
            info[0].tecn.map((item:any,index:number) => (
                    <Grid key={index} item xs={3}>
                        <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="100"
                                // image={item.img}
                                alt="logo">
                            </CardMedia>
                                <CardContent className='card-container' style={{backgroundColor:'#2c2d32'}}>
                                    <Typography variant="h5" color="#fff">
                                    {item.tec}
                                    </Typography>
                                </CardContent>
                        </Card>
                    </Grid>
        ))}
        </Grid>
    );
}





