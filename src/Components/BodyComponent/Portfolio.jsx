import React from 'react'
import {useStyles} from "./BodyStyles";
import {RenderSectionHeading} from "../common/commonComponent";
import {Box, Button, Container, Grid, Typography} from "@material-ui/core";
import image1 from "../../images/ReactReceipeApi.png";
import image2 from "../../images/ReactCovidTracker.png";
import image3 from "../../images/ReactToDoList.png";
import image4 from "../../images/ReactTicTacToe.png";
import image5 from "../../images/SocketChatRoom.png";
import image6 from "../../images/htmlCssJSCorona.png";
import image7 from "../../images/RPSLS_game.png";
import image8 from "../../images/htmlCssJSWeather.png";
import ScrollAnimation from "react-animate-on-scroll";



export default function Portfolio() {
 const classes = useStyles();

 const portfolioData = [
     {url: image1, title: "# Portfolio ",link:""},
     {url: image2, title: "# Portfolio ",link:""},
     {url: image3, title: "# Portfolio ",link:""},
     {url: image4, title: "# Portfolio ",link:""},
     {url: image5, title: "# Portfolio ",link:""},
     {url: image6, title: "# Portfolio ",link:""},
     {url: image7, title: "# Portfolio ",link:""},
     {url: image8, title: "# Portfolio ",link:""},
 ];
    return (
        <Box className={classes.sectionDark} id="Portfolio">
            <ScrollAnimation animateIn='fadeIn'>

            <Grid container style={{
                display:'flex',
                justifyContent:"center",
                alignContent:"center",
            }}>
                <Grid item xs={12} sm={8}>
                    {RenderSectionHeading({
                      smallText:"Portfolio",
                      heading:"Let's see my work",
                      alignCenter:true,
                    })}
                </Grid>
            </Grid>
            {/*img section*/}
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    {portfolioData.map((item, i) => (
                        <Grid item sm={2} xs={6} sm={4} lg={3} key={i}>
                            <Box className={classes.imageContainer}>
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className={classes.responsivePortImg}/>
                                <Box className={classes.imageOverlay}>
                                    <Typography className={classes.overlayTitle}>
                                        {item.title}
                                    </Typography>
                                    <Button variant={"contained"}>Visit</Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Container>
            </ScrollAnimation>
        </Box>

);
}
