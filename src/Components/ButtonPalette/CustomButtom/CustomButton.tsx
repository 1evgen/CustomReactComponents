import React, {ReactNode} from "react"
import {sizeButtons} from "../ButtonPalette";
import styleSize from '../DashboardWithButtons/ButtonsSize/ButtonsSize.module.css'
import styleColor from '../DashboardWithButtons/ButtonsColor/ButtonsColor.module.css'
import styleIcon from '../IconsButton/iconsButton.module.css'

type CustomButtonType = {
    children: ReactNode
    variantSize?: sizeButtons
    variantColor?: string | undefined
    disabled?: boolean
    buttonIcon?: string

}



export const CustomButton: React.FC<CustomButtonType> = ({   children,
                                                             variantSize = sizeButtons.MEDIUM,
                                                             variantColor= 'primary',
                                                             ...props})=> {
    return (
        <>
            <button onClick={()=> alert('hello guy')} className={`${styleSize[variantSize]} 
                                ${props.disabled ? styleColor['disabled'] : styleColor[variantColor]}`}
                                disabled={props.disabled}>
                {children}
            </button>
        </>
    )
}
// ${props.flag ? styleIcon['img_style'] : ''}