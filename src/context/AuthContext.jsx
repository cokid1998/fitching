// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 로그인 상태 가져오기
    const savedAuthState = localStorage.getItem("isLogged");
    if (savedAuthState) {
      setIsLogged(JSON.parse(savedAuthState));
    }
  }, []);

  const setLocalStorageLogged = (token) => {
    setIsLogged(true);
    localStorage.setItem("isLogged", true);
    setCookie("accessToken", token);
  };

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem("isLogged");
  };

  return (
    <AuthContext.Provider value={{ isLogged, setLocalStorageLogged, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
