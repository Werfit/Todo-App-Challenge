export default function ContextReducer (state, action) {
    switch (action.type) {
        case 'DRAG':
            const id = action.payload.id;
            const new_id = action.payload.new_id;
            const len = state.length - 1;
            
            [state[len - new_id], state[len - id]] = [state[len -id], state[len -new_id]]
            state[len - new_id].id = new_id
            state[len - id].id = id

            return [...state]
        case 'ADD':
            return [action.payload, ...state]
        case 'REMOVE':
            state = state.filter((item) => item.id !== action.payload)
            for (let i = 0; i <= state.length - 1; i++)
                state[i].id = state.length - 1 - i

            return state
        case 'SHOW_ALL':
            return state.map((item) => { 
                item.toShow = true
                return item
            })
        case 'SHOW_FILTERED':
            return state.map((item) => { 
                item.toShow = (item.completed !== action.payload)
                return item
            })
        case 'TOGGLE_COMPLETION':
            state[action.payload.id].completed = action.payload.newCompletionState
            return [...state]
        case 'CLEAR':
            state = state.filter((item) => item.completed === false);
            return state.map((item, index) => {
                item.id = state.length - 1 - index
                return item
            })
        default: throw new Error()
    }
}