import React from "react";
import {ButtonsSize} from "./DashboardWithButtons/ButtonsSize/ButtonsSize";
import style from "./buttonPallette.module.css";
import {ButtonsColor} from "./DashboardWithButtons/ButtonsColor/ButtonsColor";
import basket from './IconsButton/imgIconsButton/basket.svg'
import bacteria from "./IconsButton/imgIconsButton/bacteria.svg"
import calendar from './IconsButton/imgIconsButton/calendar.svg'
import {IconsButton} from "./IconsButton/IconsButton";
import {SizeIcons} from "./DashboardWithButtons/SizeIcons/SizeIcons";

export type ColorButtonsType = 'primary' | 'secondary' | 'success' | 'error' | 'default' | 'iconStyle'
interface ButtonInfo {
    nameButton: string;
    size?: sizeButtons;
    color?: ColorButtonsType;
    disabled?: boolean
    icon_img?: string
}
export enum sizeButtons {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    DEFAULT = 'default'
}
export interface ButtonsArrays {
    size: ButtonInfo[];
    color: ButtonInfo[];
    icon: ButtonInfo[]
    iconSize: ButtonInfo[]
}

export const ButtonPalette = () => {
    const descriptionSizesButton = 'The dashboard shows how will change size buttons depend on props.'
    const descriptionColorsButton = 'This dashboard shows buttons that demonstrate the color palette of the buttons.' +
                                    ' The buttons will have the following styles: primary,secondary,error, disabled'
    const descriptionIconsButton = "This dashboard contains buttons in the form of icons: basket, calendar, bacteria." +
                                    "Buttons change in size depending on props."
    const descriptionIconsSize =    "The dashboard shows, using the cart icon as an example, how the size of the icon " +
                                    "changes depending on the props"

    const propertiesButtons: ButtonsArrays = {
        'size': [
            {nameButton: 'Small', size: sizeButtons.SMALL},
            {nameButton: 'Middle', size: sizeButtons.MEDIUM},
            {nameButton: 'large', size: sizeButtons.LARGE},
            {nameButton: 'default', size: sizeButtons.DEFAULT},
        ],
        'color': [
            {nameButton: 'primary', color: 'primary'},
            {nameButton: 'secondary', color: 'secondary'},
            {nameButton: 'success', color: 'success'},
            {nameButton: 'error', color: 'error'},
            {nameButton: 'default', color: 'default'},
            {nameButton: 'disabled', color: 'primary', disabled: true},
        ],
        'icon': [
            {nameButton: 'basket', size: sizeButtons.SMALL, icon_img: basket, color: 'iconStyle'},
            {nameButton:'calendar', size: sizeButtons.MEDIUM, icon_img: calendar, color: "iconStyle" },
            {nameButton:'bacteria', size: sizeButtons.LARGE, icon_img: bacteria, color: "iconStyle"},
            {nameButton: 'basket', size: sizeButtons.MEDIUM, icon_img: basket, color: 'iconStyle', disabled: true},
        ],
         'iconSize': [
             {nameButton: 'basket', size: sizeButtons.SMALL, icon_img: basket, color: 'iconStyle'},
             {nameButton:'basket', size: sizeButtons.MEDIUM, icon_img: basket, color: "iconStyle" },
             {nameButton:'basket', size: sizeButtons.LARGE, icon_img: basket, color: "iconStyle"},
         ]

    }
    return (
        <div className={style.CommonPalette}>
            <ButtonsSize propertiesButtons={propertiesButtons}
                         header="Dashboard Sizes Button "
                         descriptions={descriptionSizesButton}
                         clasName={''}/>

            <ButtonsColor header={"Dashboard Color Buttons"}
                          descriptions={descriptionColorsButton}
                          propertiesButtons={propertiesButtons}

            />
            <IconsButton header={"Dashboard icons Button"}
                         descriptions={descriptionIconsButton}
                         propertiesButtons={propertiesButtons} />
            <SizeIcons   header={'test'}
                         descriptions={descriptionIconsSize}
                         propertiesButtons={propertiesButtons} />
        </div>


    )
}


