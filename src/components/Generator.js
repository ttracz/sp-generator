import React from 'react'
import './generators/Generators.css'
import GeneratedHtml from "./GeneratedHtml";
import {NavBarGen} from "./generators/navbarGenerator/NavBarGen";

export const Generator = () => {

    const [navbarBrand, setNavbarBrand] = React.useState('Przykładowa nazwa')
    const [navbarBrandColor, setNavbarBrandColor] = React.useState('#000000')
    const [navbarBackground, setNavbarBackground] = React.useState('#cccccc')

    return (
        <div className="App">
            <NavBarGen setNavbarBrandColor={e => setNavbarBrandColor(e)}
                       navbarBrandColor={navbarBrandColor}
                       onChangeNavbarBrand={e => setNavbarBrand(e.target.value)}
                       navbarBrand={navbarBrand}
                       setNavbarBackground={e => setNavbarBackground(e)}
                       navbarBackground={navbarBackground}
            />
            <hr/>
            <GeneratedHtml navbarBackground={navbarBackground} navbarBrand={navbarBrand} navbarBrandColor={navbarBrandColor} navLinks={["","", "", "", ""]}/>
        </div>
    );
}

