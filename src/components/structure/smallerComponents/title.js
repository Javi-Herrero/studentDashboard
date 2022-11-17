import React from "react"
import '../../../style/Title.css'

const Title = (props) => {
    let extras, nav
    props.className === 'head'
        ? extras = props.extras
        : nav = props.extras

    return (
        <div className='title'>
            <span>
                <h2 className={props.className}>{props.title}</h2>
                {nav}
            </span>
            {extras}
            <hr />
            <br />
        </div>
    )
}
export default Title