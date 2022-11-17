import { configureStore } from '@reduxjs/toolkit'
import dataManager from './dataManager'

export const store = configureStore({
    reducer: {
        dataManager
    }
})
