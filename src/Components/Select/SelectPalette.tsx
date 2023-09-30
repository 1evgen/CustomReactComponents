import {SelectReact} from "./SelectReact/SelectReasct";
import {DropdownSelect} from "./CustomeDropdownSelect/DropdownSelect";
import style from './SelectPalette.module.css'
import {DescriptionDashboard} from "CommonComponents/DescriptionDashboard";
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

export const SelectPalette = () => {
    const description: DescriptionBoardType = {
        ReactSelect: {
            title: 'React select example',
            description:
            "An example of a select from react, simple and reliable. It would be better to use this selector and " +
                "style it for the project. But for practice, custom selection will be considered below.Как тебе описнаие этого селект."
        },
        CustomSelect: {
            title: 'Custom example ',
            description: "This custom select allows you to choose multiple values and record the selected data within " +
                "the select body. You can also disable the ability to select multiple values by setting the isMulti " +
                "parameter to false. The component provides a convenient way to display selected items within the select" +
                "and allows you to remove selected values."
        },
        ExampleUseSelector: {
            title: 'Example Use Selector ',
            description: "\n" +
                "An example of a custom select, isMulti is set to false. When you select a fruit from the list, its picture is displayed."
        },

    }
    const option = [
        {id: 1, value: 'Orange', label: 'Chocolate'},
        {id: 2, value: 'Apple', label: 'Strawberry'},
        {id: 3, value: 'vanilla', label: 'Vanilla'},
        {id: 4, value: 'ice-cream', label: 'Ice-cream'},
        {id: 5, value: 'cake', label: 'Cake'},
        {id: 6, value: 'cola', label: 'Cola'},
    ]

    return (
        <div className={style.containerSelectors}>
            <div>
                <DescriptionDashboard title={description.ReactSelect.title}
                                      description={description.ReactSelect.description}/>
                <SelectReact/>
            </div>

            <div className={style.customComponents}>
                <DescriptionDashboard title={description.CustomSelect.title}
                                      description={description.CustomSelect.description}/>

                <div className={style.planSelectContainer}>
                    <DropdownSelect placeHolder="Select ..."
                                    option={option}
                                    isMulti={true}
                    />
                </div>
            </div>

            <div className={style.useSelectExample}>
                <DescriptionDashboard title={description.ExampleUseSelector.title}
                                      description={description.ExampleUseSelector.description}/>
                <ExampleUseSelect/>

            </div>
        </div>
    )
}