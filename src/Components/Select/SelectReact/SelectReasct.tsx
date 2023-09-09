
import React, { ChangeEvent, useState } from "react";
import style from './SelectReact.module.css';
import {DescriptionDashboard} from "../../../CommonComponents/DescriptionDashboard";
import {SelectComponentProps} from "../SelectPalette";

type DesertListType = 'chocolate' | 'strawberry' | 'vanilla';

type SelectMUIType = {
    description: SelectComponentProps<"ReactSelect">
};

export const SelectReact: React.FC<SelectMUIType> = ({
                                                         description
                                                     }) => {
    const [selectedDesert, setSelectedDesert] = useState<DesertListType>('vanilla');
    const selectDesert = [
        { id: 1, value: 'chocolate', label: 'Chocolate' },
        { id: 2, value: 'strawberry', label: 'Strawberry' },
        { id: 3, value: 'vanilla', label: 'Vanilla' }
    ];

    const onChangeDesert = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedDesert(e.currentTarget.value as DesertListType);
    };

    return (
        <div>
            <DescriptionDashboard />
            <div className={style.selectWrapper}>
                <select
                        className={style.select}
                        value={selectedDesert}
                        onChange={onChangeDesert}>
                    {selectDesert.map((el) => (
                        <option placeholder={el.label} className={style.option} id={"select-id"} key={el.id}  value={el.value}>
                            {el.value}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
};