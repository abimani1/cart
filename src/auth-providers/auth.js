import { createContext, useContext, useEffect, useState } from "react"
import { auth } from '../config/firebase-config'
import { onAuthStateChanged,onIdTokenChanged, signOut } from "firebase/auth"
import "firebase/compat/auth";

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) =>{

    const [user, setUser] = useState(null)
    const [token, settoken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser(null)
        }
        setLoading(false)
      })
      return () => unsubscribe()
    }, [])

    useEffect(() => {
      const refreshtoken = onIdTokenChanged(auth, async (user) => {
          if (user) {
              const token = await user.getIdToken();
              settoken(token)
              localStorage.setItem("userToken", JSON.stringify(token))
          } else {
              setUser(null)
          }
          setLoading(false)
      })

      return () => refreshtoken()
    }, [])

    useEffect(() => {
      const handle = setInterval(async () => {
          const user = auth.currentUser;
          if (user) await user.getIdToken(true);
      }, 10 * 60 * 1000);

      // clean up setInterval
      return () => clearInterval(handle);
    }, []);

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }


    return(
        <AuthContext.Provider value={{user, token, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
