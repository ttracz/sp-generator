import React from 'react'
import '../Generators.css'

export const AboutGen = (props) => {

    return (
        <>
            <div className={'row'} style={{marginLeft: 0, marginRight: 0}}>
                <div className={'col-1'}>
                    <div className={'text-left'}>
                        <div><label><i className={'fa fa-arrow-down'}/> Slider</label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(0)}><i
                            className={'fa fa-arrow-left'}/> Wstecz
                        </button>
                    </div>
                </div>
                <div className={'col-10'}>
                    Test
                </div>
                <div className={'col-1'}>
                    <div className={'text-right'}>
                        <div><label>Blok 2 <i className={'fa fa-arrow-down'}/> </label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(2)}>Dalej <i
                            className={'fa fa-arrow-right'}/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

