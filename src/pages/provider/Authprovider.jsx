import { createContext, useContext, useState } from "react";

 const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  let isUserloggedin;
  let token = sessionStorage.getItem("userToken");
  if (token) {
    isUserloggedin = true;
  } else {
    isUserloggedin = false;
  }

  const [isloggedin, setIsLoggedin] = useState(isUserloggedin);
  return (
    <AuthContext.Provider value={{ isloggedin, setIsLoggedin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=()=>{
    return useContext(AuthContext)
}
