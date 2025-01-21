'use client'

import React, { FormEvent } from "react"
import { Book } from '@books/db/src/schema'

export const BookList = ({ books, onFilter }: {
    books: Book[]
    onFilter: (sort: string, asc: boolean, search: string) => void,
}) => {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget as HTMLFormElement)

        const {
            sort,
            search,
            asc
        } = Object.fromEntries(formData) as Record<string, string>

        onFilter(sort, asc === 'on', search)
    }

    return (
        <>
            <div className="flex flex-col gap-4 items-start">
                <form className="flex items-center gap-4" onSubmit={onSubmit}>
                    <label htmlFor="sort" className="block">Sort By</label>
                    <select className="border border-gray-300 rounded-md px-2 py-1" name="sort" id="sort">
                        <option value="name">Name</option>
                        <option value="rating">Rating</option>
                    </select>
                    <label htmlFor="asc" className="block">Ascending</label>
                    <input type="checkbox" name="asc" id="asc" className="border border-gray-300 rounded-md px-2 py-1" />
                    <label htmlFor="search" className="block">Search</label>
                    <input type="text" name="search" id="search" className="border border-gray-300 rounded-md px-2 py-1" placeholder="Search" />
                    typescript
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Filter</button>
                </form>
            </div>
            <ul className="flex flex-col gap-4">
                {books.map((book) => (
                    <li key={book.id} className="p-4 border border-gray-300 rounded-md">
                        <h3 className="font-bold">{book.name}</h3>
                        <p className="text-gray-600">{book.author}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}