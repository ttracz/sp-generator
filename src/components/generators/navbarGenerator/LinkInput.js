import React, {Component} from 'react'

export default class LinkInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            navLinks: this.props.navLinks
        }
    }

    addLink() {
        let navLinks = this.state.navLinks
        navLinks.push({nazwa: '', url: ''})
        this.setState({navLinks: navLinks})
    }

    deleteLink(e) {
        let navLinks = this.state.navLinks.filter(function (item) {
            return item !== e
        });
        this.setState({
            navLinks: navLinks
        })
    }

    handleChange(e, index) {
        let navLinks = this.state.navLinks
        navLinks[index][e.target.name] = e.target.value
        this.setState({navLinks: navLinks})
    }

    saveLinks() {
        this.props.setNavLinks(this.state.navLinks)
        this.props.closeModal()
    }

    render() {
        return <div className={'linkInput'}>
                {this.state.navLinks.map((item, index) => {
                    return <div className={'link'}>
                        <div className={'row'}>
                            <div className={'col-4'}>
                                <label>Nazwa linku:</label>
                            </div>
                            <div className={'col-7'}>
                                <label>Adres URL:</label>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-4'}>
                                <input className={'form-control'} name={'nazwa'} defaultValue={item.nazwa} onChange={(e) => this.handleChange(e, index)}/>
                            </div>
                            <div className={'col-7'}>
                                <input className={'form-control'} name={'url'} defaultValue={item.url} onChange={(e) => this.handleChange(e, index)}/>
                            </div>
                            <div className={'col-1'}>
                                <i className={'fa fa-times deleteLink'} style={{color: 'red', cursor: 'pointer'}}
                                   onClick={() => this.deleteLink(item)}/>
                            </div>
                        </div>
                    </div>
                })}
                <div className={'row buttonContainer'}>
                    <div className={'col-12'}>
                        <button className={'btn btn-info'} onClick={()=>this.addLink()}>Dodaj kolejny link</button>
                    </div>
                </div>
                <div className={'row buttonContainer'}>
                    <div className={'col-12 text-right'}>
                        <button className={'btn btn-danger'} onClick={() => this.props.closeModal()}>Anuluj</button>
                        <button className={'btn btn-success'} type="submit" style={{marginLeft: 5}} onClick={()=>this.saveLinks()}>Zapisz
                        </button>
                    </div>
                </div>
        </div>
    }
}
