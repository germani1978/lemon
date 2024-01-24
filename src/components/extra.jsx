import React, { useState } from 'react'
import '../components/BookingPage.css'
import Button from './Button'
import Modal from './Modal'
import Error from './Error'

function BookingPage() {
    const [sent, setSent] = useState(false)

    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        date: '',
        time: '',
        amount: 0
    })

    const [validation, setValidation] = useState({
        name: true,
        lastname: true,
        email: true,
        date: true,
        time: true,
        amount: true
    })

    const handleInputChange = (field, value) => {
        setData({ ...data, [field]: value })
        validateField(field, value)
    }

    const validateField = (field, value) => {
        switch (field) {
            case 'name':
            case 'lastname':
                setValidation({ ...validation, [field]: /^[a-zA-Z\s]+$/.test(value) })
                break
            case 'email':
                setValidation({ ...validation, [field]: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) })
                break
            case 'date':
                setValidation({ ...validation, [field]: /^\d{4}-\d{2}-\d{2}$/.test(value) })
                break
            case 'time':
                setValidation({ ...validation, [field]: /^([01]\d|2[0-3]):[0-5]\d$/.test(value) })
                break
            case 'amount':
                setValidation({ ...validation, [field]: /^\d+(\.\d{1,2})?$/.test(value) })
                break
            default:
                break
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        const isValidForm = Object.values(validation).every(isValid => isValid)

        if (isValidForm) {
            console.log('Formulario válido, datos enviados:', data)
        } else {
            console.log('Formulario no válido, por favor verifica los campos')
        }
    }

    return (
        <div className="container form-container">
            <form className="column" onSubmit={handleSubmit}>
                {/* ... (resto del código) */}
                <div className="label-container">
                    <label htmlFor="first">First Name</label>
                    {!validation.name && <Error />}
                </div>
                <input
                    type="text"
                    id="first"
                    placeholder="name"
                    value={data.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                />
                {/* ... (resto del código) */}
            </form>
        </div>
    )
}

export default BookingPage
