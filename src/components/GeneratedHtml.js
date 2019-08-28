import React, {Component} from 'react'

export default class GeneratedHtml extends Component {

    render() {
        return <div className={'generatedHTML'}>
            {console.log(this.props.navbarFixed)}
            <nav className={"navbar navbar-expand-lg navbar-light " + this.props.navbarFixed} id="mainNav" style={{background: this.props.navbarBackground}}>
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
                        <ul className="navbar-nav text-uppercase ml-auto">
                            {this.props.navLinks.map((item, index) => {
                                return <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href={item.url} style={{color: this.props.linkColor}}>{item.nazwa}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={this.props.carouselImage} alt="Carousel"/>
                        <div className="carousel-caption d-none d-md-block" style={{color: this.props.carouselCaptionColor}}>
                            <h3>{this.props.carouselCaptionPrimary}</h3>
                            <p>{this.props.carouselCaptionSecondary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
