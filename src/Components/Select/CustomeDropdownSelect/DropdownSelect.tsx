import React, {useEffect, useState} from "react";
import "./DropdownSelect.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {OptionType} from "../SelectPalette";
import ClearIcon from '@mui/icons-material/Clear';
type DropdownSelectType = {
    placeHolder: string
    // option?: Array<OptionType>
    option: any
    isMulti: boolean
    onChange?: (selectedOption: any )=> void
}


export const DropdownSelect: React.FC<DropdownSelectType> = ({
                                                                 onChange,
                                                                 placeHolder,
                                                                 option,
                                                                 isMulti
                                                             })=> {

    const [showMenu, setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue]= useState<OptionType | null | OptionType[] >(isMulti ? [] : null)
    // left click anywhere and the list will be hidden
    useEffect(()=> {
        const handler = ()=> setShowMenu(false)
        window.addEventListener('click', handler)
        return ()=> {
            window.removeEventListener("click", handler)
        }
    },[showMenu])

    // open & close menu list
    const handlerInputClick = (e: React.MouseEvent<HTMLDivElement>)=> {
        e.stopPropagation()
        setShowMenu(!showMenu)
    }
    // remove options
    const removeOption = (option: OptionType) => {
        if (isMulti && Array.isArray(selectedValue)) {
            const updatedValue = selectedValue.filter((o) => o.value !== option.value);
            return updatedValue;
        } else {
            return null
        }
    }


    const onTagRemove = (e:  React.MouseEvent<HTMLSpanElement>, option: OptionType)=> {
        e.stopPropagation();
        setSelectedValue(removeOption(option));
    }

    // show chosen element in select,
    const getDisplay = () => {
        if (!selectedValue || (Array.isArray(selectedValue) && selectedValue.length === 0)) {
            return placeHolder
        }
        if (isMulti) {
            debugger
            return (
                <div className="dropdown-text">
                    {Array.isArray(selectedValue) && selectedValue.map((option) => (
                        <div key={option.value} className="dropdown-tag-item">
                            {option.label}
                            <span onClick={(e) => onTagRemove(e, option)}
                                  className="dropdown-tag-close"><ClearIcon/></span>
                        </div>
                    ))}
                </div>
            )
        }
        return !Array.isArray(selectedValue) && selectedValue.label;
    }
    // set element in select
    const onItemClick = (option: OptionType) => {
        let newValue: any;
        if (isMulti) {
            if (selectedValue && Array.isArray(selectedValue)) { // Проверяем, что selectedValue не null и это массив
                if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
                    newValue = removeOption(option);
                } else {
                    newValue = [...selectedValue, option];
                }
            } else {
                // Если selectedValue null или не массив, начинаем с пустого массива с этим элементом
                newValue = [option];
            }
        } else {
            newValue = option;
        }
        if (onChange){
            onChange(newValue)
        }
        setSelectedValue(newValue);
    };

    // check chosen element
    const isSelected = (option: OptionType) => {
          if(isMulti){
              return (Array.isArray(selectedValue) && selectedValue.find(el => el.id === option.id))
        }
        if(!selectedValue){
            return false
        }
        return (!Array.isArray(selectedValue) && selectedValue.value === option.value)
    }

    return (
        <div className={'custom-select'}>

                <div className="dropdown-container">
                    <div onClick={handlerInputClick} className="dropdown-input">
                        <div className="dropdown-selected-value">{getDisplay()}</div>
                        <div className="dropdown-tools">
                            <div className="dropdown-tool">
                                <ArrowDropDownIcon/>
                            </div>
                        </div>
                    </div>
                    {showMenu &&
                        <div className={"dropdown-menu"}>
                            {option.map((option: any) => (
                                <div key={option.id}
                                     className={`dropdown-item ${isSelected(option) && "selected"}`}
                                     onClick={() => onItemClick(option)}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    }
                </div>
        </div>
    )
}