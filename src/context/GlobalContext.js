import React, { createContext, useReducer } from 'react'
import ContextReducer from './ContextReducer'

const initalState = [
	{
		id: 4,
		text: 'Complete online JavaScript course',
		completed: true,
		toShow: true,
	},
    {
		id: 3,
		text: 'Jog around the park 3x',
		completed: false,
		toShow: true
	},
	{
		id: 2,
		text: '10 minutes meditation',
		completed: false,
		toShow: true
	},
	{
		id: 1,
		text: 'Read for 1 hour',
		completed: false,
		toShow: true
	},
	{
		id: 0,
		text: 'Pick up groceries',
		completed: false,
		toShow: true
	}
]

export const GlobalContext = createContext()

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ContextReducer, initalState)

    const moveItem = (id, new_id) => {
        dispatch({
            type: 'DRAG',
            payload: { id, new_id }
		})
	}
	
	const newTodoItem = (item) => {
		dispatch({
			type: 'ADD',
			payload: item
		})

		console.log(state)
	}

	const delTodoItem = (item_id) => {
		dispatch({
			type: 'REMOVE',
			payload: item_id
		})
	}

	const showAllTodoItems = () => {
		dispatch({
			type: 'SHOW_ALL'
		})
	}

	const showFilteredTodoItems = (active) => {
		dispatch({
			type: 'SHOW_FILTERED',
			payload: active // Active === true ? Shows active todos : shows completed todos
		})
	}

	const completeTodoItem = (id, newCompletionState) => {
		dispatch({
			type: 'TOGGLE_COMPLETION',
			payload: { id: state.length - 1 - id, newCompletionState }
		})
	}

	const clearCompletedTodoItemList = () => {
		dispatch({
			type: 'CLEAR'
		})
	}

    return (
        <GlobalContext.Provider value={ { items: state, moveItem, newTodoItem, delTodoItem, showAllTodoItems, showFilteredTodoItems, completeTodoItem, clearCompletedTodoItemList } }>
            { children }
        </GlobalContext.Provider>
    )
}