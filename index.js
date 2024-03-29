const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const BUY_MOB    = 'BUY_MOB';
const BUY_TABLET = 'BUY_TABLET';

const buyMob = () => {
    return {
        type: BUY_MOB,
        info : "first Action"
    }
};

const buyTablet = () => {
    return {
        type: BUY_TABLET,
        info: "second Action"
    }
};

// const initialState = {
//     numOfMobs: 100,
//     numOfTablet: 50
// };

const initialMobState = {
    numOfMobs: 100,
};

const initialTabState = {
    numOfTablet: 50
};

// const reducer = (state=initialState , action) => {
//     switch (action.type) {
//         case BUY_MOB:
//             return { ... state , numOfMobs: state.numOfMobs-1 };
    
//         case BUY_TABLET:
//             return {... state , numOfTablet: state.numOfTablet -1};

//         default:
//              return state;
//     }
// };

const MobReducer = (state=initialMobState , action) => {
    switch (action.type) {
        case BUY_MOB:
            return { ... state , numOfMobs: state.numOfMobs-1 };
    
        default:
             return state;
    }
};


const TabReducer = (state=initialTabState , action) => {
    switch (action.type) {   
        case BUY_TABLET:
            return {... state , numOfTablet: state.numOfTablet -1};

        default:
             return state;
    }
};


const rootReducer = combineReducer({
    mob: MobReducer,
    tab: TabReducer
});

const store = createStore(rootReducer);
console.log("initial State is ", store.getState());

const unsubscribe =  store.subscribe(() => console.log("updated state is ", store.getState()));


store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyTablet());
store.dispatch(buyTablet());