import React from 'react'
import '../Generators.css'
import Modal from 'react-modal'
import {InputColorPicker} from "../InputColorPicker";
import LinkInput from "../navbarGenerator/LinkInput";
import SlideInput from "./SlideInput";

export const CarouselGen = (props) => {

    const [modal, modalOpen] = React.useState(false)

    return (
        <div className={'generatorContainer'}>
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
                <div className={'col-7'}>
                    <div><label>&nbsp;</label></div>
                    <div><label>&nbsp;</label></div>
                    <div><label>&nbsp;</label></div>
                </div>
                <div className={'col-1'}>
                    <div className={'text-right'}>
                        <div><label>Bloki <i className={'fa fa-arrow-down'}/> </label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(2)}>Dalej <i
                            className={'fa fa-arrow-right'}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

