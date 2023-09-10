import {SelectReact} from "./SelectReact/SelectReasct";
import {DropdownSelect} from "./CustomeDropdownSelect/DropdownSelect";
import style from './SelectPalette.module.css'

export type OptionType = {
    id: number
    value: string
    label: string
}

export type BoardType = {
    title: string
    description: string
}

type DescriptionBoardType = {
    ReactSelect: BoardType
    CustomSelect: BoardType
}

export const SelectPalette = ()=> {
    const description: DescriptionBoardType = {
        ReactSelect: {title: 'React select example',
            description:"This is the first step to understanding how a select element works in React."},
        CustomSelect: {
            title: 'Custom dropdown example',
            description:" The custom select. We can use dropdown, filter for value un select"
        }
    }

    const option: Array<OptionType> = [
        { id: 1, value: 'chocolate', label: 'Chocolate' },
        { id: 2, value: 'strawberry', label: 'Strawberry' },
        { id: 3, value: 'vanilla', label: 'Vanilla' },
        { id: 4, value: 'ice-cream', label: 'Ice-cream' },
        { id: 5, value: 'cake', label: 'Cake' },
        { id: 6, value: 'cola', label: 'Cola' },
    ]


    return (
        <div className={style.container} >
                <SelectReact description={description.ReactSelect}  />
                <DropdownSelect placeHolder="Select ..."
                                option={option}
                                description={description.CustomSelect}
                />
        </div>
    )
}