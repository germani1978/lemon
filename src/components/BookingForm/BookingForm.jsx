import React, { useState } from 'react'
import './BookingForm.css'
import Error from '../Error/Error'

const FieldForm = ({
    field,
    label,
    data,
    error,
    handleChange,
    type = 'text',
    options = [],
    ...props
}) => {
    return (
        <>
            <div className="label-container">
                <label htmlFor={field}>{label}</label>
                {error[field] && <Error />}
            </div>
            {type !== 'select' ? (
                <input
                    placeholder={label}
                    type={type}
                    id={field}
                    value={data[field]}
                    onChange={e => handleChange(field, e.target.value)}
                    required
                    {...props}
                />
            ) : (
                <select
                    id={field}
                    value={data[field]}
                    onChange={e => handleChange(field, e.target.value)}
                    disabled={options.length === 0}
                    required
                >
                    {options.map((option, index) => (
                        <option value={option} key={index}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
        </>
    )
}

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        date: '',
        time: '',
        amount: 1,
        occasion: 'casual'
    })

    const [error, setError] = useState({
        name: false,
        lastname: false,
        email: false,
        date: false,
        time: false,
        amount: false,
        occasion: false
    })

    const isValid = (type, input) => {
        const validationPatterns = {
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            date: /^\d{4}-\d{2}-\d{2}$/,
            time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
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
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Book Now</h1>
                <FieldForm
                    field="name"
                    label="First name"
                    data={data}
                    error={error}
                    handleChange={handleChange}
                />
                <FieldForm
                    field="lastname"
                    label="Last name"
                    data={data}
                    error={error}
                    handleChange={handleChange}
                />
                <FieldForm
                    field="email"
                    label="Email"
                    data={data}
                    error={error}
                    handleChange={handleChange}
                    type="email"
                />
                <FieldForm
                    field="date"
                    label="Date"
                    data={data}
                    error={error}
                    handleChange={handleChange}
                    type="date"
                />

                <FieldForm
                    field="time"
                    label="Time"
                    data={data}
                    error={error}
                    handleChange={handleChange}
                    type="select"
                    options={availableTimes}
                />

                <FieldForm
                    field="amount"
                    label="Amount"
                    data={data}
                    error={error}
                    handleChange={handleChange}
                    type="number"
                    min={1}
                    max={10}
                />

                <FieldForm
                    field="occasion"
                    label="Occasion"
                    data={data}
                    error={error}
                    handleChange={handleChange}
                    type="select"
                    options={['casual', 'birthday', 'anniversary']}
                />

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
