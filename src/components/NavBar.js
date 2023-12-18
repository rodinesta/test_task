import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateSwitchState } from '../store/actions/switchAction';

const NavBar = () => {

    const dispatch = useDispatch()
    const switchState = useSelector(state => state.switch)
    
    const handleSwitchChange = (event, value) => {
        dispatch(updateSwitchState(event.target.checked))
    }

    const handleClear = () => {
        dispatch({ type: 'CLEAR_REMOVED_CARDS' })
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
                    <Button className='headerButton' onClick={handleClear} variant='contained'>Вернуть удаленные карточки</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;