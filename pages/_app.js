import { useState, createContext, useEffect } from 'react'
import AuthContext from '@/components/context'
import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import jwt_decode from 'jwt-decode'
import jwt from 'jsonwebtoken'
config.autoAddCss = false
export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("token") !== null) {
        console.log(localStorage.getItem("token"));
        const token = localStorage.getItem("token");
        const verifying = jwt_decode(token, process.env.JWT_SECRET, { header: true });
        if (verifying) { setIsLoggedIn(true); setUserEmail(verifying.email) }
        else setIsLoggedIn(false)
      }
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (<AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userEmail }}><Component {...pageProps} /></AuthContext.Provider>)
}
