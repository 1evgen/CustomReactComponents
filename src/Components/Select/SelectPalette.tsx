import {SelectReact} from "./SelectReact/SelectReasct";
import {DropdownSelect} from "./CustomeDropdownSelect/DropdownSelect";
import style from './SelectPalette.module.css'

export type OptionType = {
    id: number
    value: string
    label: string
}

type DescriptionType<D> = {
    title: string;
    description: string;
};

export type SelectComponentProps<D> = {
    description: DescriptionType<D>;
};


export const SelectPalette = ()=> {
    const description = {
        ReactSelect: {title: 'React select example',
            description:"This is the first step to understanding how a select element works in React." +
            " It may seem easy, but it's important to understand"},
        CustomSelect: {
            title: 'Custom dropdown example',
            description:"This is the first step to understanding how a select element works in React." +
                " It may seem easy, but it's important to understand"
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
                <DropdownSelect placeHolder="Select ..." option={option}  />
        </div>
    )
}