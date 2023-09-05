import {CustomButton} from "../CustomButtom/CustomButton";
import React from "react";
import style from '../buttonPallette.module.css'


export enum sizeButtons {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    DEFAULT = 'default'
}

type  ButtonsSizeType =any


export const ButtonsSize: React.FC<ButtonsSizeType> = ({ arrayButtons, ...attributes}) => {
    return (
        <div className={style.dashboard}>
            <div className={style.InfoDashboard}>
                <h3 className={style.titleDashboard}>{attributes.header}</h3>
                <p className={style.description}>{attributes.descriptions}</p>
            </div>
            <div className={style.containerButtons}>
                {arrayButtons.map((button:any)=>{
                    return <CustomButton variantSize={button.size} >
                        {button.nameButton}
                    </CustomButton>
                })}
                {/*<CustomButton variantSize={sizeButtons.SMALL}>*/}
                {/*    Small*/}
                {/*</CustomButton>*/}
                {/*<CustomButton variantSize={sizeButtons.MEDIUM}>*/}
                {/*    Middle*/}
                {/*</CustomButton>*/}
                {/*<CustomButton variantSize={sizeButtons.LARGE}>*/}
                {/*    large*/}
                {/*</CustomButton>*/}
            </div>
        </div>
    )
}