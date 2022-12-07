import React from 'react'
import { useSelector } from 'react-redux'
import CirclesAvg from '../smallerComponents/circlesAvgComponent'
import Title from '../smallerComponents/title'
import DistributionPieChart from '../../graphs/piechart'
import SecondaryBarChart from '../../graphs/secondaryBarChart'
import '../../../style/SecondarySection.css'
import CloseButton from '../smallerComponents/closeButton'



const SecondarySection = (props) => {
    const { selectedAssignment } = useSelector(state => state.dataManager)
    let names = []
    let funBar = []
    let difBar = []
    if (selectedAssignment.valorationPerStudent !== undefined) {

        for (const key in selectedAssignment.valorationPerStudent) {
            names.push(key)
            let coordinatesFun = { x: key, y: selectedAssignment.valorationPerStudent[key].fun }
            let coordinatesDif = { x: key, y: selectedAssignment.valorationPerStudent[key].difficulty }
            funBar.push(coordinatesFun)
            difBar.push(coordinatesDif)
        }
    }

    return (
        <div className={props.className}>
            <Title
                title={`More info about:  '${selectedAssignment.name}'`}
                extras={<CloseButton />} />
            <div className='graphAndCircleContainer'>
                <DistributionPieChart />
                <CirclesAvg
                    value1={selectedAssignment.avgFunSelectedAss}
                    label1={'Avg fun'}
                    value2={selectedAssignment.avgDifSelectedAss}
                    label2={'Avg dif.'} />
                <SecondaryBarChart />
            </div>
        </div >
    )
}
export default SecondarySection