/* eslint-disable react/prop-types */
import BookShow from "./BookShow"
import UseBookContext from "../hooks/use-books-context";
function BookList(){
    const {books} = UseBookContext();

    const renderedBook = books.map((book) => {
        return <BookShow book={book} key={book.id}/>
    });
    
    return <div className="book-list">{renderedBook}</div>
}

export default BookList