import React from "react";
import style from "../buttonPallette.module.css";
import {CustomButton} from "../CustomButtom/CustomButton";
import {sizeButtons} from "../DashboardShowSizeButton/ButtonsSize";

export enum colorButtons {
    PRIMARY =   'primary',
    SECONDARY = 'secondary',
    SUCCESS =   'success',
    ERROR=      'error',
    DEFAULT =   'default'
}

export type ButtonColorType = {
    variantColor?: colorButtons
    header: string
    description: string
}

export const ButtonColor: React.FC<ButtonColorType> = ({
                                                           variantColor= colorButtons.DEFAULT,
                                                           ...attributes})=> {
    return(
        <div className={style.dashboard}>
            <div className={style.InfoDashboard}>
                <h3 className={style.titleDashboard}>{attributes.header}</h3>
                <p className={style.description}>{attributes.description}</p>
            </div>
            <div className={style.containerButtons}>
                <CustomButton variantColor={colorButtons.PRIMARY}>
                    primary
                </CustomButton>
                <CustomButton variantColor={colorButtons.SECONDARY}>
                    secondary
                </CustomButton>
                <CustomButton variantColor={colorButtons.SUCCESS}>
                    success
                </CustomButton>
                <CustomButton variantColor={colorButtons.ERROR}>
                    error
                </CustomButton>
            </div>
        </div>

    )
}