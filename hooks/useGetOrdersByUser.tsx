import { useState, useEffect } from 'react';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { db } from "../firebase/firebase";
import { Book } from '../screens/Home';

interface BookItem {
    bid:string,
    bookName:string,
    image:string,
    newPrice:string,
    oldPrice:string,
    quantity:number
}
interface IOrder {
    oid:string,
    books:BookItem[],
    deliveryStatus:string,
    totalPrice:number

}
const useGetOrdersByUser = (uid:string) => {
    const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const orderDocumentRef = collection(db, "orders");
        const queryOrders = query(orderDocumentRef, where("uid", "==", uid));
        const ordersSnapshot = await getDocs(queryOrders);

        const ordersData: IOrder[] = ordersSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            oid:data.oid,
            books: data.books,
            deliveryStatus: data.deliveryStatus,
            totalPrice: data.totalPrice,
          };
        });

        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching books: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [uid]);

  return { orders, loading };
}

export default useGetOrdersByUser
