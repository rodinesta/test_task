import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateSwitchState } from '../store/actions/switchAction';

const NavBar = () => {

    const dispatch = useDispatch()
    const switchState = useSelector(state => state.switch)
    
    const handleSwitchChange = (event, value) => {
        dispatch(updateSwitchState(event.target.checked))
    }

    return (
        <Box className="header" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        Card
                    </Typography>
                    <Switch color='default' onChange={handleSwitchChange} checked={switchState}/>
                    <Typography>
                        Tree
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;