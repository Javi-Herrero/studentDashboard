import React from "react"
import { useSelector } from "react-redux"
import { Cell, LabelList, Legend, Pie, PieChart, ResponsiveContainer, } from "recharts"
import colors from './colors'


const DistributionPieChart = () => {
    const { selectedAssignment } = useSelector(state => state.dataManager)
    const distributionFun = []
    const distributionDif = []
    if (selectedAssignment.voteDistribution !== undefined) {
        for (const key in selectedAssignment.voteDistribution.fun) {
            let conditionalPercentageRender
            // eslint-disable-next-line no-unused-expressions
            selectedAssignment.voteDistribution.fun[key] > 0 ? conditionalPercentageRender = `${selectedAssignment.voteDistribution.fun[key]}%` : null
            distributionFun.push({ name: key.replace('_', ' '), value: selectedAssignment.voteDistribution.fun[key], percentage: conditionalPercentageRender })
        }
    }
    if (selectedAssignment.voteDistribution !== undefined) {
        for (const key in selectedAssignment.voteDistribution.difficulty) {
            let conditionalPercentageRender
            // eslint-disable-next-line no-unused-expressions
            selectedAssignment.voteDistribution.difficulty[key] > 0 ? conditionalPercentageRender = `${selectedAssignment.voteDistribution.difficulty[key]}%` : null
            distributionDif.push({ name: key.replace('_', ' '), value: selectedAssignment.voteDistribution.difficulty[key], percentage: conditionalPercentageRender })
        }
    }
    const colorsPie = [colors.orangeDarkBar, colors.yellowDarkBar, colors.greenBar, colors.greenDarkBar, colors.blueBar]

    return (
        <div className='pieChart'>
            <div className="description">
                Vote distribution on fun and difficulty in this assignment:
            </div>
            <p className="label1">fun  </p>
            <p className="label2">difficulty</p>
            <ResponsiveContainer width="100%" height='100%' >
                <PieChart  >
                    <Legend layout={'veretical'} dataKey="value" verticalAlign={'middle'} />
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={distributionFun}
                        cx="35%"
                        cy="65%"
                        innerRadius={60}
                        outerRadius={95}
                        paddingAngle={5}
                    >
                        {distributionFun.map((element, index) => <Cell key={`cell-${index}`} fill={colorsPie[index]} />)}
                        <LabelList dataKey={'percentage'} stroke={colors.lightMarks} fontSize={15} position={'outside'} offset={10} />
                    </Pie>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={distributionDif}
                        cx="75%"
                        cy="65%"
                        innerRadius={60}
                        outerRadius={95}
                        paddingAngle={5}
                        legendType={'none'}
                    >{distributionDif.map((element, index) => <Cell key={`cell-${index}`} fill={colorsPie[index]} />)}
                        <LabelList dataKey={'percentage'} stroke={colors.lightMarks} fontSize={15} position={'outside'} offset={10} />
                    </Pie>
                </PieChart>
            </ResponsiveContainer >
        </div>
    )
}
export default DistributionPieChart