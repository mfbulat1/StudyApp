import React from 'react';
import {CSSObject, styled, Theme} from "@mui/material/styles";
import MuiListItem, {ListItemBaseProps} from "@mui/material/ListItem";
import MuiListItemButton, {ListItemButtonBaseProps} from "@mui/material/ListItemButton";
import MuiListItemIcon, {ListItemIconProps} from "@mui/material/ListItemIcon";
import MuiListItemText, {ListItemTextProps} from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export const ListItem = styled(MuiListItem)<ListItemBaseProps>(({theme, }) => ({
    display: 'block',
    "&.Mui-selected": {
        backgroundColor: theme.palette.primary.dark,
        '& .MuiListItemIcon-root': {
            color: theme.palette.success.light,
        },
        '& .MuiListItemText-root': {
            color: theme.palette.success.light,
        },
    },
}))

export const ListItemButton = styled(MuiListItemButton)<ListItemButtonBaseProps>(() => ({
    minHeight: 48,
    justifyContent: 'initial',
    px: 2.5,
}))

export const ListItemIcon = styled(MuiListItemIcon)<ListItemIconProps>(({theme}) => ({
    minWidth: 0,
    marginRight: 30,
    justifyContent: 'center',
    color: theme.palette.primary.contrastText,
}))

export const ListItemText = styled(MuiListItemText)<ListItemTextProps>(({theme}) => ({
    color: theme.palette.primary.contrastText,
    // color: '#2bbf96'  //selected
}))

export const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open ? {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            } : {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }
        ),
        '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
            background: theme.palette.primary.main,
            borderRight: `1px solid ${theme.palette.primary.contrastText}`,
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        },
        '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper::-webkit-scrollbar': {
            display: 'none',
        },
    })
)
