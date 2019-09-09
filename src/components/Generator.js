import React from 'react'
import './generators/Generators.css'
import GeneratedHtml from "./GeneratedHtml";
import {NavBarGen} from "./generators/navbarGenerator/NavBarGen";
import {Loader} from "../utilities/loader/Loader";
import {CarouselGen} from "./generators/carouselGenerator/CarouselGen";
import {ShowHideBar} from "./generators/ShowHideBar";
import {AboutGen} from "./generators/aboutGenerator/AboutGen";
import {GalleryGen} from "./generators/galleryGenerator/GalleryGen";
import {ContactGen} from "./generators/contactGenerator/ContactGen";

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
    const [carouselAutoSlide, setCarouselAutoSlide] = React.useState(true)
    const [carouselInterval, setCarouselInterval] = React.useState("2000")
    const [sectionOneBackground, setSectionOneBackground] = React.useState('#86bdaf');
    const [sectionOneTitle, setSectionOneTitle] = React.useState('Tytuł sekcji 1');
    const [sectionOneDescription, setSectionOneDescription] = React.useState('Przykładowy opis');
    const [sectionOneText, setSectionOneText] = React.useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui urna, ultrices vel tristique id, vehicula quis mi. Nunc eu varius ante. Praesent fermentum eu felis eu dapibus. Phasellus congue turpis non erat tempus feugiat. Aenean dictum, nibh id placerat dictum, elit ex sollicitudin diam, eu auctor est sapien quis metus. Phasellus pharetra aliquet mauris id ornare. Fusce ut tincidunt neque. Pellentesque lectus elit, aliquam in lacus vitae, lacinia venenatis nisi. Morbi risus libero, vulputate vel mauris auctor, aliquet imperdiet massa. Suspendisse nec felis id mi accumsan consequat eget vel ex.');
    const [sectionOneColor, setSectionOneColor] = React.useState('#000000');
    const [showMap, setShowMap] = React.useState(true)
    const [mapAddress, setMapAddress] = React.useState('Warneńczyka 3, Rzeszów')
    const [contactTitle, setContactTitle] = React.useState('Kontakt')
    const [contactDescription, setContactDescription] = React.useState('Opis sekcji...')
    const [contactMail, setContactMail] = React.useState('johndoe@example.com')

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
                                                 carouselAutoSlide={carouselAutoSlide}
                                                 carouselInterval={carouselInterval}
                                                 sectionOneBackground={sectionOneBackground}
                                                 sectionOneTitle={sectionOneTitle}
                                                 sectionOneDescription={sectionOneDescription}
                                                 sectionOneText={sectionOneText}
                                                 sectionOneColor={sectionOneColor}
                                                 showMap={showMap}
                                                 mapAddress={encodeURIComponent(mapAddress)}
                                                 contactTitle={contactTitle}
                                                 contactDescription={contactDescription}
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
                                                     carouselAutoSlide={carouselAutoSlide}
                                                     setCarouselAutoSlide={e => {
                                                         setCarouselAutoSlide(e);
                                                         setReload()
                                                     }}
                                                     carouselInterval={carouselInterval}
                                                     setCarouselInterval={e => {
                                                         setCarouselInterval(e);
                                                         setReload()
                                                     }}
                                                     setGeneratorStage={e => setGeneratorStage(e)}
                                                     generatorStage={generatorStage}
                /> : null}
                {generatorStage === 2 ? <AboutGen setSectionOneBackground={e => setSectionOneBackground(e)}
                                                  sectionOneBackground={sectionOneBackground}
                                                  setSectionOneTitle={e => setSectionOneTitle(e)}
                                                  sectionOneTitle={sectionOneTitle}
                                                  setSectionOneDescription={e => setSectionOneDescription(e)}
                                                  sectionOneDescription={sectionOneDescription}
                                                  setSectionOneText={e => setSectionOneText(e)}
                                                  sectionOneText={sectionOneText}
                                                  setSectionOneColor={e => setSectionOneColor(e)}
                                                  sectionOneColor={sectionOneColor}
                                                  setGeneratorStage={e => setGeneratorStage(e)}
                                                  generatorStage={generatorStage}
                /> : null}
                {generatorStage === 3 ? <GalleryGen
                    setGeneratorStage={e => setGeneratorStage(e)}
                    generatorStage={generatorStage}
                /> : null}
                {generatorStage === 4 ? <ContactGen
                    showMap={showMap}
                    setShowMap={() => setShowMap(!showMap)}
                    mapAddress={mapAddress}
                    setMapAddress={e => setMapAddress(e)}
                    contactTitle={contactTitle}
                    setContactTitle={e => setContactTitle(e)}
                    contactDescription={contactDescription}
                    setContactDescription={e => setContactDescription(e)}
                    contactMail={contactMail}
                    setContactMail={e => setContactMail(e)}
                    setGeneratorStage={e => setGeneratorStage(e)}
                    generatorStage={generatorStage}
                /> : null}
            </div>
        </div>
    );
}

