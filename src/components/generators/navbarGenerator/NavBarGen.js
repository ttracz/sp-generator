import React from 'react'
import '../Generators.css'
import {InputColorPicker} from "./InputColorPicker";

export const NavBarGen = (props) => {

    return (
        <div>
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
            </div>
        </div>
    );
}

