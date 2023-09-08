
import React, { ChangeEvent, useState } from "react";
import style from './SelectReact.module.css';

type DesertListType = 'chocolate' | 'strawberry' | 'vanilla';

type SelectMUIType = {};

export const SelectReact: React.FC<SelectMUIType> = ({}) => {
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
        <div className={style.selectContainer}>
            <div className={style.selectWrapper}>
                <select className={style.Select} value={selectedDesert} onChange={onChangeDesert}>
                    {selectDesert.map((el) => (
                        <option key={el.id} label={el.label} value={el.value}>
                            {el.value}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};