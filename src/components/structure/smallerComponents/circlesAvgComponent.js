import React from "react"
import '../../../style/Circles.css'

const CirclesAvg = (props) => {

    return (
        <div className='circleContainer'>
            <div className='circleUp'>
                <div>
                    <span className='number'>{props.value1}</span>
                    <span className='fraction'> / 5</span>
                </div>
                <p>{props.label1}</p>
            </div>
            <div className='circleDown'>
                <div>
                    <span className='number'>{props.value2}</span>
                    <span className='fraction'> / 5</span>
                </div>
                <p>{props.label2}</p>
            </div>
        </div>
    )
}
export default CirclesAvg