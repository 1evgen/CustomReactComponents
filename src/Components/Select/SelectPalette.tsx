import {SelectReact} from "./SelectReact/SelectReasct";
import {DropdownSelect} from "./CustomeDropdownSelect/DropdownSelect";
import style from './SelectPalette.module.css'
import {DescriptionDashboard} from "CommonComponents/DescriptionDashboard";
import {Photo} from "@mui/icons-material";
import {ExampleUseSelect} from "Components/Select/ExampleUseSelect/ExampleUseSelect";

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
    ExampleUseSelector: BoardType
}

export const SelectPalette = ()=> {
    const description: DescriptionBoardType = {
        ReactSelect: {title: 'React select example',
            description:"This is the first step to understanding how a select element works in React."},
        CustomSelect: {
            title: 'Custom example ',
            description:" There are a relatively simple select and Custom multi selector example. You can select a value," +
                " it will be displayed in the window  and the selected value will be highlighted. Also " +
                "A more complex selector that allows you to save the selected value in the window"
        },
        ExampleUseSelector: {
            title: 'ExampleUseSelector ',
            description:"We ara try use Selector for switch some pfoto "
        },

    }
    const option = [
        { id: 1, value: 'Orange', label: 'Chocolate' },
        { id: 2, value: 'Apple', label: 'Strawberry' },
        { id: 3, value: 'vanilla', label: 'Vanilla' },
        { id: 4, value: 'ice-cream', label: 'Ice-cream' },
        { id: 5, value: 'cake', label: 'Cake' },
        { id: 6, value: 'cola', label: 'Cola' },
    ]

    return (
        <div className={style.containerSelectors} >

            <div >
                <DescriptionDashboard title={description.ReactSelect.title} description={description.ReactSelect.description}/>
                <SelectReact />
            </div>


                <div className={style.customComponents}>
                    <DescriptionDashboard title={description.CustomSelect.title}
                                          description={description.CustomSelect.description}/>

                    <div className={style.planSelectContainer}>
                    <DropdownSelect placeHolder="Select ..."
                                    option={option}
                                    isMulti={false}
                    />
                    <DropdownSelect placeHolder="Select ..."
                                    option={option}
                                    isMulti={true}
                    />
                </div>
                </div>

            <div className={style.useSelectExample}>
                    <DescriptionDashboard title={description.ExampleUseSelector.title}
                                          description={description.ExampleUseSelector.description}/>
                    <DropdownSelect placeHolder={'photo'} option={option} isMulti={false} />
                    <ExampleUseSelect />

            </div>
        </div>
    )
}