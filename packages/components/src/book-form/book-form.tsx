import { NewBook } from '@books/db/src/schema'
import React from 'react'

export const BookForm = ({ onSubmit }: { onSubmit: (book: NewBook) => void }) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name') as string;
            const author = formData.get('author') as string;
            const year = parseInt(formData.get('year') as string)
            const genre = formData.get('genre') as string
            onSubmit({
                name,
                author,
                year,
                genre
            })
        }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" name="name" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                    Author
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="author" type="text" placeholder="Author" name="author" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
                    Genre
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="genre" type="text" placeholder="Genre" name="genre" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                    Year
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="year" type="text" placeholder="2025" name="year" />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Add Book
                </button>
            </div>
        </form>

    )
}