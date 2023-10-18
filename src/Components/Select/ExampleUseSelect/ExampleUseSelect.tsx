import style from '../ExampleUseSelect/ExampleUseSelect.module.css'
import {DropdownSelect} from "Components/Select/CustomeDropdownSelect/DropdownSelect";
import {useState} from "react";
import {OptionType} from "Components/Select/SelectPalette";
import Apple from '../img/apple1.png'
import Orange from '../img/orange.png'
import Strawberry  from '../img/strawberry.png'
import Pear  from '../img/pear.png'

const option = [
    { id: 1, value: Orange, label: 'Orange' },
    { id: 2, value: Apple, label: "Apple" },
    { id: 3, value: Strawberry, label: 'Strawberry' },
    { id: 4, value: Pear, label: 'Pear' },
]

export const ExampleUseSelect = () => {
    const defaultFruit: OptionType = { id: 2, value: Apple, label: "Apple" }
    const [selectedFruit, setSelectedFruit] = useState<OptionType>(defaultFruit); // Используйте OptionType
    const setPhotoHandler = (selectedOption: OptionType ) => {
       setSelectedFruit(selectedOption)
    };
    return (
        <div className={style.wrapperExampleSelect}>
            <div>
                <DropdownSelect onChange={setPhotoHandler}  placeHolder={selectedFruit.label} option={option} isMulti={false} />
            </div>
            <div className={style.containerPhoto}>

                {<img  src={selectedFruit ? selectedFruit.value : '' }
                       alt={selectedFruit?.label || ''} /> }
            </div>
        </div>
    )
}