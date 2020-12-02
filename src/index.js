import React from 'react'
import ReactDOM from 'react-dom'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { ContextProvider } from './context/GlobalContext'

import './index.css'
import App from './App'

ReactDOM.render(
	<DndProvider backend={ HTML5Backend }>
		<ContextProvider>
			<App />
		</ContextProvider>
	</DndProvider>,
	document.getElementById('root')
)