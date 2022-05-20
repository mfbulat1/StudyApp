import React from 'react';
import MainLayout from "./MainLayout/MainLaout";
import {createGlobalStyle} from "styled-components";
import {createTheme, ThemeProvider} from "@mui/material";
import Profile from "./Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routesData} from "../utils/mockData";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Consolas, serif;
  }
`
const darkTheme = createTheme({
    palette: {
        // mode: 'light',
        // primary: {
        //     main: '#5048e5',
        // },
        secondary: {
            main: '#101d2d',
        },
    },
});

const Main = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <Global/>
                <MainLayout>
                    <Routes>
                        {routesData.map(item => <Route path={item.path} element={item.component}/>)}
                        <Route path={'/'} element={<Profile/>}/>
                    </Routes>
                </MainLayout>
            </ThemeProvider>
        </BrowserRouter>

    );
};

export default Main;
