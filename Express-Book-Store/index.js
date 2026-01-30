const express = require("express")
const fs = require('fs')
const app = express()
const PORT = 8000

// ✅ middleware
app.use(express.json())

app.use(function(req,res,next){
    const log = `/n[${Date.now()}] ${req.method} ${req.path}`
    fs.appendFileSync('log.txt','utf-8')
    next()
})

const books = [
    { id: 1, title: 'Book One', author: 'Author One' },
    { id: 2, title: 'Book Two', author: 'Author Two' }
]

// Routes
app.get('/books', (req, res) => {
    res.json(books)
})

app.get('/books/:id', (req, res) => {
    const id = Number(req.params.id)
    const book = books.find(b => b.id === id)

    if (!book) {
        return res.status(404).json({ error: `Book with id ${id} does not exist` })
    }

    res.json(book)
})

app.post('/books', (req, res) => {
    const { title, author } = req.body

    if (!title) {
        return res.status(400).json({ error: 'title is required' })
    }
    if (!author) {
        return res.status(400).json({ error: 'author is required' })
    }

    const id = books.length + 1
    const book = { id, title, author }

    books.push(book)

    res.status(201).json({
        message: 'book created successfully',
        book
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
