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
    const [images, setImages] = React.useState([{
        image: "data:image/png;base64,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"
    }, {
        image: "data:image/png;base64,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"
    }, {
        image: "data:image/png;base64,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"
    }, {
        image: "data:image/png;base64,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"
    }])
    const [galleryBackground, setGalleryBackground] = React.useState('#9B9B9B')
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

    const generateWebsite = () => {
        let w = window.open("");
        console.log(document.getElementById('generatedHTML').innerHTML)
        w.document.write(
            "<html lang=\"en\">\n" +
            "  <head>\n" +
            "    <meta charset=\"utf-8\">\n" +
            "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n" +
            "\n" +
            "    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n" +
            "\n" +
            "    <title>Hello, world!</title>\n" +
            "  </head>\n" +
            "<style>" +
            ".row {\n" +
            "    margin-left: 0px !important;\n" +
            "    margin-right: 0px !important;\n" +
            "}\n" +
            "\n" +
            "#gallery img:hover {\n" +
            "    opacity: 0.7;\n" +
            "    transition: 0.3s ease-in-out;\n" +
            "    cursor: pointer;\n" +
            "}\n" +
            "\n" +
            "#contact label {\n" +
            "    margin-top: 10px;\n" +
            "}\n" +
            "\n" +
            "#map {\n" +
            "    filter: grayscale(100%);\n" +
            "    opacity: 0.7;\n" +
            "}\n" +
            "\n" +
            "#map:hover {\n" +
            "    opacity: 1;\n" +
            "    transition: 0.3s ease-in-out;\n" +
            "}\n" +
            "\n" +
            "#footer {\n" +
            "    padding-top: 25px;\n" +
            "    padding-bottom: 25px;\n" +
            "}\n" +
            "\n" +
            ".generatedHTML {\n" +
            "    margin-bottom: 26px;\n" +
            "}\n" +
            "</style>" +
            "  <body>"
            + document.getElementById('generatedHTML').innerHTML +
            "<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n" +
        "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\n" +
        "    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\n" +
        "  </body>\n" +
        "</html>")
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
                                                 images={images}
                                                 galleryBackground={galleryBackground}
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
                    images={images}
                    setImages={e => {
                        setImages(e);
                        setReload();
                    }}
                    galleryBackground={galleryBackground}
                    setGalleryBackground={e => setGalleryBackground(e)}
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
                    generateWebsite={()=>generateWebsite()}
                /> : null}
            </div>
        </div>
    );
}

