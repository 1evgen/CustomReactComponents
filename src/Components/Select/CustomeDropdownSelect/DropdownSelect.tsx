import React, {useEffect, useState} from "react";
import "./DropdownSelect.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {BoardType, OptionType} from "../SelectPalette";
import style from "../SelectReact/SelectReact.module.css";
import {DescriptionDashboard} from "../../../CommonComponents/DescriptionDashboard";
type DropdownSelectType = {
    placeHolder: string
    option: Array<OptionType>
    description: BoardType
}

export const DropdownSelect: React.FC<DropdownSelectType> = ({
                                                                 placeHolder,
                                                                 option,
                                                                 description
                                                             })=> {

    const [showMenu, setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue]= useState<OptionType | null>(null)

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

    // show chosen element in select,
    const getDisplay = () => {
        if(selectedValue){
            return selectedValue.label
        } else {
            return placeHolder
        }
    };

    // set element in select
    const onItemClick = (option: OptionType)=> setSelectedValue(option)

    // check chosen element
    const isSelected = (option: OptionType) => {
        if(!selectedValue){
            return false
        }else {
            return  selectedValue.value === option.value
        }
    }


    return (
        <div className={'custom-select'}>
        <DescriptionDashboard title={description.title} description={description.description}/>
        <div className="dropdown-container">
            <div onClick={handlerInputClick} className="dropdown-input">
                <div className="dropdown-selected-value">{getDisplay()}</div>
                <div  className="dropdown-tools">
                    <div className="dropdown-tool">
                        <ArrowDropDownIcon/>
                    </div>
                </div>
            </div>
            {showMenu &&
                <div className={"dropdown-menu"}>
                    {option.map((option) => (
                        <div key={option.id}
                             className={`dropdown-item ${isSelected(option) && "selected"}`}
                             onClick={()=>onItemClick(option)}
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