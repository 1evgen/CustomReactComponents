import style from '../ExampleUseSelect/ExampleUseSelect.module.css'
import {DropdownSelect} from "Components/Select/CustomeDropdownSelect/DropdownSelect";
import {useState} from "react";
import {OptionType} from "Components/Select/SelectPalette";

// type OptionType = {id: number, value: string, label: string}[]

const option = [
    { id: 1, value: 'Orange', label: 'Orange' },
    { id: 2, value: 'Apple', label: 'Apple' },
    { id: 3, value: 'Strawberry', label: 'Strawberry' },
    { id: 4, value: 'Pear', label: 'Pear' },

]


export const ExampleUseSelect = () => {

    const [selectedFruit, setSelectedFruit] = useState<OptionType | null>(null); // Используйте OptionType
    const setPhotoHandler = (selectedOption: OptionType ) => {
        debugger
       setSelectedFruit(selectedOption)
    };

    return (
        <div className={style.wrapperExampleSelect}>
            <DropdownSelect
                onChange={setPhotoHandler}
                placeHolder={'... fruit'}
                option={option}
                isMulti={false} />
            <div></div>
        </div>
    )
}