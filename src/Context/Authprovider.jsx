import React, { createContext, useEffect, useState } from 'react'
import app from '../../firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app);

export const createmyContextUser = createContext()
const Authprovider = ({children}) => {
      const [user, setUser]= useState(null)
      
      

      const userCreate = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
      }

      const userlogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
      }


      const userlogout = () => {
        return signOut(auth)
      }









      useEffect(()=> {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)

          console.log("rejarb:", currentUser)
        })

        return ()=> unsubcribe()
   },[])





  const info = {user, userCreate,userlogin, userlogout }
  return (
    <div>
        <createmyContextUser.Provider value={info} >
            {children}
            </createmyContextUser.Provider>  
    </div>
  )
}

export default Authprovider
