import {DropdownSelect} from "../CustomeDropdownSelect/DropdownSelect";


export const ImageSelector = ()=> {

    const images = [
        { id: 1, value: 'BMW', label: 'BMW' },
        { id: 2, value: 'KIA', label: 'KIA' },
        { id: 3, value: 'Opel', label: 'Opel' },
        { id: 4, value: 'Mazda', label: 'Mazda' },
    ]

    return (
        <div>
            <DropdownSelect placeHolder={'desert'} option={images} isMulti={false} />
        </div>
    )
}