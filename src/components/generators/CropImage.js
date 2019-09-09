import React, {Component} from 'react'

export default class CropImage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: this.props.text
        }
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    saveText(){
        this.props.setText(this.state.text)
        this.props.closeModal()
    }

    render() {
        return <div className={'linkInput'}>
            <div className={'link'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <label>Treść sekcji:</label>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <textarea className={'form-control'} name={'title'} rows={12} defaultValue={this.props.text}
                               onChange={(e) => this.handleChange(e)}/>
                    </div>
                </div>
            </div>
            <div className={'row buttonContainer'}>
                <div className={'col-12 text-right'}>
                    <button className={'btn btn-danger'} onClick={() => this.props.closeModal()}>Anuluj</button>
                    <button className={'btn btn-success'} type="submit" style={{marginLeft: 5}}
                            onClick={() => this.saveText()}>Zapisz
                    </button>
                </div>
            </div>
        </div>
    }
}
