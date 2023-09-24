import React from "react";
import commonStyle from "../../buttonPallette.module.css";
import {ButtonsArrays} from "../../ButtonPalette";
import {CustomButton} from "../../CustomButtom/CustomButton";
import styleIcon from "../../IconsButton/iconsButton.module.css";


type ButtonsColorType = {
    header: string
    descriptions: string
    propertiesButtons: ButtonsArrays
}

export const SizeIcons: React.FC<ButtonsColorType> = ({
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
                {propertiesButtons['iconSize'].map((buttons, index) =>
                    <CustomButton key={buttons.nameButton + index}
                                  variantColor={buttons.color}
                                  variantSize={buttons.size}
                                  disabled={buttons.disabled}
                    >
                        <img
                            src={buttons.icon_img}
                            className={styleIcon.iconsStyle}
                            alt="ss"
                        />
                    </CustomButton>)}
            </div>
        </div>
    )
}

