

type LoaderStateType = {
    loading: boolean
}
type ActionType = {
    type: 'SET_LOADING'
    payload: boolean
}
let initialState = {
    loading: false
}

export let loaderReducer = (state: LoaderStateType = initialState, action:ActionType) => {
    switch(action.type) {
        case 'SET_LOADING':
            return {...state, loading: action.payload}
        default:
            return state
    }
}

export const setLoading = (payload:boolean) => ({type: "SET_LOADING", payload })