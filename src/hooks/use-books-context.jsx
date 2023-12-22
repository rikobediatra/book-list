import { useContext } from "react";
import BooksContext from "../context/books";

function UseBookContext() {
    return useContext(BooksContext);
}

export default UseBookContext;