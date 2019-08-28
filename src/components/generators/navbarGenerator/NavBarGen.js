import React from 'react'
import '../Generators.css'
import {InputColorPicker} from "../InputColorPicker";
import LinkInput from "./LinkInput";
import Modal from 'react-modal'

export const NavBarGen = (props) => {

    const [linkModal, openLinkModal] = React.useState(false)

    const setFixed = () => {
        if (props.navbarFixed === ""){
            props.setNavbarFixed("fixed-top")
        } else {
            props.setNavbarFixed("")
        }
    }

    const setTransparent = () => {
        if (props.navbarBackground === "transparent"){
            props.setNavbarBackground('#ffffff')
        } else {
            props.setNavbarBackground('transparent')
        }
    }

    return (
        <div className={'generatorContainer'}>
            <Modal
                isOpen={linkModal}
                onRequestClose={()=>openLinkModal(false)}
                contentLabel="Links modal"
            >
                <LinkInput closeModal={()=>openLinkModal(false)} navLinks={props.navLinks} setNavLinks={(e)=>props.setNavLinks(e)}/>
            </Modal>
            <div className={'row'} style={{marginLeft: 0, marginRight: 0}}>
                <div className={'col-1'}>
                    <InputColorPicker
                        label={'Kolor nagłówka:'}
                        input={false}
                        setColor={e => {
                            props.setNavbarBackground(e)
                        }}
                        color={props.navbarBackground}
                    />
                </div>
                <div className={'col-3'}>
                    <InputColorPicker
                        label={'Tytuł nagłówka:'}
                        setColor={e => {
                            props.setNavbarBrandColor(e)
                        }}
                        color={props.navbarBrandColor}
                        onChangeText={e => props.setNavbarBrand(e)}
                        text={props.navbarBrand}
                    />
                </div>
                <div className={'col-1'}>
                    <label>Edytor linków:</label>
                    <div><button className={'btn btn-info'} onClick={()=>openLinkModal(true)}>Edytor</button></div>
                </div>
                <div className={'col-2'}>
                    <InputColorPicker
                        label={'Kolor linków:'}
                        input={false}
                        setColor={e => {
                            props.setLinkColor(e)
                        }}
                        color={props.linkColor}
                    />
                </div>
                <div className={'col-2'}>
                    <label>Nagłówek zawsze na wierzchu:</label><input type={'checkbox'} checked={props.navbarFixed} onClick={()=>setFixed()}/>
                    <label>Przezroczyste tło nagłówka:</label><input type={'checkbox'} checked={props.navbarBackground === 'transparent'} onClick={()=>setTransparent()}/>
                </div>
                <div className={'col-3'}>
                    <div className={'text-right'}>
                        <div><label>Slider <i className={'fa fa-arrow-down'}/> </label></div>
                        <button className={'btn btn-info'} onClick={()=>props.setGeneratorStage(1)}>Dalej <i className={'fa fa-arrow-right'}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

