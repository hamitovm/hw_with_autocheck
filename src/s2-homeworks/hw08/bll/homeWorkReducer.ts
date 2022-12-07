import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const stateCopy = [...state]
            action.payload === 'up' && stateCopy.sort((a,b) => a.name.localeCompare(b.name))
            action.payload === 'down' && stateCopy.sort((a,b) => b.name.localeCompare(a.name))
            return stateCopy // need to fix
        }
        case 'check': {
            const stateCopy = state.filter(el => el.age >= action.payload)
            return [...stateCopy]
            // need to fix
        }
        default:
            return state
    }
}
