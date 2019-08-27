import * as React from 'react'
import './Loader.css'

export const Loader = (props) => {
    return <div className="loader">
        <i className="fa fa-spinner fa-pulse fa-2x fa-fw"> </i>
        <div className={'text-center'}>{props.loadingText}</div>
    </div>
}

Loader.defaultProps = {
    loadingText: 'Ładowanie...'
}
