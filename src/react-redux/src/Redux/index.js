export const createStore = (reducer) => {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.map(listener => listener())
    }  
    dispatch({})  // 初始化 state
    return { getState, dispatch, subscribe }
}