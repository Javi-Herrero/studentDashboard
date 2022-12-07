import React from "react"
import { setData } from '../../../redux/dataManager'
import { useSelector, useDispatch } from 'react-redux'

const DropDown = () => {

    const dispatch = useDispatch()
    const { studentData, showStudentList } = useSelector(state => state.dataManager)

    const handleEvent = (e) => {
        const { value } = e.target
        if (value == 2) {
            dispatch(setData([{ stateData: 'showStudentList', data: true }]))
        } else {
            dispatch(setData([{ stateData: 'showStudentList', data: false }, { stateData: 'selectedStudent', data: '' }]))
        }
    }
    const selectStudent = (e) => {
        const { value } = e.target
        if (value !== 'Select student') {
            return dispatch(setData([{ stateData: 'selectedStudent', data: value }]))

        }

    }
    let studentNames = Object.keys(studentData)
    let options = []
    let studentOptions = <select onChange={selectStudent}>{options}</select>
    studentNames.unshift('Select student')
    studentNames.forEach((element, i) => { options.push(<option key={i} value={element}>{element}</option>) })

    return (
        <nav>
            <form >
                <select onChange={handleEvent}>
                    <option value='1'>On average  </option>
                    <option value='2'>Per Student </option>
                </select>
                {showStudentList == true ? studentOptions : null}
            </form>
        </nav>
    )
}
export default DropDown