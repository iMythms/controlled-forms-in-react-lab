import React from 'react'
import './App.css'
import BookShelf from './BookShelf'

const App = () => {
	return (
		<div className="container mx-auto my-24">
			<h1 className="text-white text-center text-4xl font-semibold">
				My Bookshelf
			</h1>
			<BookShelf />
		</div>
	)
}

export default App
