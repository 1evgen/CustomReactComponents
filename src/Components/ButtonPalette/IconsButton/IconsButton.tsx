import React from "react";
import commonStyle from "../buttonPallette.module.css";
import {CustomButton} from "../CustomButtom/CustomButton";
import {ButtonsArrays} from "../ButtonPalette";
import styleIcon from '../IconsButton/iconsButton.module.css'

export type IconsButtonType = {
    header: string
    descriptions: string
    propertiesButtons: ButtonsArrays
}


export const IconsButton: React.FC<IconsButtonType> = ({
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
                {
                    propertiesButtons['icon'].map((button, index) =>
                        <CustomButton key={button.nameButton + index}
                                      variantColor={button.color}
                                      variantSize={button.size}
                                      disabled={button.disabled}
                                       >
                            <img
                                src={button.icon_img}
                                className={styleIcon.iconsStyle}
                                alt="ss"
                            />
                        </CustomButton>)
                }
            </div>
        </div>
    )
}

