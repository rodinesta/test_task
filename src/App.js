import React from 'react'
import {BrowserRouter} from "react-router-dom";
import "./App.css"
import Card from './components/Card';
import NavBar from './components/NavBar';

const App = (() => {

    return (
		<BrowserRouter>
			<NavBar />
			<Card />
        </BrowserRouter>
    );
})

export default App;