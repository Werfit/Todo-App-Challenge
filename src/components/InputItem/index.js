import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import './styles.css'

import RadioButton from '../RadioButton'

const InputItem = () => {
    const [isChecked, toggleCheckedState] = useState(false)
    const [todoItemName, setTodoItemName] = useState('')

    const { items, newTodoItem } = useContext(GlobalContext)

    const addItem = (e) => {
        if (e.key === 'Enter')
        {
            newTodoItem({
                id: items.length,
                text: todoItemName,
                completed: isChecked,
                toShow: true
            })

            toggleCheckedState(false)
            setTodoItemName('')
        }
    }

    return (
        <label htmlFor='todo-item-name' className='todo-app--todo-input__label'>
            <RadioButton isChecked={ isChecked } toggleCheckedState={ toggleCheckedState }/>
            <input type='text' id='todo-item-name' name='todo-item-name' value={ todoItemName } onChange={ (e) => setTodoItemName(e.target.value) } placeholder='Write down to remember' spellCheck='false' autoComplete='off' onKeyDown={ addItem } />
        </label>
    )
}

export default InputItem
