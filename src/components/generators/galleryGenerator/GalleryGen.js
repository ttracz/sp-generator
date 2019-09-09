import React from 'react'
import '../Generators.css'
import Modal from "react-modal";
import CropImage from "../CropImage";

export const GalleryGen = (props) => {

    const [cropModal, openCropModal] = React.useState(false)
    const [images, setImages] = React.useState([{}, {}, {}, {}])

    const onFileChange = (e, index) => {
        let galleryImages = images
        this.getBase64(e.target.files[0], (result) => {
            galleryImages[index].image = result
            setImages(galleryImages)
            console.log(galleryImages)
        });
    }

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    return (
        <><Modal
            isOpen={cropModal}
            onRequestClose={() => openCropModal(false)}
            contentLabel="Links modal"
        >
            <CropImage closeModal={() => openCropModal(false)}/>
        </Modal>
            <div className={'row'} style={{marginLeft: 0, marginRight: 0}}>
                <div className={'col-1'}>
                    <div className={'text-left'}>
                        <div><label><i className={'fa fa-arrow-down'}/> Blok 1</label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(2)}><i
                            className={'fa fa-arrow-left'}/> Wstecz
                        </button>
                    </div>
                </div>
                <div className={'col-1'}>
                    <label>Pokaż galerię: </label><input type={'checkbox'} defaultValue={props.showGallery}
                                                         onChange={() => props.setShowGallery()}/>
                </div>
                <div className={'col-2'}>
                    <label>Zdjęcie 1:</label>
                    <div><label className={'btn btn-info'}>
                        <input type='file' name={'file'} onChange={(e) => this.onFileChange(e, 0)} hidden/>
                        Wybierz obraz
                    </label></div>
                </div>
                <div className={'col-2'}>
                    <label>Zdjęcie 2:</label>
                    <div><label className={'btn btn-info'}>
                        <input type='file' name={'file'} onChange={(e) => this.onFileChange(e, 1)} hidden/>
                        Wybierz obraz
                    </label></div>
                </div>
                <div className={'col-2'}>
                    <label>Zdjęcie 3:</label>
                    <div><label className={'btn btn-info'}>
                        <input type='file' name={'file'} onChange={(e) => this.onFileChange(e, 2)} hidden/>
                        Wybierz obraz
                    </label></div>
                </div>
                <div className={'col-2'}>
                    <label>Zdjęcie 4:</label>
                    <div><label className={'btn btn-info'}>
                        <input type='file' name={'file'} onChange={(e) => this.onFileChange(e, 3)} hidden/>
                        Wybierz obraz
                    </label></div>
                </div>
                <div className={'col-1'}>
                    <div className={'text-right'}>
                        <div><label>Kontakt <i className={'fa fa-arrow-down'}/> </label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(4)}>Dalej <i
                            className={'fa fa-arrow-right'}/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

