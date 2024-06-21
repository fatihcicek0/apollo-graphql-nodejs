
let users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Jhon' },
    { id: '4', name: 'Jason' },
    { id: '5', name: 'Tom' },
    { id: '6', name: 'michael' },
  
  ];
  
  let books = [
    { id: '1', title: 'Book 1', author: '1' },
    { id: '2', title: 'Book 2', author: '2' },
    { id: '3', title: 'Book 3', author: '5' },
    { id: '4', title: 'Book 4', author: '2' }
  ];
const resolvers = {

    Query: {
        users: () => users,
        books: () => books,
    },
    Mutation: {
        addUser: (_, { name }) => {
            const user = { id: `${users.length + 1}`, name };
            users.push(user);
            return user;
        },
        addBook: (_, { title, authorId, description }) => {
            const book = { id: `${books.length + 1}`, title, author: authorId, description };
            books.push(book);
            return book;
        },
        updateBook: (_, { id, title, authorId, description }) => {
            const bookIndex = books.findIndex(book => book.id === id);
            if (bookIndex === -1) throw new Error('Book not found');

            const book = books[bookIndex];
            const updatedBook = { ...book, title, author: authorId || book.author, description };
            books[bookIndex] = updatedBook;
            return updatedBook;
        },
        deleteBook: (_, { id }) => {
            const bookIndex = books.findIndex(book => book.id === id);
            if (bookIndex === -1) throw new Error('Book not found');

            const [deletedBook] = books.splice(bookIndex, 1);
            return deletedBook;
        },
    }
};
module.exports = resolvers;