import { fireEvent, render, screen } from '@testing-library/react'
import BookingForm from './components/BookingForm/BookingForm'
import {
    fetchAPI,
    initializeTimes,
    updateTimes
} from './reducer/bookingReducer'

test('render the booking form heading', () => {
    render(<BookingForm />)

    const headingElement = screen.getByText('Book Now')

    expect(headingElement).toBeInTheDocument()
})

test('reducer', () => {
    const expectedValue = { availableTimes: [] }

    expect(initializeTimes).toEqual(expectedValue)
})

test('updateTimes', () => {
    const state = { availableTimes: fetchAPI() }
    const action = {}
    expect(updateTimes(state, action)).toEqual(state)
})

test('form', async () => {
    const availableTimes = jest.fn()
    const dispatch = jest.fn()
    const submitForm = jest.fn()
    render(
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    )
    const nameInput = screen.getByLabelText(/First/)
    fireEvent.change(nameInput, { target: { value: 'a' } })

    const lastnameInput = screen.getByLabelText(/Last name/)
    fireEvent.change(lastnameInput, { target: { value: '1' } })

    const emailInput = screen.getByLabelText(/Email/)
    fireEvent.change(emailInput, { target: { value: 'a@mail.com' } })

    const dateInput = screen.getByLabelText(/Date/)
    fireEvent.change(dateInput, { target: { value: '2024-01-17' } })

    const timeInput = screen.getByLabelText(/Time/)
    fireEvent.change(timeInput, { target: { value: '16:00' } })

    const amountInput = screen.getByLabelText(/Amount/)
    fireEvent.change(amountInput, { target: { value: 1 } })

    const occasionInput = screen.getByLabelText(/Occasion/)
    fireEvent.change(occasionInput, { target: { value: 'casual' } })
})
