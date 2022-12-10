const initState: initStateType = {
    themeId: 1,
}

export type initStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeIdACType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':// дописать
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdACType => ({ type: 'SET_THEME_ID', id }) // fix any
export type changeThemeIdACType = {
    type: 'SET_THEME_ID',
    id: number
}