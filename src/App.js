import React from 'react';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import {NavBarGen} from "./components/generators/navbarGenerator/NavBarGen";
import {Generator} from "./components/Generator";

export const App = () => {

    return (
        <Generator/>
    );
}

export default App;
