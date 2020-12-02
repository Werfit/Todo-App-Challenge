import { useState, useContext } from 'react'

import './App.css'
import './styles/AppLight.css'
import './styles/AppDark.css'
import './styles/AppMobile.css'

import { ReactComponent as IconMoon } from './svgs/icon-moon.svg'
import { ReactComponent as IconSun } from './svgs/icon-sun.svg'

import TodoItemPlace from './components/TodoItemPlace'
import TodoItem from './components/TodoItem'
import InputItem from './components/InputItem'

import { GlobalContext } from './context/GlobalContext'

function App() {
	const [filterNumber, setFilterNumber] = useState(1)
	// False - light theme | True - dark theme
	const [themeColor, toggleTheme] = useState(false) 
	const { items, showAllTodoItems, showFilteredTodoItems, clearCompletedTodoItemList } = useContext(GlobalContext)

	const menuItemClicked = (number) => {
		setFilterNumber(number)
		if (number === 1)
			showAllTodoItems()
		else
			showFilteredTodoItems(number === 2)
	}
	
	return (
		<div className={ themeColor ? 'todo-app--dark_theme' : 'todo-app--light_theme' }>
			<header className='header_image__header'>
				<div className="todo-app__div">
					<div className='todo-app--title__div'>
						<span>Todo</span>
						<span onClick={ () => toggleTheme(!themeColor) }>
							{ themeColor ? <IconSun /> : <IconMoon /> }
						</span>
					</div>
					<div className='todo-app--content__div'>
						<InputItem />
					</div>
					<div className='todo-app--list__div'>
						{
							items.map((item) => {
								return (
								item.toShow && <TodoItemPlace key={ item.id } id={ item.id } >
									<TodoItem id={ item.id } text={ item.text } completed={ item.completed } />
								</TodoItemPlace>
							)})
						}

						<div className='todo-app--menu__div'>
							<div className='todo-app--menu_item__div'>
								{ items.length } items left
							</div>
							<div className='todo-app--menu_filter__div todo-app--menu_item__div'>
								<span className={ filterNumber === 1 ? 'todo-app--menu_active_item__span' : '' } onClick={ () => menuItemClicked(1) }>All</span>
								<span className={ filterNumber === 2 ? 'todo-app--menu_active_item__span' : '' } onClick={ () => menuItemClicked(2) }>Active</span>
								<span className={ filterNumber === 3 ? 'todo-app--menu_active_item__span' : '' } onClick={ () => menuItemClicked(3) }>Completed</span>
							</div>
							<div className='todo-app--menu_item__div'>
								<span onClick={ clearCompletedTodoItemList }>Clear Completed</span>
							</div>
						</div>
						<div className='todo-app--order_hint__div'>Drag and drop to reorder list</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default App
