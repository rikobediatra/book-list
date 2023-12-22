/* eslint-disable react/prop-types */
import { useState} from "react";
import BookEdit from "./BookEdit";
import UseBookContext from "../hooks/use-books-context";

// eslint-disable-next-line react/prop-types
function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = UseBookContext();

    const handleDelete = () => {
        deleteBookById(book.id);
    };

    const handleEdit = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;

    if(showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>;
    }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book-image" />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEdit}>Edit</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;