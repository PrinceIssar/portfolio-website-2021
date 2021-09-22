import React, {useState} from 'react'
import {Box, Typography} from "@material-ui/core";
import {useStyles} from "./HeaderStyles";
import Navbar from "./Navbar";
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import {Decorator} from "../common/commonComponent";
import DrawerComponent from "./DrawerComponent";
import Typed from "react-typed";

export default function HeadersComponent() {
    const classes = useStyles();
    const [initialState, setInitialState] = useState(false)

    const handleDrawerToogler = () => {
        setInitialState(initialState);
    };

    const navlinks= [
        {label:"About",     Id:"About"},
        {label:"Portfolio", Id:"Portfolio"},
        {label:"Contact",   Id:"Contact"},
    ];

    return (
        <Box className={classes.HeaderWrapper} id="Header">
            <Navbar navlinks = {navlinks} handleDrawerToogler = {handleDrawerToogler}/>
            <DrawerComponent
                initialState={initialState}
                navlinks={navlinks}
                handleDrawerToogler={handleDrawerToogler}
            />
            <Box className={classes.HeaderContainer}>
                <Typography variant="h3" component="h4" className={classes.headerTitle}>
                    I'm <span style={{paddingRight: '5px'}}></span>
                    <Typed
                        strings={["Prince Issar,", "Web Developer,"]}
                        typeSpeed={30}
                        backSpeed={50}
                        loop
                    />
                </Typography>
                <Typography variant="h3" component="h4" className={classes.headerDescription}>
                    Create Website and Application,
                    <br/>
                    Based on your needs...
                </Typography>

                {Decorator({label:"About me", withIcon:true,Icon:<ArrowDownwardRoundedIcon/>})}
            </Box>
        </Box>
    )
}
