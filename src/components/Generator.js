import React from 'react'
import './generators/Generators.css'
import GeneratedHtml from "./GeneratedHtml";
import {NavBarGen} from "./generators/navbarGenerator/NavBarGen";
import {Loader} from "../utilities/loader/Loader";
import {CarouselGen} from "./generators/carouselGenerator/CarouselGen";
import {ShowHideBar} from "./generators/ShowHideBar";

export const Generator = () => {

    const [loader, setLoader] = React.useState(false)
    const [hidden, setHidden] = React.useState(false)
    const [generatorStage, setGeneratorStage] = React.useState(0)

    const [navbarBrand, setNavbarBrand] = React.useState('Przykładowa nazwa')
    const [navbarBrandColor, setNavbarBrandColor] = React.useState('#000000')
    const [navbarBackground, setNavbarBackground] = React.useState('#ffffff')
    const [linkColor, setLinkColor] = React.useState('#000000')
    const [navLinks, setNavLinks] = React.useState([{nazwa: 'Link1', url: '#'}, {nazwa: 'Link2', url: '#'}])
    const [navbarFixed, setNavbarFixed] = React.useState("fixed-top")
    const [uppercase, setUppercase] = React.useState('')
    const [fontFamily, setFontFamily] = React.useState('')
    const [carouselImages, setCarouselImages] = React.useState([
        {
            image: 'https://via.placeholder.com/1920x600?text=Sample+image',
            title: 'Tytuł...',
            description: 'Przykładowy opis...'
        },
        {
            image: 'https://via.placeholder.com/1920x600?text=Sample+image2',
            title: 'Tytuł 2...',
            description: 'Przykładowy opis 2...'
        }
    ])
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
                                                 uppercase={uppercase}
                                                 fontFamily={fontFamily}
                                                 carouselImages={carouselImages}
                                                 carouselCaptionPrimary={carouselCaptionPrimary}
                                                 carouselCaptionSecondary={carouselCaptionSecondary}
                                                 carouselCaptionColor={carouselCaptionColor}
            />}
            <div className={hidden ? 'generatorContainer generatorContainerHidden' : 'generatorContainer'}>
                <ShowHideBar hidden={hidden} setHidden={e => setHidden(e)}/>
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
                                                       setReload()
                                                   }}
                                                   navLinks={navLinks}
                                                   navbarFixed={navbarFixed}
                                                   setNavbarFixed={e => setNavbarFixed(e)}
                                                   uppercase={uppercase}
                                                   setUppercase={e => setUppercase(e)}
                                                   fontFamily={fontFamily}
                                                   setFontFamily={e => setFontFamily(e)}
                                                   setGeneratorStage={e => setGeneratorStage(e)}
                                                   generatorStage={generatorStage}
                /> : null}
                {generatorStage === 1 ? <CarouselGen carouselImages={carouselImages}
                                                     setCarouselImages={e => {
                                                         setCarouselImages(e);
                                                         setReload()
                                                     }}
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
        </div>
    );
}

