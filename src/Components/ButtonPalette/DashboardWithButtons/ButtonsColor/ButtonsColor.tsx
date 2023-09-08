import React from "react";
import commonStyle from "../../buttonPallette.module.css";
import {ButtonsArrays} from "../../ButtonPalette";
import {CustomButton} from "../../CustomButtom/CustomButton";


type ButtonsColorType = {
    header: string
    descriptions: string
    propertiesButtons: ButtonsArrays
}

export const ButtonsColor: React.FC<ButtonsColorType> = ({
                                                                propertiesButtons,
                                                             ...attributes
                                                         })=> {
    return (
        <div className={commonStyle.dashboard}>
            <div className={commonStyle.InfoDashboard}>
                <h3 className={commonStyle.titleDashboard}>{attributes.header}</h3>
                <p className={commonStyle.description}>{attributes.descriptions}</p>
            </div>
            <div className={commonStyle.containerButtons}>
                {propertiesButtons['color'].map(buttons =>
                     <CustomButton key={buttons.nameButton}
                                   variantColor={buttons.color}
                                   variantSize={buttons.size}
                                   disabled={buttons.disabled}

                     >
                        {buttons.nameButton}
                     </CustomButton>
                 )}
            </div>
        </div>
    )
}