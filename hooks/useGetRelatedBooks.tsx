import { useState, useEffect } from "react";
import { collection, query, where, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Book } from "../screens/Home";

const useGetRelatedBooks = (category: string,bid:string) => {
  const [relatedBooks, setRelatedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedBooks = async () => {
      try {
        const bookDocumentRef = collection(db, "books");
        const queryRelatedBooks = query(
          bookDocumentRef,
          where("category", "==", category),
          where("bid","!=",bid),
          limit(4)
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
          setRelatedBooks(booksData)
      } catch (error) {
        console.error("Error fetching books: ", error);
      }finally{
        setLoading(false)
      }
    };

    fetchRelatedBooks()
  }, [category,bid]);
  return {relatedBooks,loading}
};

export default useGetRelatedBooks
