import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../../../redux/dataManager'
import '../../../style/MainSection.css'

const MainLoading = (props) => {
    const dispatch = useDispatch()
    const { studentPersonalData } = useSelector(state => state.dataManager)

    if (studentPersonalData) {
        setTimeout((() => {
            dispatch(setData([{ stateData: 'isLoaded', data: true }]))
        }), 750)
    }



    return (
        <div className={props.className}>
            <div className='loading'>
                <h1 >LOADING...</h1>
            </div>
        </div>
    )
}
export default MainLoading