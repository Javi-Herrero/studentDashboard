import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { setData } from '../../redux/dataManager'
import colors from './colors'
import objCalculator from './voteDistribution'


const MainBarGraph = (props) => {
    // PASSING THE DATA OF THE SELECTED ASSIGNMENT (avg of fun and dif and valoration per student) 
    ///TO THE STATE SO THAT IT CAN BE USED BY THE OTHER COMPONENTS
    const dispatch = useDispatch()
    const { studentData, selectedAssignment } = useSelector(state => state.dataManager)
    const clickedAssignent = (click) => {
        let assignmentName = Object.keys(props.funAvgPerAssign).find(e => e.split(' ')[0] === click.Name)
        let avgFunSelectedAss = props.funAvgPerAssign[assignmentName]
        let avgDifSelectedAss = props.difAvgPerAssign[assignmentName]
        let valorationPerStudent = []
        const voteDistribution = {
            difficulty: { voted_1: 0, voted_2: 0, voted_3: 0, voted_4: 0, voted_5: 0 },
            fun: { voted_1: 0, voted_2: 0, voted_3: 0, voted_4: 0, voted_5: 0 }
        }
        for (const key in studentData) {
            valorationPerStudent.push({ name: key, fun: studentData[key][assignmentName].fun, difficulty: studentData[key][assignmentName].difficulty })
        }
        objCalculator(valorationPerStudent, voteDistribution, props)

        dispatch(setData([{ stateData: 'selectedAssignment', data: { name: assignmentName, avgFunSelectedAss, avgDifSelectedAss, valorationPerStudent, voteDistribution } }]))
        selectedAssignment.name === undefined && setTimeout((() => document.querySelector('.SecondarySection').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })), 85)
    }

    return (
        <div className='mainChart'>
            <p className='infoText'>Click on the bars for more info about an assignment.</p>

            <ResponsiveContainer width="100%" height="100%">

                <BarChart barCategoryGap={0} width={750} height={325} data={props.data}>
                    <CartesianGrid strokeDasharray="0.2" vertical={false} />
                    <XAxis dataKey="Name" stroke={colors.lightMarks} />
                    <YAxis allowDecimals={false} type="number" domain={[0, 5]} tickCount={6} stroke={colors.lightMarks} />
                    <Tooltip offset={23} cursor={{ fill: colors.lightMarks, opacity: 0.5 }} contentStyle={{ color: colors.text, backgroundColor: colors.widgetBackgound }} />
                    <Legend />
                    <Bar dataKey="Fun" fill={colors.blueBar} barSize={20} onClick={clickedAssignent} style={{ cursor: 'pointer' }} >
                        {
                            props.data.map((entry, index) => {
                                if (selectedAssignment.name === undefined) {
                                    return < Cell key={`cell-${index}`} fill={colors.blueBar} />
                                } else {
                                    return < Cell key={`cell-${index}`} strokeWidth={2.5} stroke={selectedAssignment.name.split(' ')[0] === entry.Name ? '#fff' : 'none'} fill={selectedAssignment.name.split(' ')[0] !== entry.Name ? colors.blueBarDim : colors.blueBar} />
                                }
                            })
                        }
                    </Bar>
                    <Bar dataKey="Dif" fill={colors.tuscany} barSize={20} onClick={clickedAssignent} style={{ cursor: 'pointer' }}>
                        {
                            props.data.map((entry, index) => {
                                if (selectedAssignment.name === undefined) {
                                    return < Cell key={`cell-${index}`} fill={colors.tuscany} />
                                } else {
                                    return < Cell key={`cell-${index}`} strokeWidth={2.5} stroke={selectedAssignment.name.split(' ')[0] === entry.Name ? '#fff' : 'none'} fill={selectedAssignment.name.split(' ')[0] !== entry.Name ? colors.tuscanyDim : colors.tuscany} />
                                }
                            })
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default MainBarGraph