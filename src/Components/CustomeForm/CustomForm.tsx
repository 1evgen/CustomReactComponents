import {NativeForm} from "Components/CustomeForm/NativeForm/NativeForm";
import s from 'Components/CustomeForm/NativeForm/containerForms.module.css'

export const CustomForm = ()=> {
    return (
        <div className={s.containerForms}>
            <NativeForm />
        </div>
    )
}