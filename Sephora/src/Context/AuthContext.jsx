import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userdetail,setUserDetail]=useState({})
  const [isAuth, setIsAuth] = useState(false);
  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem("userData")) || {};
    console.log('storedData: ', storedData);
    
    if(storedData._id){
      setUserDetail(storedData)
      setIsAuth(true)
    }
  },[isAuth])
  
  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth,userdetail}}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
