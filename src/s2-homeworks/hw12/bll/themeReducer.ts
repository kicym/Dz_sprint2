const initState = {
    themeId: 1,
}

// 1. Типизируем состояние
type InitStateType = typeof initState

// 2. Типизируем экшен
type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

// 3. Типизируем все возможные экшены (если их будет больше)
type ActionsType = ChangeThemeIdActionType

export const themeReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
