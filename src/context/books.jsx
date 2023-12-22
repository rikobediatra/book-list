/* eslint-disable no-unused-vars */
import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

// eslint-disable-next-line react/prop-types
function Provider( {children} ) {
    const [books, setbooks] = useState([]);

    const fetchBook = useCallback(async () => {
      const response = await axios.get('http://localhost:3001/books');
      setbooks(response.data);
    }, []);

    
    const createBook = async (title) => {
        const response =  await axios.post('http://localhost:3001/books', {
        title
        });

        const updateBook = [ ...books, response.data ];
        setbooks(updateBook);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        const updateBook = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data};
            }

        return book;
        });

        setbooks(updateBook);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
    
            const updateBook = books.filter((book) => {
            return book.id !== id;
        });

        setbooks(updateBook);
    };

    const valueToShare = {
        books,
        createBook,
        fetchBook,
        editBookById,
        deleteBookById
    };
    
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export {Provider};
export default BooksContext;