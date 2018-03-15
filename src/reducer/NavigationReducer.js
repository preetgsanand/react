const initialState = {
    navigation : {
        
    },
    weather : {
        name : 'Please enter a location',
        main : {
            temp_max : 'NA',
            temp_min : 'NA'
        },
        weather : [{
            description : 'NA'
        }]
    }
}

const navigationReducer = (state = initialState, action) => {
    if (action.type === 'LOCATION_UPDATE') {
        return {
            ...state,
            navigation : {
                ...state.navigation,
                location: action.payload
            }
            
        }
    } else if (action.type === 'TOGGLE_NAVBAR_UPDATE') {
        return {
            ...state,
            navigation : {
                ...state.navigation,
                collapsed: action.payload
            }
        }
    }
    if(action.type === 'UPDATE_WEATHER') {
        return {
            ...state,
            weather :{
                ... action.payload
            }
        } 
    }
    return state;
}

export default navigationReducer;