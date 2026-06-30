let books = [{
    id:1,title:"The Great Gatsby",author:"F. Scott Fitzgerald",year:1925},
    {id:2,title:"To Kill a Mockingbird",author:"Harper Lee",year:1960},
    {id:3,title:"1984",author:"George Orwell",year:1949},
    {id:4,title:"Pride and Prejudice",author:"Jane Austen",year:1813},
    {id:5,title:"The Catcher in the Rye",author:"J.D. Salinger",year:1951}
];

module.exports = {
    getAll: () => books,                // returns entire book array
    getById: (id) => books.find(b => b.id == parseInt(id)),
    add: (newBook) => {
        const bookToAdd = {
            id: books.length ? books[books.length - 1].id + 1 : 1,   // last book id if true
            title: newBook.title,
            author: newBook.author,
            year: newBook.year
        };
        books.push(bookToAdd);
        return bookToAdd;
    },
    update: (id, UpdateData) => {
        const index = books.findIndex(b => b.id == parseInt(id));
        if(index !== -1){    // If the book exists, update it
            books[index] = {...books[index], ...UpdateData, id: parseInt(id)};
            return books[index];
        }
        return null;
    },
    delete: (id) => {
        const index = books.findIndex(b => b.id == parseInt(id));
        if(index !== -1){
            return books.splice(index, 1)[0];
        }
        return null;
    }
};