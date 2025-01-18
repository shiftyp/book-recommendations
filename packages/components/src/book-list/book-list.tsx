import { Book } from '@books/db/src/schema'
import React from "react"

export const BookList = ({ books }: {
    books: Book[]
}) => {
    return (
        <ul className="flex flex-col gap-4">
            {books.map((book) => (
                <li key={book.id} className="p-4 border border-gray-300 rounded-md">
                    <h3 className="font-bold">{book.name}</h3>
                    <p className="text-gray-600">{book.author}</p>
                </li>
            ))}
        </ul>
    )
}