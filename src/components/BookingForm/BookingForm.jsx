import React, { useEffect, useState } from 'react'
import './BookingForm.css'
import Error from '../Error/Error'

const FieldForm = ({
    field,
    label,
    formData,
    handleChange,
    type = 'text',
    options = [],
    ...props
}) => {
    const { value, error } = formData[field]
    return (
        <>
            <div className="label-container">
                <label htmlFor={field}>{label}</label>
                {error && <Error />}
            </div>
            {type !== 'select' ? (
                <input
                    placeholder={label}
                    type={type}
                    id={field}
                    value={value}
                    onChange={e => handleChange(field, e.target.value)}
                    required
                    {...props}
                />
            ) : (
                <select
                    id={field}
                    value={value}
                    onChange={e => handleChange(field, e.target.value)}
                    disabled={options.length === 0}
                    required
                >
                    {options.length !== 0 &&
                        options.map((option, index) => (
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
    const [formData, setFormData] = useState({
        name: { value: '', error: false },
        lastname: { value: '', error: false },
        email: { value: '', error: false },
        date: { value: '', error: false },
        time: { value: '', error: false },
        amount: { value: 1, error: false },
        occasion: { value: 'casual', error: false }
    })

    const [formOk, setFormOk] = useState(false)

    useEffect(() => {
        // check is form us full of good information
        const isNewFormOK = Object.values(formData).every(
            fieldData => fieldData.error === false && fieldData.value !== ''
        )
        setFormOk(isNewFormOK)

        if (!formData.date.error && formData.date.value !== '')
            dispatch(formData.date)
    }, [formData, dispatch])

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

        return validationPatterns[type].test(input)
    }

    const handleChange = (field, value) => {
        //save data
        console.log(`Field: ${field}, Value: ${value}`)
        setFormData(prev => ({
            ...prev,
            [field]: {
                value,
                error: !isValid(field, value)
            }
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!Object.values(formData).some(fieldData => fieldData.error)) {
            submitForm(e) //if not error send
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Book Now</h1>
                <FieldForm
                    field="name"
                    label="First name"
                    formData={formData}
                    handleChange={handleChange}
                />
                <FieldForm
                    field="lastname"
                    label="Last name"
                    formData={formData}
                    handleChange={handleChange}
                />
                <FieldForm
                    field="email"
                    label="Email"
                    formData={formData}
                    handleChange={handleChange}
                    type="email"
                />
                <FieldForm
                    field="date"
                    label="Date"
                    formData={formData}
                    handleChange={handleChange}
                    type="date"
                />

                <FieldForm
                    field="time"
                    label="Time"
                    formData={formData}
                    handleChange={handleChange}
                    type="select"
                    options={availableTimes}
                />

                <FieldForm
                    field="amount"
                    label="Amount"
                    formData={formData}
                    handleChange={handleChange}
                    type="number"
                    min={1}
                    max={10}
                />

                <FieldForm
                    field="occasion"
                    label="Occasion"
                    formData={formData}
                    handleChange={handleChange}
                    type="select"
                    options={['casual', 'birthday', 'anniversary']}
                />

                <div className="container-button">
                    <button
                        type="submit"
                        disabled={!formOk}
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
