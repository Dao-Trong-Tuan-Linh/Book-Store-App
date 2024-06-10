import { initializeApp } from "firebase/app";
import {getAuth,initializeAuth,getReactNativePersistence} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import {APIKEY,AUTHDOMAIN,PROJECTID} from "@env"

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: "book-app-c72b6.appspot.com",
  messagingSenderId: "212898131193",
  appId: "1:212898131193:web:947647e239fe6ac6d50628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app,{
  persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})

const auth = getAuth()

const db = getFirestore()

export {app,auth,db}