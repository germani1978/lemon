// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BookingForm } from './components/BookingPage'

test('Render the booking Form', () => {
    render(<BookingForm />)
    const headingElement = screen.getByText('Book Now')
    expect(headingElement).toBeInTheDocument()
})
