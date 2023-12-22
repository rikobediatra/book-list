/* eslint-disable react/prop-types */
import { useState } from "react";
import UseBookContext from "../hooks/use-books-context";


function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = UseBookContext;

    const handleChange =  (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">Update</button>
        </form>
    );
}

export default BookEdit;