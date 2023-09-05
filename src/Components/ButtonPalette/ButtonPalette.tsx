import React from "react";
import {ButtonsSize, sizeButtons} from "./DashboardShowSizeButton/ButtonsSize";
import style from "./buttonPallette.module.css";
import {ButtonColor} from "./DashboardShowColorButton/ButtonColor";

export const ButtonPalette = ()=> {
    const descriptionSizeButton = 'The dashboard shows how will change size buttons depend on props.'
    const descriptionColorButton = 'The dashboard shows how will change size buttons depend on props.'

    const firstArrayButtons=[
        {nameButton:'Small',size:sizeButtons.SMALL},
        {nameButton:'Middle',size:sizeButtons.MEDIUM},
        {nameButton:'large',size:sizeButtons.LARGE},
        {nameButton:'default',size:sizeButtons.DEFAULT},
    ]


    return (
        <div className={style.CommonPalette}>
            <ButtonsSize arrayButtons={firstArrayButtons} header="Dashboard Sizes Button " descriptions={descriptionSizeButton} clasName={''}/>
            <ButtonColor header='Dashboard 1' description={descriptionColorButton}/>
        </div>
    )
}


