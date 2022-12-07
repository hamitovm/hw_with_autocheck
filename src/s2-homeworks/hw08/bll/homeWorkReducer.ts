import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const stateCopy = [...state.sort((a,b) => a.age - b.age)]
            action.payload === 'up' && stateCopy.sort((a,b) => b.age - a.age)
            action.payload === 'down' && stateCopy.sort((a,b) => a.age - b.age)
            return stateCopy // need to fix
        }
        case 'check': {
            return [...state.filter(el => el.age >= action.payload)]
            // need to fix
        }
        default:
            return state
    }
}
