import React from 'react'
import '../Generators.css'

export const ContactGen = (props) => {

    return (
        <>
            <div className={'row'} style={{marginLeft: 0, marginRight: 0}}>
                <div className={'col-1'}>
                    <div className={'text-left'}>
                        <div><label><i className={'fa fa-arrow-down'}/> Galeria</label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(3)}><i
                            className={'fa fa-arrow-left'}/> Wstecz
                        </button>
                    </div>
                </div>
                <div className={'col-1'}>
                    <label>Pokaż mapę </label> <input type={'checkbox'} checked={props.showMap} onChange={()=>props.setShowMap()}/>
                </div>
                <div className={'col-2'}>
                    <label>Adres mapy:</label>
                    <input type={'text'} className={'form-control'} defaultValue={props.mapAddress} onChange={(e)=>props.setMapAddress(e.target.value)}/>
                </div>
                <div className={'col-2'}>
                    <label>Tytuł sekcji:</label>
                    <input type={'text'} className={'form-control'} defaultValue={props.contactTitle} onChange={(e)=>props.setContactTitle(e.target.value)}/>
                </div>
                <div className={'col-3'}>
                    <label>Opis sekcji:</label>
                    <input type={'text'} className={'form-control'} defaultValue={props.contactDescription} onChange={(e)=>props.setContactDescription(e.target.value)}/>
                </div>
                <div className={'col-2'}>
                    <label>E-mail docelowy:</label>
                    <input type={'text'} className={'form-control'} defaultValue={props.contactMail} onChange={(e)=>props.setContactMail(e.target.value)}/>
                </div>
                <div className={'col-1'}>
                    <div className={'text-right'}>
                        <div><label>Podsumowanie <i className={'fa fa-arrow-down'}/> </label></div>
                        <button className={'btn btn-info'} onClick={() => props.setGeneratorStage(5)}>Dalej <i
                            className={'fa fa-arrow-right'}/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

