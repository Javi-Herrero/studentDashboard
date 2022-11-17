import { createSlice } from '@reduxjs/toolkit'

export const dataManagerSlice = createSlice({
    name: 'dataManagement',
    initialState: {
        selectedTab: 'Main',
        showStudentList: false,
        //selectedStudent: '',
        selectedAssignment: '',
        isLoaded: false
        // studentPersonalData: undefined
    },
    reducers: {
        setData: (state, action) => {
            const { payload } = action
            payload.forEach(element => {
                state[element.stateData] = element.data
            });
        }
    }
})
export const { getData, setData } = dataManagerSlice.actions
export default dataManagerSlice.reducer