export default function ContextReducer (state, action) {
    switch (action.type) {
        case 'DRAG':
            const id = action.payload.id;
            const new_id = action.payload.new_id;
            const len = state.length - 1;
            
            [state[len - new_id], state[len - id]] = [state[len -id], state[len -new_id]]
            state[len - new_id].id = new_id
            state[len - id].id = id

            console.log(state, id, new_id)
            return [...state]
        case 'ADD':
            return [action.payload, ...state]
        case 'REMOVE':
            let temp_state = state.filter((item) => item.id !== action.payload)
            for (let i = 0; i <= temp_state.length - 1; i++)
                temp_state[i].id = temp_state.length - 1 - i
            console.log(temp_state)
            return temp_state
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
            return []
        default: return state
    }
}