import React, {Component} from 'react'

export default class SlideInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            carouselImages: this.props.carouselImages
        }
    }

    onFileChange(e, index) {
        let carouselImages = this.state.carouselImages
        this.getBase64(e.target.files[0], (result) => {
            carouselImages[index].image = result
            this.setState({carouselImages: carouselImages})
            console.log(carouselImages)
        });
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    addImage() {
        let carouselImages = this.state.carouselImages
        carouselImages.push({title: '', description: '', image: ''})
        this.setState({carouselImages: carouselImages})
    }

    deleteImage(e) {
        let carouselImages = this.state.carouselImages.filter(function (item) {
            return item !== e
        });
        this.setState({
            carouselImages: carouselImages
        })
    }

    handleChange(e, index) {
        let carouselImages = this.state.carouselImages
        carouselImages[index][e.target.name] = e.target.value
        this.setState({carouselImages: carouselImages})
    }

    saveImages() {
        this.props.setCarouselImages(this.state.carouselImages)
        this.props.closeModal()
    }

    render() {
        return <div className={'linkInput'}>
                {this.state.carouselImages.map((item, index) => {
                    return <div className={'link'}>
                        <div className={'row'}>
                            <div className={'col-3'}>
                                <label>Tytuł slajdu:</label>
                            </div>
                            <div className={'col-4'}>
                                <label>Opis slajdu:</label>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-3'}>
                                <input className={'form-control'} name={'title'} defaultValue={item.title} onChange={(e) => this.handleChange(e, index)}/>
                            </div>
                            <div className={'col-4'}>
                                <input className={'form-control'} name={'description'} defaultValue={item.description} onChange={(e) => this.handleChange(e, index)}/>
                            </div>
                            <div className={'col-2'} style={{paddingLeft: 0, paddingRight: 0}}>
                                <label className={'btn btn-info'}>
                                <input type='file' name={'file'} onChange={(e)=>this.onFileChange(e, index)} hidden/>
                                Wybierz obraz
                                </label>
                            </div>
                            <div className={'col-2'}>
                                <img src={item.image} className={'img-fluid'}/>
                            </div>
                            <div className={'col-1'}>
                                <i className={'fa fa-times deleteLink'} style={{color: 'red', cursor: 'pointer'}}
                                   onClick={() => this.deleteImage(item)}/>
                            </div>
                        </div>
                    </div>
                })}
                <div className={'row buttonContainer'}>
                    <div className={'col-12'}>
                        <button className={'btn btn-info'} onClick={()=>this.addImage()}>Dodaj kolejny slajd</button>
                    </div>
                </div>
                <div className={'row buttonContainer'}>
                    <div className={'col-12 text-right'}>
                        <button className={'btn btn-danger'} onClick={() => this.props.closeModal()}>Anuluj</button>
                        <button className={'btn btn-success'} type="submit" style={{marginLeft: 5}} onClick={()=>this.saveImages()}>Zapisz
                        </button>
                    </div>
                </div>
        </div>
    }
}
