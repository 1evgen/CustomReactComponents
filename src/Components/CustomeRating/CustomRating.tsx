import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Stars} from "Components/CustomeRating/Stars";
import style from '../CustomeRating/StarsStyle.module.css'
//import { IconName } from "react-icons/ci";
// CiFaceFrown CiFaceMeh CiFaceSmile


const message = 'oops, maybe there are more stars than statuses. Please add status for your variant'
export type CommentRatingType = 'Useless' | 'Poor' | 'Ok' | 'Good' | 'Excellent' | typeof message | ''

export const CustomRating: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null)
    const [commentRating, setCommentRating] = useState<CommentRatingType>('')
    const maxValue = 5;



    const onChangeRating = useCallback( (count: number) => {
        setRating(count)
        switch (count){
            case 1 : {
                setCommentRating("Useless")
                break
            }
            case 2: {
                setCommentRating('Poor')
                break
            }
            case 3: {
                setCommentRating("Ok")
                break
            }
            case 4: {
                setCommentRating("Good")
                break
            }
            case 5: {
                setCommentRating("Excellent")
                break
            }
            default: setCommentRating(message)
        }
    }, [rating])

        return (
            <div>
                <Stars maxValue={maxValue}
                       onChangeRating={onChangeRating}
                       value={rating}
                       showGrade = {true}
                       comment = {commentRating}

                />
            </div>
        )
}