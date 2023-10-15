import React, {useCallback, useState} from "react";
import {Stars} from "Components/CustomeRating/Stars";
import s from  './CustomeRating.module.css'
import {DescriptionDashboard} from "CommonComponents/DescriptionDashboard";

const message = 'oops, maybe there are more stars than statuses. Please add status for your variant'
export type CommentRatingType = 'Useless' | 'Poor' | 'Ok' | 'Good' | 'Excellent' | typeof message | ''

let description = "Introducing our custom Rating component. It is designed in the form of stars and provides a convenient " +
    "way to rate and evaluate. " +
    "The component also includes text messages that inform about the selected rating. If needed, " +
    "the text messages can be disabled by passing false to the showGrade prop. We've also added animation to the stars, " +
    "giving them a touch of dynamism and interactivity. Thank you for your attention, and we hope that our component " +
    "will be valuable for your projects."


export const CustomRating: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null)
    const [commentRating, setCommentRating] = useState<CommentRatingType>('')
    const maxValue = 5;


    const onChangeRating = useCallback((count: number) => {
        setRating(count)
        switch (count) {
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
            default:
                setCommentRating(message)
        }
    }, [rating])

    return (
        <div className={s.container}>
            <DescriptionDashboard title={'Rating Star'} description={description}/>
            <Stars maxValue={maxValue}
                   onChangeRating={onChangeRating}
                   value={rating}
                   showGrade={true}
                   comment={commentRating}

            />
        </div>
    )
}