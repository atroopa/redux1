const redux = require('redux');
const createStore = redux.createStore();

const BUY_MOB = 'BUY_MOB';


const buyMob = () => {
    return {
        type: BUY_MOB,
        info : "first Action"
    }
};

const initialState = {
    numOfMobs: 100
};

const reducer = (state=initialState , action) => {
    switch (action.type) {
        case BUY_MOB:
            return { ... state, numOfMobs: state.numOfMobs-- };
    
        default:
             return state;
    }
};


const store = createStore(reducer);

