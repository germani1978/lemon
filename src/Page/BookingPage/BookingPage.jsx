import { BookingForm } from '../../components/BookingForm/BookingForm'

function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    )
}
export default BookingPage