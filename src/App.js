import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import BookingPage from './components/BookingPage'
import Nav from './components/Nav'
import Footer from './components/Footer'

function DashBoard() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashBoard />}>
                    <Route path="" element={<HomePage />} />
                    <Route path="booking" element={<BookingPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
