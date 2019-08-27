import React, {Component} from 'react'

export default class GeneratedHtml extends Component {

    render() {
        return <div className={'generatedHTML'}>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav" style={{background: this.props.navbarBackground}}>
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
                                    <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    }
}
