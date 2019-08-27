import React from 'react'
import './generators/Generators.css'
import GeneratedHtml from "./GeneratedHtml";
import {NavBarGen} from "./generators/navbarGenerator/NavBarGen";
import {Loader} from "../utilities/loader/Loader";

export const Generator = () => {

    const [loader, setLoader] = React.useState(false)

    const [navbarBrand, setNavbarBrand] = React.useState('Przykładowa nazwa')
    const [navbarBrandColor, setNavbarBrandColor] = React.useState('#000000')
    const [navbarBackground, setNavbarBackground] = React.useState('#cccccc')
    const [linkColor, setLinkColor] = React.useState('#ffffff')
    const [navLinks, setNavLinks] = React.useState([{nazwa: 'Link1', url: '#'}, {nazwa: 'Link2', url: '#'}])

    const setReload = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 250)
    }

    return (
        <div className="App">
            <NavBarGen setNavbarBrandColor={e => setNavbarBrandColor(e)}
                       navbarBrandColor={navbarBrandColor}
                       onChangeNavbarBrand={e => setNavbarBrand(e.target.value)}
                       navbarBrand={navbarBrand}
                       setNavbarBackground={e => setNavbarBackground(e)}
                       navbarBackground={navbarBackground}
                       setLinkColor={e => setLinkColor(e)}
                       linkColor={linkColor}
                       setNavLinks={e => {
                           setNavLinks(e);
                           console.log(e);
                           setReload()
                       }}
                       navLinks={navLinks}
            />
            <hr/>
            {loader ? <Loader/> : <GeneratedHtml navbarBackground={navbarBackground}
                                                   navbarBrand={navbarBrand}
                                                   navbarBrandColor={navbarBrandColor}
                                                   navLinks={navLinks}
                                                   linkColor={linkColor}/>}
        </div>
    );
}

