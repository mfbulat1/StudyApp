import * as React from 'react';
import Box from '@mui/material/Box';
import {FC, ReactNode} from "react";
import LeftMenu from "./LeftMenu/LeftMenu";
import Header from "./Header/Header";
import {useTheme} from "@mui/material/styles";

type MainLayoutPropsType = {
    children: ReactNode
}

const MainLayout: FC<MainLayoutPropsType> = ({children}) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleMenuButton = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <Header handleMenuButton={handleMenuButton}/>
            <Box sx={{display: 'flex', background: theme.palette.grey['100'],
                minHeight:  `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 10px)`,}}>
                <LeftMenu isOpen={open}/>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default MainLayout;

