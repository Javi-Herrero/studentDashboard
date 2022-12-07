import React from 'react'
import { useSelector } from 'react-redux'
import CirclesCount from '../smallerComponents/circlesCountComponent'
import DropDown from '../smallerComponents/dropDownMenu'
import Title from '../smallerComponents/title'
import StudentContact from '../smallerComponents/studentContact'
import MainBarGraph from '../../graphs/mainBarGraph'
import '../../../style/MainSection.css'

const MainSection = (props) => {
    /// CALCULATE THE AVERAGE DIFFICULTY AND FUN OF ALL ASSIGNMENTS AND GATHER THE VALORATION OF THE SELECTED STUDENT, 
    //  THEN PASS IT AS data[]TO THE GRAPH

    const { studentData, selectedStudent } = useSelector(state => state.dataManager)

    let studentNames = Object.keys(studentData)
    let assignmentPerStudent = Object.values(studentData)
    let funAvgPerAssign = {}
    let difAvgPerAssign = {}
    let funValuesSelectedStudent = {}
    let difValuesSelectedStudent = {}
    let data = []
    let amountOfStudents = studentNames.length


    assignmentPerStudent.forEach((element, i) => {
        for (const key in element) {

            let funValue = parseInt(element[key].fun)
            let difficultyValue = parseInt(element[key].difficulty)

            funAvgPerAssign[key] === undefined
                ? funAvgPerAssign[key] = funValue
                : funAvgPerAssign[key] = ((funAvgPerAssign[key] * i) + funValue) / (i + 1)

            difAvgPerAssign[key] === undefined
                ? difAvgPerAssign[key] = difficultyValue
                : difAvgPerAssign[key] = ((difAvgPerAssign[key] * i) + difficultyValue) / (i + 1)
        }
    })

    for (const key in studentData[selectedStudent]) {
        funValuesSelectedStudent[key] = studentData[selectedStudent][key].fun
        difValuesSelectedStudent[key] = studentData[selectedStudent][key].difficulty
    }

    const sendDataToGraph = (funObj, difOjb) => {
        for (const key in funObj) {
            data.push(
                {
                    'Name': key.split(' ')[0],
                    'Fun': funObj[key],
                    'Dif': difOjb[key]
                }
            )
        }
    }

    if (selectedStudent) {
        sendDataToGraph(funValuesSelectedStudent, difValuesSelectedStudent)
    } else {
        sendDataToGraph(funAvgPerAssign, difAvgPerAssign)
    }
    let amountOfAssignments = data.length

    return (
        <div className={props.className}>
            <Title title={'Assignment evaluation'} extras={<DropDown />} />
            <div className='chartAndCircles'>
                <MainBarGraph
                    amountOfStudents={amountOfStudents}
                    data={data}
                    funAvgPerAssign={funAvgPerAssign}
                    difAvgPerAssign={difAvgPerAssign}
                />
                {selectedStudent
                    ? <StudentContact />
                    : <CirclesCount
                        value1={amountOfStudents}
                        label1={'Students'}
                        value2={amountOfAssignments}
                        label2={'Assignments'} />
                }
            </div>
        </div>
    )
}
export default MainSection