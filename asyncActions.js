const redux           = require("redux");
const createStore     = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;
const thunkMiddleWare = require("redux-thunk").default
const axios           = require("axios");

const initialState = {
    loading: false,
    users:   [],
    error:   ''
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST" ;
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS" ;
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE" ;

////////////// Actions ///////////////////////////////////
const fetch_users_request = () => {
    return {
        type:    FETCH_USERS_REQUEST
    }
}

const fetch_users_success = users => {
    return {
        type:    FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fecth_users_failure = error => {
    return {
        type:    FETCH_USERS_FAILURE,
        payload: error
    }
}


////////////////// Reducers  //////////////////////////////////////////

const reducer = (state=initialState, action) => {

    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ... state,
                    loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                ... state,
                    loading: false,
                    users:   [...state.users, action.payload],
                    error:   ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ... state,
                    loading: false,
                    users:   [], 
                    error:   action.payload
            }
    
        default:
            return state
    }
}

const fetchUsers = () => (dispatch) => {
    axios.get("https://fakerestapi.azurewebsites.net/api/v1/Users")
        
    .then( response => {
            const users = response.map(user => user.id);
            dispatch(fetch_users_success(users));
        })
    .catch(error => {
            dispatch(fecth_users_failure(error.message));
        });
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));
store.subscribe(() =>{ console.log(store.getState()) });