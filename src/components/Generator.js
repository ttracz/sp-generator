import React from 'react'
import './generators/Generators.css'
import GeneratedHtml from "./GeneratedHtml";
import {NavBarGen} from "./generators/navbarGenerator/NavBarGen";
import {Loader} from "../utilities/loader/Loader";
import {CarouselGen} from "./generators/carouselGenerator/CarouselGen";

export const Generator = () => {

    const [loader, setLoader] = React.useState(false)
    const [generatorStage, setGeneratorStage] = React.useState(0)

    const [navbarBrand, setNavbarBrand] = React.useState('Przykładowa nazwa')
    const [navbarBrandColor, setNavbarBrandColor] = React.useState('#000000')
    const [navbarBackground, setNavbarBackground] = React.useState('#ffffff')
    const [linkColor, setLinkColor] = React.useState('#000000')
    const [navLinks, setNavLinks] = React.useState([{nazwa: 'Link1', url: '#'}, {nazwa: 'Link2', url: '#'}])
    const [navbarFixed, setNavbarFixed] = React.useState("fixed-top")
    const [carouselImage, setCarouselImage] = React.useState('https://via.placeholder.com/1920x600?text=Sample+image')
    const [carouselCaptionPrimary, setCarouselCaptionPrimary] = React.useState('Tytuł')
    const [carouselCaptionSecondary, setCarouselCaptionSecondary] = React.useState('Opis przykładowy...')
    const [carouselCaptionColor, setCarouselCaptionColor] = React.useState('#000000')

    const setReload = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 250)
    }

    return (
        <div className="App">
            {loader ? <Loader/> : <GeneratedHtml navbarBackground={navbarBackground}
                                                 navbarBrand={navbarBrand}
                                                 navbarBrandColor={navbarBrandColor}
                                                 navLinks={navLinks}
                                                 linkColor={linkColor}
                                                 navbarFixed={navbarFixed}
                                                 carouselImage={carouselImage}
                                                 carouselCaptionPrimary={carouselCaptionPrimary}
                                                 carouselCaptionSecondary={carouselCaptionSecondary}
                                                 carouselCaptionColor={carouselCaptionColor}
            />}
            {generatorStage === 0 ? <NavBarGen setNavbarBrandColor={e => setNavbarBrandColor(e)}
                                               navbarBrandColor={navbarBrandColor}
                                               setNavbarBrand={e => setNavbarBrand(e.target.value)}
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
                                               navbarFixed={navbarFixed}
                                               setNavbarFixed={e => setNavbarFixed(e)}
                                               setGeneratorStage={e => setGeneratorStage(e)}
                                               generatorStage={generatorStage}
            /> : null}
            {generatorStage === 1 ? <CarouselGen carouselImage={carouselImage}
                                                 setCarouselImage={e => setCarouselImage(e)}
                                                 carouselCaptionPrimary={carouselCaptionPrimary}
                                                 setCarouselCaptionPrimary={e => setCarouselCaptionPrimary(e)}
                                                 carouselCaptionSecondary={carouselCaptionSecondary}
                                                 setCarouselCaptionSecondary={e => setCarouselCaptionSecondary(e)}
                                                 carouselCaptionColor={carouselCaptionColor}
                                                 setCarouselCaptionColor={e => setCarouselCaptionColor(e)}
                                                 setGeneratorStage={e => setGeneratorStage(e)}
                                                 generatorStage={generatorStage}
            /> : null}
        </div>
    );
}

