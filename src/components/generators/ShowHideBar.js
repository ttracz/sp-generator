import React from 'react'

export const ShowHideBar = (props) => {

    return <div className={'showHideBar'} onClick={()=>props.setHidden(!props.hidden)}>
        {props.hidden ? <span>Pokaz <i className={'fa fa-arrow-up'}/></span>: <span>Ukryj <i className={'fa fa-arrow-down'}/></span>}
    </div>

}
