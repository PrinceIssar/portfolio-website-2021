import {Box, Button, Container, Grid} from "@material-ui/core";
import React, {useState} from 'react';
import {useStyles} from "./BodyStyles";
import image from "../../images/prince.png";
import {RenderSectionHeading} from "../common/commonComponent";
import {RenderInputText} from "../common/FormComponent";
import ScrollAnimation from "react-animate-on-scroll";


export default function Contact() {
    const classes = useStyles();
    const [state,setstate] = useState({
        data:{
            firstname: "",
            email: "",
            messages: "",
        },
        errors:{}
    });

    const handleOnChange = ({target}) => {

        const {data, errors} = state;

        //setting errors
        target.value.length <= 3
            ? (errors[target.name] = `${target.name} at least needs 3 letters`)
            : (errors[target.name] = "");

        data[target.name] = target.value;
        setstate({data,errors });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted," , state.data);
        //api call to post data
    }

    return (
        <Box className={classes.section} id='Contact'>
            <ScrollAnimation animateIn='fadeIn'>
            <Container maxWidth="xl">
                <Grid container justifyContent='center' spacing={1}>
                    <Grid item  sm={5} >
                        <Box  xsDown >
                            <img
                                src={image}
                                alt="about us"
                                className={classes.responsiveImg +' '+ classes.responsivePrinceImg}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        {RenderSectionHeading({
                            smallText: "Contact Me",
                            heading: "Got a question...? Looking for help with...?",
                            description: "Here's how to reach me."
                        })}
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center">
                                <Grid item xs={12} sm={10} style={{marginBottom: "16px"}}>
                                    {RenderInputText({
                                        label: "Name",
                                        name: 'firstname',
                                        state: state,
                                        onChange: handleOnChange,
                                    })}
                                </Grid>
                                <Grid item xs={12} sm={10} style={{marginBottom: "16px"}}>
                                    {RenderInputText({
                                        label: "Email",
                                        name: 'email',
                                        state: state,
                                        onChange: handleOnChange,
                                    })}
                                </Grid>
                                <Grid item xs={12} sm={10} style={{marginBottom: "16px"}}>
                                    {RenderInputText({
                                        label: "Messages",
                                        name: 'messages',
                                        state: state,
                                        onChange: handleOnChange,
                                        multiline:true,
                                        rows: 6,
                                    })}
                                </Grid>
                                <Grid item xs={12} sm={8} style={{marginBottom: "16px"}}>
                                    <Button variant="outlined" type="submit" fullWidth={true} className={classes.submitBtn}>
                                        Submit
                                    </Button>
                                </Grid>
                        </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            </ScrollAnimation>
        </Box>
    );
}
