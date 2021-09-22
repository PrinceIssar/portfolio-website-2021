import React from 'react'
import {useStyles} from "./BodyStyles";
import {Box, IconButton, Typography} from "@material-ui/core";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Link} from "react-scroll";

export default function Footer() {

    const classes = useStyles();
    var date = new Date()
    return <Box className={classes.footerContainer} id="Footer">
        <IconButton className={classes.iconButton}
                    to='Header'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}
                    component={Link}
        >
            <ArrowUpwardIcon />
        </IconButton>
        <Typography variant="body1"
                    component="h4"
                    align="center"
                    color="inherit">
          All Right Reserved &copy; {date.getFullYear()}
        </Typography>
        </Box>;

}
