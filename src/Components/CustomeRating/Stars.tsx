import React, {useCallback, useState} from "react";
import style from '../CustomeRating/StarsStyle.module.css'
import {IoMdStar} from "react-icons/io";
//LiaStarHalf
//IoStarHalf

type CustomRatingType = {
    maxValue: number
    onChangeRating: (count: number)=> void
    value: number | null
}

export const Stars: React.FC<CustomRatingType> = ({
                                                      maxValue,
                                                      onChangeRating,
                                                      value
                                                  }) => {

    return (
        <div>
            {Array.from({length: maxValue}).map((_,i) => {
                let currentStar = i + 1
                return (
                    <span
                        key={currentStar}
                          className={value && currentStar <= value  ? style.isColorStar: style.testNon}
                          onClick={()=> onChangeRating(currentStar)}>{<IoMdStar className={style.stars}/>}</span>
                )})
            }
        </div>
    )
}