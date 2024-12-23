import React, { useState } from 'react'

const BookShelf = () => {
	const [books, setBooks] = useState([
		{
			title: 'The Coming Wave',
			author: 'Mustafa Suleyman',
			img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1685351813l/90590134.jpg',
		},
		{
			title: 'Outliers',
			author: 'Malcolm Gladwell',
			img: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Outliers_%28book_cover%29.png',
		},
	])

	const [newBook, setNewBook] = useState({ title: '', author: '', img: '' })

	const handleInputChange = (event) => {
		newBook = setNewBook({
			...newBook,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setBooks([...books, newBook])
		setNewBook({ title: '', author: '', img: '' })
	}

	return (
		<>
			<div className="mt-14 flex flex-col items-center">
				<div className="flex flex-col gap-4 items-center justify-center bg-[#343a40] w-3/6 p-12 rounded-xl">
					<h3 className="text-white text-2xl font-semibold">Add a Book</h3>
					<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
						<div className="flex flex-col gap-2 text-white">
							<label htmlFor="title">Book title</label>
							<input
								id="title"
								name="title"
								value={newBook.title}
								onChange={handleInputChange}
								className="bg-[#191919] rounded-lg py-1 px-2 focus:outline-none placeholder:text-sm placeholder:font-extralight"
								placeholder="The Coming Wave"
							/>
						</div>
						<div className="flex flex-col gap-2 text-white">
							<label htmlFor="author">Book Author</label>
							<input
								id="author"
								name="author"
								value={newBook.author}
								onChange={handleInputChange}
								className="bg-[#191919] rounded-lg py-1 px-2 focus:outline-none placeholder:text-sm placeholder:font-extralight"
								placeholder="Mustafa Suleyman"
							/>
						</div>
						<div className="flex flex-col gap-2 text-white">
							<label htmlFor="img">Book Metadata</label>
							<input
								id="img"
								name="img"
								value={newBook.img}
								onChange={handleInputChange}
								className="bg-[#191919] rounded-lg py-1 px-2 focus:outline-none placeholder:text-sm placeholder:font-extralight"
								placeholder="https://image-address.png"
							/>
						</div>
						<button
							type="submit"
							className="bg-[#0d1b2a] hover:bg-[#1b263b] text-white rounded-lg py-1 px-2 mt-2"
						>
							Add Book
						</button>
					</form>
				</div>
				<div className="flex gap-5 mt-16">
					{books.map((book) => (
						<div className="text-white bg-[#343a40] w-auto flex flex-col gap-2 items-center justify-center p-5 rounded-xl">
							<img
								src={book.img}
								alt={book.title}
								className="w-48 rounded-md"
							/>
							<h3 className="text-2xl font-semibold mt-3">{book.title}</h3>
							<h5 className="text-base font-thin">{book.author}</h5>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default BookShelf
