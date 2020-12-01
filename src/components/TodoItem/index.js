import React, { useState, useContext } from 'react'
import { useDrag } from 'react-dnd'
import './styles.css'

import { ReactComponent as IconCross } from '../../svgs/icon-cross.svg'
import { GlobalContext } from '../../context/GlobalContext'

import RadioButton from '../RadioButton'

const TodoItem = ({ id, text, completed }) => {
    const [isChecked, toggleCheckedState] = useState(completed)
    const [, drag] = useDrag({
        item: {
            id,
            type: 'item'
        },
        collect: monitor => {
            return {
                isDragging: !!monitor.isDragging()
            }
        }
    })
    const { delTodoItem, completeTodoItem } = useContext(GlobalContext)

    const toggleTodoItemCompletion = () => {
        completeTodoItem(id, !isChecked)
        toggleCheckedState(!isChecked)
    }

    return (
        <div ref={ drag } className='todo-app--todo-item__div'>
            <RadioButton isChecked={ isChecked } toggleCheckedState={ toggleTodoItemCompletion } />
            <p className={ isChecked ? 'todo-app--text__p' : '' }>{ text }</p>
            <IconCross onClick={ () => delTodoItem(id) } />
        </div>
    )
}

export default TodoItem
