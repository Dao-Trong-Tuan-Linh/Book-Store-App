import { useState, useEffect } from 'react';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { db } from "../firebase/firebase";
import { Book } from '../screens/Home';

const useGetBooksByCategory = (category: string) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const bookDocumentRef = collection(db, "books");
        const queryBooks = query(bookDocumentRef, where("category", "==", category));
        const booksSnapshot = await getDocs(queryBooks);

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

        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching books: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [category]);

  return { books, loading };
};

export default useGetBooksByCategory;
