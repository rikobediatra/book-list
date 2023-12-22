import { useContext, useEffect } from "react";
import BookCreate from './components/BookCreate';
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  const {fetchBook} = useContext(BooksContext);

  useEffect(() => {
    fetchBook();
  }, [fetchBook])

  return (
    <div className="app">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App
