import React from 'react'
import {ColorPicker} from "../../../utilities/colorPicker/ColorPicker";

export const InputColorPicker = (props) => {

    return <div className={'inputColorPicker'}>
        <div className={'row'}>
            <div className={'col-12'}>
                <label>{props.label}</label>
            </div>
        </div>
        <div className={'row'}>
            {props.input ? <div className={'col-10'}>
                <input className={'form-control titleInput'} value={props.text}
                       onChange={props.onChangeText}/>
            </div> : null}
            <div className={'col-2'} style={{paddingLeft: 0}}>
                <ColorPicker color={props.color} setColor={(color) => props.setColor(color)}/>
            </div>
        </div>
    </div>
}

InputColorPicker.defaultProps = {
    onChangeText: (e) => console.log(e),
    text: '',
    input: true
}
