"use client"

import { Book } from "@books/db/src"
import { useEffect, useState } from "react"
import {BookList} from '@books/components/src/book-list/book-list'

export const BookListData = () => {
    const [books, setBooks] = useState<Book[]>([])
    const [sort, setSort] = useState<string>('')
    const [search, setSearch] = useState<string>('')
    const [ascending, setAscending] = useState<boolean>(true)

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(`/api/books?sort=${sort}&name=${encodeURIComponent(search)}`)
            const data = await response.json()
            setBooks(data)
        }
        fetchBooks()
    }, [sort, search, ascending])
    
    return (
        <>
            <BookList onFilter={(newSort, newAscending, newSearch) => {
                setSort(newSort)
                setAscending(newAscending)
                setSearch(newSearch)
            }} books={books} />
        </>
    )
}