import React from "react"
import { useDispatch } from "react-redux"
import { setData } from "../../../redux/dataManager"

const Tabs = () => {
    const dispatch = useDispatch()
    const changeTab = (e) => {
        let kids = e.target.parentNode.children
        e.target.className === 'unselected' ? e.target.className = 'selected' : e.target.className = 'selected'
        e.target.id === '1' ? kids[2].className = 'unselected' : kids[0].className = 'unselected'
        dispatch(setData([{ stateData: 'selectedTab', data: e.target.innerHTML }]))
    }
    return (
        <>
            <div className="tabs">
                <p id='1' className='selected' onClick={changeTab}>Main</p>
                <p> | </p>
                <p id='2' className='unselected' onClick={changeTab}>About</p>
            </div>
        </>
    )
}
export default Tabs