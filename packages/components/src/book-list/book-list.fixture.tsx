import React from "react";
import { BookList } from "./book-list";

export default {
    'Basic': (
        <BookList books={[
            {
                id: 1,
                name: 'Moby Dick',
                author: 'Herman Melville',
                genre: 'Fiction',
                year: 1851
            },
            {
                id: 2,
                name: 'Oliver Twist',
                author: 'Charles Dickens',
                genre: 'Fiction',
                year: 1838
            },
            {
                id: 3,
                name: 'Pride and Prejudice',
                author: 'Jane Austen',
                genre: 'Romance',
                year: 1813
            },
            {
                id: 4,
                name: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                genre: 'Fiction',
                year: 1960
            },
            {
                id: 5,
                name: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                genre: 'Fiction',
                year: 1925
            },
            {
                id: 6,
                name: '1984',
                author: 'George Orwell',
                genre: 'Dystopian',
                year: 1949
            },
            {
                id: 7,
                name: 'The Catcher in the Rye',
                author: 'J.D. Salinger',
                genre: 'Fiction',
                year: 1951
            },
            {
                id: 8,
                name: 'The Lord of the Rings',
                author: 'J.R.R. Tolkien',
                genre: 'Fantasy',
                year: 1954
            },
            {
                id: 9,
                name: 'Jane Eyre',
                author: 'Charlotte Brontë',
                genre: 'Fiction',
                year: 1847
            },
            {
                id: 10,
                name: 'Little Women',
                author: 'Louisa May Alcott',
                genre: 'Fiction',
                year: 1868
            }

        ]} />
    )
}