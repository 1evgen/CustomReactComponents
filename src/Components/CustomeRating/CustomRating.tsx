import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Stars} from "Components/CustomeRating/Stars";
//import { IconName } from "react-icons/ci";
// CiFaceFrown CiFaceMeh CiFaceSmile

export const CustomRating: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null)
    const maxValue = 5;
    const onChangeRating = useCallback( (count: number) => {
        setRating(count)
    }, [rating])


    const memoizedStars = useMemo(() =>
        <Stars maxValue={maxValue} onChangeRating={onChangeRating} value={rating} />,
        [maxValue, onChangeRating, rating]);
        return (
            <div>
                {memoizedStars}
            </div>
        )
}