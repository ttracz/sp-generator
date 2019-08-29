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
                {console.log(this.props.navbarFixed)}
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
                <div id="Carousel" className="carousel slide" data-ride="carousel">
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
            </div>
        </>
    }
}
