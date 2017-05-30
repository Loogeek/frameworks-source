export const createStore = (reducer) => {
    let state = {};
    const listeners = []; 
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => { 
        state = reducer(state, action);
        listeners.map(listener => listener());
    };

    return { getState, dispatch, subscribe };
};