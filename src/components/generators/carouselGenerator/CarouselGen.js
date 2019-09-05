import React from 'react'
import '../Generators.css'
import Modal from 'react-modal'
import {InputColorPicker} from "../InputColorPicker";
import LinkInput from "../navbarGenerator/LinkInput";
import SlideInput from "./SlideInput";
import Select from "react-select";

export const CarouselGen = (props) => {

    const [modal, modalOpen] = React.useState(false)
    const options = [
        {value: '1000', label: '1s'},
        {value: '2000', label: '2s'},
        {value: '3000', label: '3s'},
        {value: '4000', label: '4s'},
    ]

    return (
        <>
            <Modal
                isOpen={modal}
                onRequestClose={()=>modalOpen(false)}
                contentLabel="Links modal"
            >
                <SlideInput closeModal={()=>modalOpen(false)} carouselImages={props.carouselImages} setCarouselImages={(e)=>props.setCarouselImages(e)}/>
            </Modal>
            <div className={'row'} style={{marginLeft: 0, marginRight: 0}}>
                <div className={'col-1'}>
                    <div className={'text-left'}>
                        <div><label><i className={'fa fa-arrow-down'}/> Nagłówek</label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(0)}><i
                            className={'fa fa-arrow-left'}/> Wstecz
                        </button>
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
                    <label>Zarządzanie sliderem:</label>
                    <div>
                        <button className={'btn btn-info'} onClick={()=>modalOpen(true)}>
                            Edytuj slajdy
                        </button>
                    </div>
                </div>
                <div className={'col-2'}>
                    <label>Interwał slajdu:</label>
                    <Select menuPlacement="top" placeholder={'Wybierz czcionkę...'}
                            options={options}
                            defaultValue={options[1]}
                            onChange={(e)=>props.setCarouselInterval(e.value)}/>
                </div>
                <div className={'col-5'}>
                    <label>Automatyczne przewijanie:</label><input type={'checkbox'} checked={props.carouselAutoSlide}
                                                                      onClick={() => props.setCarouselAutoSlide(!props.carouselAutoSlide)}/>
                    <label>&nbsp;</label>
                    <label>&nbsp;</label>
                </div>
                <div className={'col-1'}>
                    <div className={'text-right'}>
                        <div><label>Blok 1 <i className={'fa fa-arrow-down'}/> </label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(2)}>Dalej <i
                            className={'fa fa-arrow-right'}/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

