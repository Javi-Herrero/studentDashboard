import React from "react"
import { useSelector } from "react-redux"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import colors from './colors'






const SecondaryBarChart = () => {
    const { selectedAssignment } = useSelector(state => state.dataManager)
    let data = selectedAssignment.valorationPerStudent

    return (
        <div className="secondaryBarChart">
            <div className="description">
                <p>What each student think about this assignment:</p>
            </div>
            <ResponsiveContainer width='100%' height="80%" >

                <BarChart barCategoryGap={1} barGap={0} width={750} height={450} data={data}>
                    <CartesianGrid strokeDasharray="0.2" vertical={false} />
                    <XAxis dataKey="name" stroke={colors.lightMarks} />
                    <YAxis allowDecimals={false} type="number" domain={[0, 5]} tickCount={6} stroke={colors.lightMarks} />
                    <Tooltip offset={23} cursor={{ fill: colors.lightMarks, opacity: 0.5 }} contentStyle={{ color: colors.text, backgroundColor: colors.widgetBackgound }} />
                    <Legend />
                    <Bar dataKey="fun" fill={colors.blueBar} barSize={25} />
                    <Bar dataKey="difficulty" fill={colors.tuscany} barSize={25} />
                </BarChart>
            </ResponsiveContainer >

        </div>

    )
}
export default SecondaryBarChart