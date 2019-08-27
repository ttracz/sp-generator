import React from 'react'
import '../Generators.css'
import {InputColorPicker} from "./InputColorPicker";
import LinkInput from "./LinkInput";
import Modal from 'react-modal'

export const NavBarGen = (props) => {

    const [linkModal, openLinkModal] = React.useState(false)

    return (
        <div>
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
                        label={'Kolor tła:'}
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
                        onChangeText={e => props.setNavbarBrand(e.target.value)}
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
            </div>
        </div>
    );
}

