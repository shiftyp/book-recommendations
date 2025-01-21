"use client"

import { NewBook } from '@books/db/src/schema'
import { BookForm } from '@books/components/src/book-form/book-form'

export const BookFormData = () => {
    return (
        <BookForm onSubmit={
            async (book: NewBook) => {
                await fetch('/api/books', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(book)
                })
            }} 
        />
    )
}