const initialState = {
    name : ''
}

const weatherReducer = (state = initialState , action) => {
    if(action.type === 'WEATHER_UPDATE') {
        return {
            ... action.payload
        } 
    }
    return state;
}

export default weatherReducer;