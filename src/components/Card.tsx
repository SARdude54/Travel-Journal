import React from "react"
import { TravelInfoType } from "../data"


export const Card: React.FC<TravelInfoType> = (props) => {
    return (
        <div className="card">
            <img className="card--img" src={props.imageUrl}/>
            <div className="card--info">
                <h5 className="card--country">{props.location}</h5>
                <h1 className="card--location">{props.title}</h1>
                <h5 className="card--travel-date">{props.startDate} - {props.endDate}</h5>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}