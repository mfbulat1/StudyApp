import React, {FC} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import {IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import MuiAppBar, {AppBarProps} from "@mui/material/AppBar";


const AppBar = styled(MuiAppBar)<AppBarProps>(() => ({
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 1300,
    '& .css-1t29gy6-MuiToolbar-root': {
        paddingLeft: 16
    },
}))

type HeaderPropsType = {
    handleMenuButton: ()=> void
}

const Header: FC<HeaderPropsType> = ({handleMenuButton})=> {
    return (
        <>
            <CssBaseline/>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={handleMenuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Study App
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
