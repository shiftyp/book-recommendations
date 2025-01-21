import {db, books, NewBook, Book} from '@books/db/src/index'

const createBook = async (book: NewBook) => {
    const newBook = await db.insert(books).values(book).returning()
    return newBook
}

export const POST = async (request: Request) => {
    const book = await request.json()
    const newBook = await createBook(book)
    return Response.json(newBook)
}

export const GET = async (request: Request, response: Response) => {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') ?? ""
    const sort = searchParams.get('sort') ?? ""

    const allBooks = await db.select().from(books)
    
    const filteredBooks = allBooks.filter((book) => book.name.includes(name))
    
    let sortedBooks: Book[] = []

    if(sort === 'name'){
        sortedBooks = filteredBooks.sort((a,b) => a.name.localeCompare(b.name))
    }

    return Response.json(sortedBooks)
    
}