import React from "react"
import { useDispatch } from "react-redux"
import { setData } from "../../../redux/dataManager"
import '../../../style/Button.css'

const CloseButton = () => {
    const dispatch = useDispatch()
    const closeSection = () => {
        document.querySelector('.header').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
        document.querySelector('.SecondarySection').classList.add('fadeOut')
        setTimeout((() => dispatch(setData([{ stateData: 'selectedAssignment', data: {} }]))), 350)
    }
    return (<button title='Close this section' className="button" type="button" onClick={closeSection}><div className="arrow"></div></button>)
}
export default CloseButton