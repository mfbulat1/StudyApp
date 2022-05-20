import React, {FC, useState} from 'react';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {menuRoutesData} from "../../../utils/mockData";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import {Drawer, DrawerHeader, ListItem, ListItemButton, ListItemIcon, ListItemText} from "./LeftMenuStyles";

type LeftMenuPropsType = {
    isOpen: boolean
}

const LeftMenu: FC<LeftMenuPropsType> = ({isOpen}) => {
    const theme = useTheme();
    let navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const onItemClick = (path: string | undefined, id: number) => {
        setSelectedIndex(id)
        navigate(path || '/');
    }

    return (
        <Drawer variant="permanent" open={isOpen}>
            <DrawerHeader/>
            <Divider sx={{borderColor: theme.palette.primary.contrastText}}/>
            <List disablePadding>
                {menuRoutesData.map((item) => {
                    const {id, title, path, icon, divider} = item
                    return <>
                        {divider
                            ? <Divider key={id} sx={{borderColor: theme.palette.primary.contrastText}}/>
                            : <ListItem
                                key={id}
                                disablePadding
                                title={title}
                                onClick={() => onItemClick(path, id)}
                                selected={selectedIndex === id}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={title}/>
                                </ListItemButton>
                            </ListItem>
                        }
                    </>
                })}
            </List>
        </Drawer>
    );
};

export default LeftMenu;
