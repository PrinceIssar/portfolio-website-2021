import React from 'react'
import {AppBar, Typography, Toolbar, Button, Box, Hidden, IconButton} from "@material-ui/core";
import {useStyles} from "./HeaderStyles";
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import {Link} from "react-scroll";


export default function Navbar({ navlinks, handleDrawerToogler }) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.navbar}>
            <Toolbar className={classes.ToolBar}>
                <Typography variant="h5" component="h6">
                    {"Portfolio"}
                </Typography>

                {/*navLinks*/}
                <Box component={Hidden} xsDown>
                    {/*made another Box so that above Box doesn't hide and make space-between property enable in it.*/}
                    <Box>
                    {navlinks.map((item, i) => (
                        <Button
                            key={i}
                            className={classes.navlinks}
                            to={`${item.Id}`}
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            component={Link}
                            color='inherit'>
                            {item.label}
                        </Button>
                    ))}
                </Box>
                </Box>

                <Box component={Hidden} smUp>
                <IconButton color="inherit" onClick={handleDrawerToogler}>
                    <CodeSharpIcon />
                </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
