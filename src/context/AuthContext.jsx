import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["accessToken"]);
  const [authState, setAuthState] = useState({
    isLogged: false,
    user: null, // user: { id: null, name: '' } 형태
  });

  useEffect(() => {
    const savedAuthState = localStorage.getItem("authState");
    if (savedAuthState) {
      setAuthState(JSON.parse(savedAuthState));
    }
  }, []);

  const login = (token, userData) => {
    const newAuthState = {
      isLogged: true,
      user: userData,
    };
    setAuthState(newAuthState);
    localStorage.setItem("authState", JSON.stringify(newAuthState));
    setCookie("accessToken", token);
  };

  const logout = () => {
    const newAuthState = {
      isLogged: false,
      user: null,
    };
    setAuthState(newAuthState);
    localStorage.removeItem("authState");
    setCookie("accessToken");
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
