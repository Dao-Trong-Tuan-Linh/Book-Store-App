import {Children, createContext,useEffect,useState} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase';

interface IAuth {
    uid:string,
    fullName:string,
    email:string
}

export type AuthContextType = {
    currentUser:IAuth | null,
    setCurrentUser:React.Dispatch<React.SetStateAction<IAuth | null>>
}
export const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextProvider({children}:{children:React.ReactNode}) {
    const [currentUser,setCurrentUser] = useState<IAuth | null>(null)
    useEffect(() => {
        const unsub = onAuthStateChanged(auth,(user) => {
            if(user && user.displayName && user.email) {
                setCurrentUser({uid:user.uid,fullName:user.displayName,email:user.email})
            }
        })
        return () => {
            unsub()
        }
    },[auth])
    console.log('currentUser:',currentUser)
  return (
    <AuthContext.Provider value={{currentUser,setCurrentUser}}>
        {children}
    </AuthContext.Provider>
  )
}
