import React, { useEffect } from 'react'
import {BrowserRouter} from "react-router-dom";
import "./App.scss"
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import Tree from './components/Tree'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './store/actions/getData';

const App = (() => {
    
    const dispatch = useDispatch()
    const switchState = useSelector(state => state.switch)

    useEffect(() => {
        dispatch(getData())
    }, [dispatch]);

    return (
		<BrowserRouter>
			<NavBar />
            {switchState ? <Tree /> : <CardList/>}
        </BrowserRouter>
    );
})

export default App;