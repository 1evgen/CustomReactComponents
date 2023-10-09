import React, { useCallback, useEffect, useState } from "react";
import style from '../CustomeRating/StarsStyle.module.css';
import { IoMdStar } from "react-icons/io";
import { CommentRatingType } from "Components/CustomeRating/CustomRating";

type CustomRatingType = {
    maxValue: number;
    onChangeRating: (count: number) => void;
    value: number | null;
    showGrade: boolean;
    comment: CommentRatingType;
};

export const Stars: React.FC<CustomRatingType> = ({
                                                      maxValue,
                                                      onChangeRating,
                                                      value,
                                                      showGrade,
                                                      comment
                                                  }) => {
    const [activeStar, setActiveStar] = useState<number | null>(null);

    /// functions for choose stars
    const onFocusForStars = useCallback((currentStar: number) => {
        setActiveStar(currentStar);
    }, [activeStar]);

    useEffect(() => {
        // Функция для применения анимации к звездам по их id
        function applyAnimationById(id: string) {
            const star = document.getElementById(id);
            if (star) {
                star.classList.add(style.bounce);
                setTimeout(() => {
                    star.classList.remove(style.bounce);
                }, 1000);
            }
        }
        // Если value изменилось, применяем анимацию
        if (value !== null) {
            for (let i = 1; i <= value; i++) {
                applyAnimationById(`star-${i}`);
            }
        }
    }, [value]);

    return (
        <div className={style.starContainer}>
            {Array.from({ length: maxValue }).map((_, i) => {
                let currentStar = i + 1;
                return (
                    <span
                        id={`star-${currentStar}`}
                        key={currentStar}
                        className={activeStar && currentStar <= activeStar ? style.isColorStar : style.isNotColorStar}
                        onMouseOver={() => onFocusForStars(currentStar)}
                        onMouseLeave={() => setActiveStar(value)}
                        onClick={() => {
                            onChangeRating(currentStar);
                        }}
                    >
            {<IoMdStar className={style.stars} />}
          </span>
                );
            })}
            {showGrade && <span className={style.grade}>{comment}</span>}
        </div>
    );
};