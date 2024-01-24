import React, { useState } from 'react'
import '../components/BookingPage.css'
import Modal from './Modal'
import Error from './Error'

function BookingPage() {
    const [sent, setSent] = useState(false)

    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        date: '',
        time: '17:00',
        amount: 1
    })

    const [error, setError] = useState({
        name: false,
        lastname: false,
        email: false,
        date: false,
        time: false,
        amount: false
    })

    const isValid = (type, input) => {
        switch (type) {
            case 'name':
                return /^[a-zA-Z\s]+$/.test(input)
            case 'lastname':
                return /^[a-zA-Z\s]+$/.test(input)
            case 'email':
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
            case 'date':
                return /^\d{4}-\d{2}-\d{2}$/.test(input)
            case 'time':
                return input !== '--'
            case 'amount':
                return /^\d+(\.\d{1,2})?$/.test(input)

            default:
                break
        }
    }

    const handleName = ({ target: { value } }) => {
        setData({ ...data, name: value })
        setError({ ...error, name: !isValid('name', value) })
    }
    const handleLastName = ({ target: { value } }) => {
        setData({ ...data, lastname: value })
        setError({ ...error, lastname: !isValid('lastname', value) })
    }
    const handleEmail = ({ target: { value } }) => {
        setData({ ...data, email: value })
        setError({ ...error, email: !isValid('email', value) })
    }
    const handleDate = ({ target: { value } }) => {
        setData({ ...data, date: value })
        setError({ ...error, date: !isValid('date', value) })
    }
    const handleTime = ({ target: { value } }) => {
        setData({ ...data, time: value })
        setError({ ...error, time: !isValid('time', value) })
    }
    const handleAmount = ({ target: { value } }) => {
        setData({ ...data, amount: value })
        setError({ ...error, amount: !isValid('amount', value) })
    }

    const notIsValid = () => {
        return error.name || error.lastname || error.email || error.date || error.time || error.amount
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (notIsValid()) return

        setSent(true)
    }

    const closeNotification = () => {
        setData({
            name: '',
            lastname: '',
            email: '',
            date: '',
            time: '17:00',
            amount: 1
        })
        setError({
            name: false,
            lastname: false,
            email: false,
            date: false,
            time: false,
            amount: false
        })
        setSent(false)
    }

    return (
        <div className="container form-container">
            <form className="column" onSubmit={handleSubmit}>
                {/* name */}
                <div className="label-container">
                    <label htmlFor="first">First Name</label>
                    {error.name && <Error />}
                </div>
                <input type="text" id="first" placeholder="name" value={data.name} onChange={handleName} required />

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
                    onChange={handleLastName}
                    required
                />

                {/* email */}
                <div className="label-container">
                    <label htmlFor="email">Email</label>
                    {error.email && <Error />}
                </div>
                <input type="email" id="email" placeholder="email" value={data.email} onChange={handleEmail} required />

                {/* date */}
                <div className="label-container">
                    <label htmlFor="date">Date</label>
                    {error.date && <Error />}
                </div>
                <input type="date" id="date" placeholder="date" value={data.date} onChange={handleDate} required />

                {/* time */}
                <div className="label-container">
                    <label htmlFor="time">Time</label>
                    {error.time && <Error />}
                </div>
                <select value={data.time} onChange={handleTime} required>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>

                {/* amount */}
                <div className="label-container">
                    <label htmlFor="amount">Amount</label>
                    {error.amount && <Error />}
                </div>
                <input type="number" id="amount" value={data.amount} onChange={handleAmount} required />

                <div className="container-button">
                    <button type="submit" disabled={notIsValid()}>
                        Sent
                    </button>
                </div>

                {sent && <Modal closeNotification={closeNotification} />}
            </form>
        </div>
    )
}

export default BookingPage
