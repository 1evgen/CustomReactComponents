
import style from './CustomeToggle.module.css'
import {useState} from "react";

export const CustomToggle = () => {
    const  [isChecked, setIsChecked] =  useState(null)


    return (
        <div className={style.wrapper}>
            <input className={style.switcher} type="checkbox" name='toggleSwitch' id='toggleSwitch-id'  />
            <label className={style.toggleSwitchLabel} htmlFor ={'toggleSwitch-id'}>
                <span>yes</span>
                <span>no</span>
            </label>
        </div>
    )
}