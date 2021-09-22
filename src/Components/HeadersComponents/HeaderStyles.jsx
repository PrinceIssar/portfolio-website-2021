import {makeStyles} from "@material-ui/core";
import Image from '../../images/1.jpeg';
import {Theme} from "../Theme";

export const useStyles = makeStyles((theme)=>({
    HeaderWrapper : {
        width: '100%',
        minHeight: "90vh",
        height:"auto",
        background:`linear-gradient(to bottom right,#357da6,#00606473),url(${Image})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
    },
    HeaderContainer: {
        width: "85%",
        minHeight: "90vh",
        height:"auto",
        padding:"20px",
        color: Theme.colors.base2,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        fontFamily:"roboto",
    },
    headerTitle: {
        fontSize: "3rem",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down('xs')]: {
            fontSize: "2rem",
        },
    },
    headerDescription: {
        fontSize: "1rem",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.5rem",
            marginTop:theme.spacing(2,0),
        },
    },

    navbar: {
        backgroundColor:Theme.colors.base1,
        color: Theme.colors.base2
    },
    ToolBar: {
        display: "flex",
        flexFlow:"row wrap",
        justifyContent: "space-between",
    },
    navlinks: {
        color: Theme.colors.base2,
    },
    // Decorator (About me)
    decorator: {
        display: "flex",
        fontWeight: "bolder",
        fontSize:"25px",
        fontFamily:"roboto",
        position: "relative",
        marginTop: "20px",
        // pseudo class
        '&:before':{
            width:"40px",
            height:"40px",
            backgroundColor:Theme.colors.primary,
            content: '""',
            borderRadius: "50%",

        },
    },
    decoratorText: {
        lineHeight: "40px",
        position: "absolute",
        left: "15px",
    },
    arrow:{
        lineHeight: "20px",
        position: "absolute",
        left: "125px",
        animationName:"upDown",
        animationDuration:"1.3s",
        animationIterationCount:"infinite",
    },

    //create animation
    '@global':{
        // it'll loop
        "@keyframes upDown": {
            "0%":{
                paddingTop: "0px",
                transform: "scale(0)"
            },
            "100%":{
                paddingTop: "10px",
                transform: "scale(1)"
            },
        },
    },

    // drawer style
    drawer: {
        width:"250px",
        height:"100Vh",
    },
    drawerContainer: {
        width:"250px",
        height:"100Vh",
        backgroundColor:Theme.colors.primary1,
    },
    listItem:{
        color:Theme.colors.base2,
    },
}));
