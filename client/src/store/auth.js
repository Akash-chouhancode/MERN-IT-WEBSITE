import {createContext, useState} from "react";

const AuthContext= createContext()

const AuthProvider=({children})=>{

  const [token,setToken]=useState(localStorage.getItem("token")) 

   const authorizationToken= `Bearer ${token}`
    

    const storeToken=(severtoken)=>{
       localStorage.setItem("token",severtoken)
       setToken(severtoken)
    }

    

    // logout functionlaty

    const logoutUser=()=>{
      setToken("")
      localStorage.removeItem("token")
    }

    let isLogin=!!token
    console.log("login",isLogin) 



    return <AuthContext.Provider value={{storeToken, logoutUser,isLogin,authorizationToken}}>
        {children}
    </AuthContext.Provider>
}

export{AuthContext,AuthProvider}