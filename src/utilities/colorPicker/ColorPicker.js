import React from 'react'
import {BlockPicker} from "react-color";
import './ColorPicker.css'

export const ColorPicker = (props) => {

    const [colorPicker, showColorPicker] = React.useState(false)
    const [color, setColor] = React.useState(props.color)

    const styles = {
        color: {
            width: '28px',
            height: '28px',
            borderRadius: '25px',
            background: `${color}`,
        },
        swatch: {
            padding: '5px',
            marginLeft: '15px',
            background: '#fff',
            display: 'inline-block',
            cursor: 'pointer',
        },
    }

    return <span>
        <div style={styles.swatch} onClick={() => showColorPicker(true)}>
          <div style={styles.color}/>
        </div>
        {colorPicker ? <div className={'colorPickerContainer'}>
            <div className={'colorPickerBlock'} onClick={() => showColorPicker(false)}/>
            <BlockPicker
                color={props.color}
                onChangeComplete={e => {
                    setColor(e.hex);
                    props.setColor(e.hex)
                }}
            />
        </div> : null}</span>

}
