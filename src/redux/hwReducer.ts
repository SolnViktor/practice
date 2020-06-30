type UserType = { id: string, name: string, age: number }
export const hwReducer = (state: Array<{ id: string, name: string, age: number }>,
                          action: { type: string, payload: any }) => {

    switch (action.type) {
        case 'SORT':
            if (action.payload === 'up') {
                let copyState = state.map(el => el)
                let sortUp = (a: UserType, b: UserType) => {
                    if (a.age > b.age) return 1
                    if (a.age < b.age) return -1
                    return 0
                }
                copyState.sort(sortUp)
                return copyState
            }
            if (action.payload === 'down') {
                let copyState = state.map(el => el)
                let sortDown = (a: UserType, b: UserType) => {
                    if (a.age < b.age) return 1
                    if (a.age > b.age) return -1
                    return 0
                }
                copyState.sort(sortDown)
                return copyState
            }
            return state
        case 'CHECK':
            let copyState = state.filter(el => el.age === action.payload)
            return copyState

        default:
            return state;
    }
}

