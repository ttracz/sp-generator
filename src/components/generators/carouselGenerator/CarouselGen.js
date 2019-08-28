import React from 'react'
import '../Generators.css'
import Modal from 'react-modal'
import {InputColorPicker} from "../InputColorPicker";

export const CarouselGen = (props) => {

    const [file, setFile] = React.useState('')

    const onFileChange = (e) => {
        let x = ''
        getBase64(e.target.files[0], (result) => {
            x = result;
            console.log(result)
            props.setCarouselImage(result)
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
        <div className={'generatorContainer'}>
            <div className={'row'} style={{marginLeft: 0, marginRight: 0}}>
                <div className={'col-1'}>
                    <div className={'text-left'}>
                        <div><label><i className={'fa fa-arrow-down'}/> Nagłówek</label></div>
                        <button className={'btn btn-info'} onClick={()=>props.setGeneratorStage(0)}><i className={'fa fa-arrow-left'}/> Wstecz</button>
                    </div>
                </div>
                <div className={'col-1'}>
                    <InputColorPicker
                        label={'Kolor tekstu:'}
                        input={false}
                        setColor={e => {
                            props.setCarouselCaptionColor(e)
                        }}
                        color={props.carouselCaptionColor}
                    />
                </div>
                <div className={'col-2'}>
                    <label>Tytuł:</label>
                    <input className={'form-control titleInput'} defaultValue={props.carouselCaptionPrimary}
                           onChange={e => props.setCarouselCaptionPrimary(e.target.value)}/>
                </div>
                <div className={'col-3'}>
                    <label>Opis:</label>
                    <input className={'form-control titleInput'} defaultValue={props.carouselCaptionSecondary}
                           onChange={e => props.setCarouselCaptionSecondary(e.target.value)}/>
                </div>
                <div className={'col-4'}>
                    <label>Zmień obraz:</label>
                    <div><label className={'btn btn-info'}><input type="file" name="file" onChange={onFileChange} hidden/>Wybierz obraz...</label></div>
                </div>
                <div className={'col-1'}>
                    <div className={'text-right'}>
                        <div><label>Bloki <i className={'fa fa-arrow-down'}/> </label></div>
                        <button className={'btn btn-info'} onClick={()=>props.setGeneratorStage(2)}>Dalej <i className={'fa fa-arrow-right'}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

