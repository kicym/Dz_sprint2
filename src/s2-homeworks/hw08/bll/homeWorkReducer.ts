import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // делаем копию массива чтобы не мутировать оригинал
            const sortArray = [...state]
            return sortArray.sort((a, b) => {
                if (a.name > b.name) return action.payload === 'up' ? 1 : -1
                if (a.name < b.name) return action.payload === 'up' ? -1 : 1
                return 0
            })
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}
