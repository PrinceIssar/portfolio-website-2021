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
            description: 'Create website layout/user interface by using standard HTML/CSS practices',
            icon: <DesignServicesIcon/>,

        },
        {
            title: 'Web Designing',
            description: 'Develop and maintain consistent branding',
            icon: <AirIcon/>,

        },
        {
            title: 'Mobile Apps',
            description: 'Developing new features and user interfaces from wireframe models',
            icon: <AirIcon/>,

        },
        {
            title: 'Marketing',
            description: 'Produce design assets for use in social media and marketing channels',
            icon: <AcUnitIcon/>,

        },
    ]
    return (
        <Box className={classes.section} id='About'>
            <ScrollAnimation animateIn='fadeIn'>
            <Container>
           <Grid container spacing={1}>
               <Grid item  md={5} sm={5} >
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
                       description: "I'm responsible for the coding, innovative design and layout of a website."
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
