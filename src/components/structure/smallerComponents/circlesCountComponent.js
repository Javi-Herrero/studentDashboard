import React from "react"
import '../../../style/Circles.css'

const CirclesCount = (props) => {

    return (
        <div className='sideInfoMain'>
            <div className='circleUp'>
                <div>
                    <span className='number'>{props.value1}</span>
                </div>
                <p>{props.label1}</p>
            </div>
            <div className='circleDown'>
                <div>
                    <span className='number'>{props.value2}</span>
                </div>
                <p>{props.label2}</p>
            </div>
        </div>
    )
}
export default CirclesCount