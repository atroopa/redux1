

const initialState = {
    loading: false,
    users:   [],
    error:   ''
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST" ;
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS" ;
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE" ;


const fetch_users_request = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetch_users_success = () => {
    return {
        type: FETCH_USERS_SUCCESS
    }
}

const fecth_users_failure = () => {
    return {
        type: FETCH_USERS_FAILURE
    }
}
