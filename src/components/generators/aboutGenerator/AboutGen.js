import React from 'react'
import '../Generators.css'
import {InputColorPicker} from "../InputColorPicker";
import Modal from "react-modal";
import TextInput from "../TextInput";

export const AboutGen = (props) => {

    const [textModal, openTextModal] = React.useState(false)

    return (
        <><Modal
            isOpen={textModal}
            onRequestClose={() => openTextModal(false)}
            contentLabel="Links modal"
        >
            <TextInput closeModal={() => openTextModal(false)} text={props.sectionOneText}
                       setText={(e) => props.setSectionOneText(e)}/>
        </Modal>
            <div className={'row'} style={{marginLeft: 0, marginRight: 0}}>
                <div className={'col-1'}>
                    <div className={'text-left'}>
                        <div><label><i className={'fa fa-arrow-down'}/> Slider</label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(1)}><i
                            className={'fa fa-arrow-left'}/> Wstecz
                        </button>
                    </div>
                </div>
                <div className={'col-1'}>
                    <InputColorPicker
                        label={'Tło sekcji:'}
                        input={false}
                        setColor={e => {
                            props.setSectionOneBackground(e)
                        }}
                        color={props.sectionOneBackground}
                    />
                </div>
                <div className={'col-1'}>
                    <InputColorPicker
                        label={'Kolor tekstu:'}
                        input={false}
                        setColor={e => {
                            props.setSectionOneColor(e)
                        }}
                        color={props.sectionOneColor}
                    />
                </div>
                <div className={'col-3'}>
                    <label>Tytuł sekcji:</label>
                    <div>
                        <input type={'text'} defaultValue={props.sectionOneTitle}
                               onChange={(e) => props.setSectionOneTitle(e.target.value)} className={'form-control'}/>
                    </div>
                </div>
                <div className={'col-4'}>
                    <label>Opis sekcji:</label>
                    <div>
                        <input type={'text'} defaultValue={props.sectionOneDescription}
                               onChange={(e) => props.setSectionOneDescription(e.target.value)} className={'form-control'}/>
                    </div>
                </div>
                <div className={'col-1'}>
                    <label>Treść:</label>
                    <div>
                        <button className={'btn btn-info'} onClick={() => openTextModal(true)}>Edytor</button>
                    </div>
                </div>
                <div className={'col-1'}>
                    <div className={'text-right'}>
                        <div><label>Blok 2 <i className={'fa fa-arrow-down'}/> </label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(3)}>Dalej <i
                            className={'fa fa-arrow-right'}/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

