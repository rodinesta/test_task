import React from 'react'
import {BrowserRouter} from "react-router-dom";
import "./App.css"
import CardList from './components/CardList';
import NavBar from './components/NavBar';

const App = (() => {
    console.log('Elecard CW Challenge')

    return (
		<BrowserRouter>
			<NavBar />
			<CardList />
        </BrowserRouter>
    );
})

export default App;