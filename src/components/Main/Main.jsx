import React, { useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import BookingPage from '../BookingForm/BookingForm'
import HomePage from '../../Page/HomePage/HomePage'
import ConfirmedPage from '../../Page/ConfirmedPage/ConfirmedPage'

function Main() {
    const fetchAPI = () => [
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00'
    ]
    const submitAPI = formData => true

    //reducer
    const initialState = { availableTimes: [] }
    const reducerUpdateTimes = (state, action) => {
        return { availableTimes: fetchAPI() }
    }
    const [state, dispatch] = useReducer(reducerUpdateTimes, initialState)

    //submit
    const navigate = useNavigate()
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate('/confirmed')
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={state.availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedPage />} />
            </Routes>
        </main>
    )
}

export default Main
