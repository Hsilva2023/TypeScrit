import React from "react";
import Style from './Relogio.module.scss';

export default function Relogio(){
    return(
        <React.Fragment>
        <span className={Style.relogioNumero}>0</span>
        <span className={Style.relogioNumero}>0</span>
        <span className={Style.relogioDivisao}>:</span>
        <span className={Style.relogioNumero}>0</span>
        <span className={Style.relogioNumero}>0</span>
        </React.Fragment>
       
    )
}