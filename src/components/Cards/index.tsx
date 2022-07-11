// import {useState, useEffect} from 'react';
// import { Card, CardContent, CardActions,Grid } from "@mui/material";

// import { getInfo } from '../../services/firebase';


// import './index.css'



// const OutputCard = () => {

//     const [info, setInfo] = useState<any>([]);

//     const fetchFirebase = async () => {
//         const infoPortafolio = await getInfo();
//         setInfo(infoPortafolio);
//     }

//     useEffect(() => {
//         fetchFirebase();
//     })

//     return (
//         <>
//         {info.length > 0 && 
//             info.map((item: any) => (
//                 item.tecn.forEach((t:any,index:number)=>(
//                     <Card key={index}  variant="outlined" style={{ border: 'none' }}>
//                         <Grid className='card-container'>
//                             <CardContent className='card-content' style={{backgroundColor:'#2c2d32'}}>
//                                 <img src={t.img} alt="logohtml5" className='logo' />
//                                 <h4>{t.tec}</h4>
//                             </CardContent>
//                         </Grid>
//                     </Card>
//                 ))
//         ))}
//         </>
//     );
// };

// export default OutputCard;



