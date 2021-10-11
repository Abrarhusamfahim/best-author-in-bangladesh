import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from '../Firebase/firebase.init';
initAuthentication()

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const googleLogin =()=>{
      return  signInWithPopup(auth, googleProvider)
        
    }
    //sign out
    const logoutHandler = ()=>{
        signOut(auth).then(() => {
           setUser({})
          }).catch((error) => {
            setError(error.message)
          });
          
    }
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setError()
        }
      });
   },[])
    return {
        user,
        error,
        googleLogin,
        logoutHandler
    }
};

export default useFirebase;