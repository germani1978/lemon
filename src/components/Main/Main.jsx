import React, { useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import BookingPage from '../BookingForm/BookingForm'
import HomePage from '../../Page/HomePage/HomePage'
import { initializeTimes, updateTimes } from '../../reducer/bookingReducer'
import ConfirmedBooking from '../../Page/ConfirmedBooking/ConfirmedBooking'

function Main() {
    const submitAPI = formData => true

    //reducer

    const [date, dispatch] = useReducer(updateTimes, initializeTimes)

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
                            availableTimes={date.availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    )
}

export default Main
