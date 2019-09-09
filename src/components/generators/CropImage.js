import React from 'react'
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from "react-image-crop";

export default class CropImage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            crop: {
                unit: "%",
                width: 400,
                aspect: 6 / 4
            },
            croppedImageUrl: ''
        }
    }

    onImageLoaded = image => {
        this.imageRef = image;
    };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                "newFile.jpeg"
            );
            this.setState({croppedImageUrl: croppedImageUrl});
        }
    }

    getCroppedImg = (image, pixelCrop, fileName) => {
        const canvas = document.createElement("canvas");
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        return base64Image
    }

    onCropChange = (crop, percentCrop) => {
        this.setState({crop});
    };

    saveGalleryImage() {
        let galleryImages = this.props.images
        galleryImages[this.props.index].image = this.state.croppedImageUrl
        this.props.setImages(galleryImages)
        this.props.closeModal()
    }

    render() {
        return <div className={'linkInput'}>
            <ReactCrop src={this.props.imageSrc}
                       crop={this.state.crop}
                       onImageLoaded={this.onImageLoaded}
                       onComplete={this.onCropComplete}
                       onChange={this.onCropChange}/>
            <div className={'row buttonContainer'}>
                <div className={'col-12 text-right'}>
                    <button className={'btn btn-danger'} onClick={() => this.props.closeModal()}>Anuluj</button>
                    <button className={'btn btn-success'} type="submit" style={{marginLeft: 5}}
                            onClick={() => this.saveGalleryImage()}>Zapisz
                    </button>
                </div>
            </div>
        </div>
    }

}
