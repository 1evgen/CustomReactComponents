import React, {ReactNode} from "react"
import {sizeButtons} from "../DashboardShowSizeButton/ButtonsSize";
import style from '../DashboardShowSizeButton/ButtonsSize.module.css'
import {colorButtons} from "../DashboardShowColorButton/ButtonColor";


type CustomButtonType = {
    children: ReactNode
    variantSize?: sizeButtons
    variantColor?: colorButtons
}


export const CustomButton: React.FC<CustomButtonType> = ({children,
                                                             variantSize = sizeButtons.DEFAULT,
                                                             variantColor= colorButtons.DEFAULT,
                                                             ...props})=> {
    return (
        <>
            <button className={`${style[variantSize]} ${style[variantColor]}`}>
                {children}
            </button>
        </>
    )
}