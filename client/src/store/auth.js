import {createContext, useEffect, useState} from "react";

const AuthContext= createContext()

const AuthProvider=({children})=>{

  const [user,setUser]=useState("")
  const[isloading,setIsloading]=useState(true)
  
  //get user data from local storage if it exists

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

    // jwt authorization to get current log in user from server

      const userAuthorization= async ()=>{
         try {
          setIsloading(true)
          const data= await fetch('http://localhost:5000/api/auth/student',{
            headers:{
              authorization:authorizationToken
            }
          })
          const res=await data.json()
          setUser(res)
          setIsloading(false)
          
         } catch (error) {
          console.log('Error', error);
          
         }

      }

      useEffect(()=>{
        userAuthorization()
      },[]);


    return <AuthContext.Provider value={{storeToken, logoutUser,isLogin,authorizationToken,user,isloading}}>
        {children}
    </AuthContext.Provider>
}

export{AuthContext,AuthProvider}