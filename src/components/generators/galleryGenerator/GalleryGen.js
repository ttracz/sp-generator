import React from 'react'
import '../Generators.css'
import Modal from "react-modal";
import CropImage from "../CropImage";
import {InputColorPicker} from "../InputColorPicker";

export const GalleryGen = (props) => {

    const [cropModal, openCropModal] = React.useState(false)
    const [croppedImage, setCroppedImage] = React.useState('')
    const [croppedImageIndex, setCroppedImageIndex] = React.useState('')

    const onFileChange = (e, index) => {
        let galleryImages = props.images
        getBase64(e.target.files[0], (result) => {
            setCroppedImage(result)
            setCroppedImageIndex(index)
            openCropModal(true)
            galleryImages[index].image = result
            props.setImages(galleryImages)
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
            <CropImage images={props.images} setImages={(images) => props.setImages(images)} imageSrc={croppedImage}
                       index={croppedImageIndex} closeModal={() => openCropModal(false)}/>
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
                {props.images.map((item, index) => {
                    return <div className={'col-2'}>
                        <label>Zdjęcie {index + 1}:</label>
                        <div><label className={'btn btn-info'}>
                            <input type='file' name={'file'} onChange={(e) => onFileChange(e, index)} hidden/>
                            Wybierz obraz
                        </label></div>
                        <img src={props.images[index].image} className={'img-fluid'}/>
                    </div>
                })}
                <div className={'col-1'}>
                    <InputColorPicker
                        label={'Kolor tła:'}
                        input={false}
                        setColor={e => {
                            props.setGalleryBackground(e)
                        }}
                        color={props.galleryBackground}
                    />
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

