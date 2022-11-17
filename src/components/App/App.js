import React, { useEffect } from 'react'
import Papa from 'papaparse'
import rawData from '../data/mockData.csv'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setData } from '../../redux/dataManager'
import MainSection from '../structure/mainSection/mainSection'
import Header from '../structure/header/header'
import SecondarySection from '../structure/secondarySection/secondarySection'
import About from '../structure/about/about'
import studentfakedata from '../data/offLineData'
import '../../style/App.css';
import MainLoading from '../structure/mainSection/mainLoading'


const App = () => {
    const dispatch = useDispatch()
    const { studentData, selectedTab, selectedAssignment, isLoaded } = useSelector(state => state.dataManager)

    useEffect((() => {
        console.log('fetching data')
        Papa.parse(rawData, {
            download: true,
            complete: (results) => {
                let usableData = {}
                results.data.splice(0, 1)
                results.data.forEach(element => {
                    const [student, assignment, difficulty, fun] = element
                    if (usableData[student] === undefined) {
                        usableData[student] = {
                            [assignment]: { difficulty, fun }
                        }
                    } else {
                        usableData[student][assignment] = { difficulty, fun }
                    }
                });
                dispatch(setData([{ stateData: 'studentData', data: usableData }]))
            }
        })
    }), [])


    useEffect((() => {
        if (studentData) {
            const getUsers = async () => {
                console.log('fetching from url')
                try {
                    let numOfStudents = Object.keys(studentData).length
                    let url = `https://randomuser.me/api/?inc=dob,email,phone,picture&results=${numOfStudents}`
                    console.log(url)
                    let response = await fetch(url)
                    let data = await response.json()
                    data.results.forEach((element, i) => {
                        element.name = Object.keys(studentData)[i]
                    })
                    dispatch(setData([{ stateData: 'studentPersonalData', data: data.results }]))
                    console.log('data available in State')
                } catch (error) {
                    dispatch(setData([{ stateData: 'studentPersonalData', data: studentfakedata }]))

                    console.log('Something went wrong. Using offline data instead. Available now in State')
                }
            }
            getUsers()

        }
    }), [studentData])




    return (
        <div className="App">
            <div className='dataVisualisation'>
                <Header className='header' />

                {selectedTab === 'About'
                    ? < About className={'about'} />
                    : (isLoaded === false
                        ? <MainLoading className='mainBarGraphic' />
                        : <MainSection className='mainBarGraphic' />)}
                {(selectedAssignment.name !== undefined && selectedTab !== 'About')
                    ? <SecondarySection className='SecondarySection' />
                    : <SecondarySection className='SecondarySectionHidden' />}
            </div>
        </div>
    )
}

export default App