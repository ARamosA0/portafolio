import {useState, useEffect} from 'react';
import { Card, CardContent, CardMedia,CardActions,Grid,Typography } from "@mui/material";

import { getInfo } from '../../services/firebase';

import sitioweb from '../../assets/sitioweb.png';

import './index.css'


export const OutputCard = () => {
    return (
        <Grid container spacing={2} className='card-container-principal'>
            <Grid item xs={3}>
                <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={sitioweb}
                        alt="logo"
                        sx={{width:200, height:200, display:"flex", justifyContent:"center", alignItems:"center"}}>
                    </CardMedia>
                        <CardActions className='card-container' style={{backgroundColor:'#2c2d32'}}>
                            <Typography variant="h5" color="#fff" sx={{fontWeight:700}}>
                                LANAGUAGE
                            </Typography>
                        </CardActions>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={sitioweb}
                        alt="logo"
                        sx={{width:200, height:200, display:"flex", justifyContent:"center", alignItems:"center"}}>
                    </CardMedia>
                        <CardActions className='card-container' style={{backgroundColor:'#2c2d32'}}>
                            <Typography variant="h5" color="#fff" sx={{fontWeight:700}}>
                                FRAMEWORKS
                            </Typography>
                        </CardActions>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card variant="outlined" style={{ border: 'none' }} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={sitioweb}
                        alt="logo"
                        sx={{width:200, height:200, display:"flex", justifyContent:"center", alignItems:"center"}}>
                    </CardMedia>
                        <CardActions className='card-container' style={{backgroundColor:'#2c2d32'}}>
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





