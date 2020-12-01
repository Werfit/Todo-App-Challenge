import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { GlobalContext } from '../../context/GlobalContext'

const TodoItemPlace = ({ id, children }) => {
    const { moveItem } = useContext(GlobalContext)

    const [, drop] = useDrop({
        accept: 'item',
		drop: (item) => moveItem(item.id, id),
		collect: monitor => ({
			isOver: !!monitor.isOver()
		})
    })
    
    return (
        <div ref={ drop }>
            { children }
        </div>
    )
}

export default TodoItemPlace
