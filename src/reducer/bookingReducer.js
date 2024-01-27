export const fetchAPI = () => [
    '-----',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00'
]

export const initializeTimes = { availableTimes: [] }

export const updateTimes = (state, action) => {
    return { availableTimes: fetchAPI() }
}
