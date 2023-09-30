
import React from "react";
import style from "./DescriptionsDashboard.module.css"

type DescriptionDashboardType = {
    title?: string
    description?: string
}

export const DescriptionDashboard = (props: DescriptionDashboardType)=> {
    return (
            <div className={style.selectContainer}>
                <div className={style.description}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>

                </div>
        </div>
    )
}