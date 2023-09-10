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
    CustomMultiSelect: BoardType
}

export const SelectPalette = ()=> {
    const description: DescriptionBoardType = {
        ReactSelect: {title: 'React select example',
            description:"This is the first step to understanding how a select element works in React."},
        CustomSelect: {
            title: 'Custom example',
            description:" This is a relatively simple select. You can select a value, it will be displayed in the window" +
                "and the selected value will be highlighted"
        },
        CustomMultiSelect: {
            title: 'Custom multi selector example',
            description:"A more complex selector that allows you to save the selected value in the window," +
                " after which you can delete unnecessary values"
        }
    }

    const option = [
        { id: 1, value: 'chocolate', label: 'Chocolate' },
        { id: 2, value: 'strawberry', label: 'Strawberry' },
        { id: 3, value: 'vanilla', label: 'Vanilla' },
        { id: 4, value: 'ice-cream', label: 'Ice-cream' },
        { id: 5, value: 'cake', label: 'Cake' },
        { id: 6, value: 'cola', label: 'Cola' },
    ]


    return (
        <>
        <div className={style.containerSelectors} >
                <SelectReact description={description.ReactSelect}  />
                <DropdownSelect placeHolder="Select ..."
                                option={option}
                                description={description.CustomSelect}
                                isMulti={false}
                />
                <DropdownSelect placeHolder="Select ..."
                            option={option}
                            description={description.CustomMultiSelect}
                            isMulti={true}
                />
        </div>
            <div>

            </div>
        </>
    )
}