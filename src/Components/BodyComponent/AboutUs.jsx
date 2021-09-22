import {Box, Container, Grid, Hidden} from "@material-ui/core";
import React from 'react';
import {useStyles} from "./BodyStyles";
import image from "../../images/aboutme.jpeg";
import {CardMedia, RenderSectionHeading} from "../common/commonComponent";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AirIcon from '@mui/icons-material/Air';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
    const classes = useStyles();
    const cardMediaData = [
        {
            title: 'Web Development',
            description: 'bla bla bla.......',
            icon: <DesignServicesIcon/>,

        },
        {
            title: 'Web Designing',
            description: 'bla bla bla.......',
            icon: <AirIcon/>,

        },
        {
            title: 'Mobile Apps',
            description: 'bla bla bla.......',
            icon: <AirIcon/>,

        },
        {
            title: 'Marketing',
            description: 'bla bla bla.......',
            icon: <AcUnitIcon/>,

        },
    ]
    return (
        <Box className={classes.section} id='About'>
            <ScrollAnimation animateIn='fadeIn'>
            <Container>
           <Grid container spacing={1}>
               <Grid item  sm={5} >
                   <Box component={Hidden} xsDown>
                       <img
                           src={image}
                           alt="about us"
                           className={classes.responsiveImg}/>
                   </Box>
               </Grid>
               <Grid item xs={12} sm={7}>
                   {RenderSectionHeading({
                       smallText: "About Me",
                       heading: "Hello, I'm Prince Issar",
                       description: "BeCode enabled me to code"
                   })}
                   <br/>

                   <Grid container>

                       {cardMediaData.map((item, i) => (
                           <Grid item xs={12} sm={6} key={i}>
                               {CardMedia({
                                   label: item.title,
                                   Description: item.description,
                                   Icon: item.icon,
                               })}
                           </Grid>
                       ))}
                   </Grid>
               </Grid>
           </Grid>
            </Container>
            </ScrollAnimation>
        </Box>
    );
}
