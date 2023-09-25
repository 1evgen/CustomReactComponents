import {CustomButton} from "../../CustomButtom/CustomButton";
import React from "react";
import  commonStyle from '../../buttonPallette.module.css'
import {ButtonsArrays} from "../../ButtonPalette";

type  ButtonsSizeType = {
    propertiesButtons: ButtonsArrays
    header: string
    descriptions: string
    clasName: string | undefined
}


export const ButtonsSize: React.FC<ButtonsSizeType> = ({propertiesButtons, ...attributes}) => {
    return (
        <div className={commonStyle.dashboard}>
            <div className={commonStyle.InfoDashboard}>
                <h3 className={commonStyle.titleDashboard}>{attributes.header}</h3>
                <p className={commonStyle.description}>{attributes.descriptions}</p>
            </div>
            <div className={commonStyle.containerButtons}>
                {propertiesButtons['size'].map((button)=>{
                    return <CustomButton key={button.nameButton}
                                         variantSize={button.size}
                                         variantColor={button.color} >
                        {button.nameButton}
                    </CustomButton>
                })}

            </div>
        </div>
    )
}