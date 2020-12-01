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
        <div className='todo-app--todo-input__div'>
            <RadioButton isChecked={ isChecked } toggleCheckedState={ toggleCheckedState }/>
            <input type='text' value={ todoItemName } onChange={ (e) => setTodoItemName(e.target.value) } placeholder='Write down to remember' spellCheck='false' autoComplete='false' autoCorrect='false' onKeyDown={ addItem } />
        </div>
    )
}

export default InputItem
