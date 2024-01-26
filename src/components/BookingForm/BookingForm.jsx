import React, { useState } from 'react'
import './BookingForm.css'
import Error from '../Error/Error'

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        date: '',
        availableTimes: '',
        amount: 1,
        occasion: 'casual'
    })

    const [error, setError] = useState({
        name: false,
        lastname: false,
        email: false,
        date: false,
        availableTimes: false,
        amount: false,
        occasion: false
    })

    const isValid = (type, input) => {
        const validationPatterns = {
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            date: /^\d{4}-\d{2}-\d{2}$/,
            availableTimes: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
            amount: /^[1-9]\d?(\.\d{1,2})?$/,
            occasion: /(casual|birthday|anniversary)/
        }

        return validationPatterns[type] && validationPatterns[type].test(input)
    }

    const handleChange = (field, value) => {
        //save data
        setData(prevData => ({ ...prevData, [field]: value }))

        //reset error
        setError(prev => ({ ...prev, [field]: false }))

        //check if error exist
        if (!isValid(field, value))
            setError(prev => ({ ...prev, [field]: true }))

        //after select date make a request to server to schedule
        if (field === 'date') {
            dispatch(value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!Object.values(error).some(Boolean)) {
            submitForm(e) //if not error send
        }
    }

    function notOkForm() {
        //check if not error and not empty field
        return (
            Object.values(error).some(Boolean) ||
            Object.values(data).some(value => value === '')
        )
    }

    return (
        <div className="container form-container">
            <form className="column" onSubmit={handleSubmit}>
                <h1>Book Now</h1>
                <div className="label-container">
                    <label htmlFor="first">First Name</label>
                    {error.name && <Error />}
                </div>
                <input
                    type="text"
                    id="first"
                    placeholder="name"
                    value={data.name}
                    onChange={e => handleChange('name', e.target.value)}
                    required
                />

                {/* lastname */}
                <div className="label-container">
                    <label htmlFor="last">Last Name</label>
                    {error.lastname && <Error />}
                </div>
                <input
                    type="text"
                    id="last"
                    placeholder="last name"
                    value={data.lastname}
                    onChange={e => handleChange('lastname', e.target.value)}
                    required
                />

                {/* email */}
                <div className="label-container">
                    <label htmlFor="email">Email</label>
                    {error.email && <Error />}
                </div>
                <input
                    type="email"
                    id="email"
                    placeholder="email"
                    value={data.email}
                    onChange={e => handleChange('email', e.target.value)}
                    required
                />

                {/* date */}
                <div className="label-container">
                    <label htmlFor="date">Date</label>
                    {error.date && <Error />}
                </div>
                <input
                    type="date"
                    id="date"
                    placeholder="date"
                    value={data.date}
                    onChange={e => handleChange('date', e.target.value)}
                    required
                />

                {/* time */}
                <div className="label-container">
                    <label htmlFor="availableTimes">Time</label>
                    {error.availableTimes && <Error />}
                </div>
                <select
                    value={data.availableTimes}
                    disabled={availableTimes.length === 0} // after select the date make request to server
                    onChange={e =>
                        handleChange('availableTimes', e.target.value)
                    }
                    required
                >
                    {availableTimes.map((time, index) => (
                        <option value={time} key={index}>
                            {time}
                        </option>
                    ))}
                </select>

                {/* amount */}
                <div className="label-container">
                    <label htmlFor="amount">Amount</label>
                    {error.amount && <Error />}
                </div>
                <input
                    type="number"
                    id="amount"
                    value={data.amount}
                    onChange={e => handleChange('amount', e.target.value)}
                    required
                    min={1}
                    max={10}
                />

                {/* ocasion */}
                <div className="label-container">
                    <label htmlFor="amount">Occasion</label>
                    {error.occasion && <Error />}
                </div>
                <select
                    value={data.occasion}
                    onChange={e => handleChange('occasion', e.target.value)}
                >
                    <option value="casual">Casual</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>

                <div className="container-button">
                    <button
                        type="submit"
                        disabled={notOkForm()}
                        aria-label="click send"
                    >
                        Sent
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BookingForm
