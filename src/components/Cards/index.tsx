import * as React from 'react';
import { Card, CardContent, CardActions,Grid } from "@mui/material";

import logohtml from '../../assets/html5.png'

import './index.css'


const card = (
    <React.Fragment>
        <Grid className='card-container'>
            <CardContent className='card-content' style={{backgroundColor:'#2c2d32'}}>
                <img src={logohtml} alt="logohtml5" className='logo' />
                <h4>Web Developer</h4>
            </CardContent>

        </Grid>
    </React.Fragment>
);

const OutputCard = () => {
    return (
        <Card variant="outlined" style={{ border: 'none' }}>{card}</Card>
    );
};

export default OutputCard;



