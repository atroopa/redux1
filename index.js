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
            return state.numOfMobs ++;
    
        default:
            state;
    }
};