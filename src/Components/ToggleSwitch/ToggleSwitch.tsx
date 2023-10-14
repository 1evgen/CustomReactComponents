import style from '../ToggleSwitch/ToggleSwitch.module.css'
import {CustomToggle} from "Components/ToggleSwitch/CustomeToggle/CustomToggle";

 export  const  ToggleSwitch = () => {
        return <div className={style.wrapper}>
                <CustomToggle />
                </div>
 }