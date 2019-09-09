import React, {Component} from 'react'

export default class GeneratedHtml extends Component {

    render() {
        return <>
            <style>
                {this.props.fontFamily === 'Roboto, sans-serif' ? "@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap')" : null};
                {this.props.fontFamily === 'Open Sans, sans-serif' ? "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap')" : null};
                {this.props.fontFamily === 'Lato, sans-serif' ? "@import url('https://fonts.googleapis.com/css?family=Lato&display=swap')" : null};
                {this.props.fontFamily === 'Montserrat, sans-serif' ? "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap')" : null};
            </style>
            <div className={'generatedHTML'} style={{fontFamily: this.props.fontFamily}}>
                <nav className={"navbar navbar-expand-lg navbar-light " + this.props.navbarFixed} id="mainNav"
                     style={{background: this.props.navbarBackground}}>
                    <div className="container">
                        <a className="navbar-brand" href="#page-top"
                           style={{color: this.props.navbarBrandColor}}>{this.props.navbarBrand}</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Nawigacja">
                            Menu
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className={"navbar-nav ml-auto " + this.props.uppercase}>
                                {this.props.navLinks.map((item, index) => {
                                    return <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href={item.url}
                                           style={{color: this.props.linkColor}}>{item.nazwa}</a>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="Carousel" className="carousel slide" data-ride={this.props.carouselAutoSlide ? "carousel" : ""}
                     data-interval={this.props.carouselInterval}>
                    <div className="carousel-inner">
                        {this.props.carouselImages.map((item, index) => {
                            if (index === 0) {
                                return <div className={"carousel-item active"}>
                                    <img className="d-block w-100" src={item.image} alt="Carousel"/>
                                    <div className="carousel-caption d-none d-md-block"
                                         style={{color: this.props.carouselCaptionColor}}>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            } else {
                                return <div className={"carousel-item"}>
                                    <img className="d-block w-100" src={item.image} alt="Carousel"/>
                                    <div className="carousel-caption d-none d-md-block"
                                         style={{color: this.props.carouselCaptionColor}}>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                    <a className="carousel-control-prev" href="#Carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#Carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div id={'section1'}
                     style={{background: this.props.sectionOneBackground, color: this.props.sectionOneColor}}>
                    <div className={'container'}>
                        <div className={'p-5'}>
                            <div className={'row'}>
                                <div className={'col-md-12 text-center'}>
                                    <h2>{this.props.sectionOneTitle}</h2>
                                    <small>{this.props.sectionOneDescription}</small>
                                    <hr style={{borderTopColor: this.props.sectionOneColor + 25}}/>
                                    <p>
                                        {this.props.sectionOneText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={'gallery'} style={{background: this.props.galleryBackground}}>
                    <div className={'container-fluid'} style={{paddingLeft: 0, paddingRight: 0}}>
                        <div className={'row'}>
                            <div className={'col-md-3'} style={{paddingLeft: 0, paddingRight: 0}}><img
                                src={'https://dummyimage.com/600x400/4f4f4f/fff'} className={'img-fluid'}/></div>
                            <div className={'col-md-3'} style={{paddingLeft: 0, paddingRight: 0}}><img
                                src={'https://dummyimage.com/600x400/4f4f4f/fff'} className={'img-fluid'}/></div>
                            <div className={'col-md-3'} style={{paddingLeft: 0, paddingRight: 0}}><img
                                src={'https://dummyimage.com/600x400/4f4f4f/fff'} className={'img-fluid'}/></div>
                            <div className={'col-md-3'} style={{paddingLeft: 0, paddingRight: 0}}><img
                                src={'https://dummyimage.com/600x400/4f4f4f/fff'} className={'img-fluid'}/></div>
                        </div>
                    </div>
                </div>
                {this.props.showMap ? <div id={'map'} className={'container-fluid'} style={{paddingLeft: 0, paddingRight: 0}}>
                    <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: 300}}>
                        <iframe
                            src={"https://maps.google.com/maps?q=" + this.props.mapAddress + "&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                            frameBorder="0"
                            style={{border: 0, width: '100%', height: '100%'}} allowFullScreen></iframe>
                    </div>
                </div> : null}
                <div id={'contact'} style={{background: this.props.contactBackground, color: this.props.contactColor}}>
                    <div className={'container'}>
                        <div className={'p-5'}>
                            <div className={'text-center'}><h2>{this.props.contactTitle}</h2>
                                <small>{this.props.contactDescription}</small></div>
                            <hr/>
                            <div className={'row'}>
                                <div className={'col-md-12'}>
                                    <label>Imię i nazwisko:</label>
                                    <input type={'text'} name={'imieNazwisko'} className={'form-control'}/>
                                    <label>E-mail:</label>
                                    <input type={'text'} name={'imieNazwisko'} className={'form-control'}/>
                                    <label>Treść:</label>
                                    <textarea type={'text'} rows={6} name={'imieNazwisko'} className={'form-control'}/>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-md-12 text-right'}>
                                    <button className={'btn btn-info'} style={{marginTop: 15}}>Wyślij wiadomość</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={'footer'} className={'container-fluid footer'}
                     style={{background: '#4c4c4c', color: '#ffffff'}}>
                    <div className={'container'} style={{fontSize: '0.875rem'}}>
                        <div className={'row'}>
                            <div className={'col-sm-6'}>Copyright by {this.props.copyright}</div>
                            <div className={'col-sm-6 text-right'}>Powered by spgenerator by ttracz</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}
