import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import s from './mainPage.module.css'
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link, Outlet} from "react-router-dom";
import {AppBar, drawerWidth, DrawerHeader, Main} from "./StylesForAppBar";
import CottageIcon from '@mui/icons-material/Cottage';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import ThumbsUpDownTwoToneIcon from '@mui/icons-material/ThumbsUpDownTwoTone';
import GradingIcon from '@mui/icons-material/Grading';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import {ToggleSwitch} from "Components/ToggleSwitch/ToggleSwitch";



export default function MainPage() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{mr: 10, ...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Custom Components
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <List>
                    <Link className={s.links} to={'/preview'}>
                        <ListItemButton>
                            <ListItemIcon>
                                <CottageIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Preview'/>
                        </ListItemButton>
                    </Link>
                </List>
                <List>
                    <Link className={s.links} to={'/ButtonPalette'}>
                        <ListItemButton>
                            <ListItemIcon>
                                <SmartButtonIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Button Palette'/>
                        </ListItemButton>
                    </Link>
                </List>
                <List>
                    <Link className={s.links} to={'/select'}>
                        <ListItemButton>
                            <ListItemIcon>
                                <GradingIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Select'/>
                        </ListItemButton>
                    </Link>
                </List>
                <List>
                    <Link className={s.links} to={'/rating'}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ThumbsUpDownTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary='Custom Rating'/>
                        </ListItemButton>
                    </Link>
                </List>
                <List>
                    <Link className={s.links} to={'/toggleSwitch'}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ToggleOffIcon />
                            </ListItemIcon>
                            <ListItemText primary='Custom Toggle Switch'/>
                        </ListItemButton>
                    </Link>
                </List>
            </Drawer>
            <Main className={s.mainStyle} open={open}>
                <Outlet  />
            </Main>
        </Box>
    );
}

