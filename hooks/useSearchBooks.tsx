import { useState, useEffect } from "react";
import { collection, query, where, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Book } from "../screens/Home";

const useSearchBooks = (pattern:string) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedBooks = async () => {
      try {
        const bookDocumentRef = collection(db, "books");
        const queryRelatedBooks = query(
          bookDocumentRef,
        );
        const booksSnapshot = await getDocs(queryRelatedBooks);

        const booksData: Book[] = booksSnapshot.docs.map(doc => {
            const data = doc.data();
            return {
              bid: data.bid,
              bookName: data.bookName,
              newPrice: data.newPrice,
              oldPrice: data.oldPrice,
              images: data.images,
              author: data.author,
              description: data.description,
              genre: data.genre,
              publisher: data.publisher,
              category: data.category,
            };
          });
          const updateBooks = booksData.filter(book => book.bookName.includes(pattern));
          setBooks(updateBooks)
      } catch (error) {
        console.error("Error fetching books: ", error);
      }finally{
        setLoading(false)
      }
    };

    fetchRelatedBooks()
  }, [pattern]);
  return {books,loading}
};

export default useSearchBooks
