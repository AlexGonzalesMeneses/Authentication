import React from 'react';
import { createContext, useState } from 'react';
const UserContext = createContext();
const isLogInLocal = localStorage.getItem('isLogIn');
const InitialUser=(isLogInLocal=='true')?true:null;
const tokenString = localStorage.getItem('token');
const userToken = JSON.parse(tokenString);
const UserProvider = ({children}) => {
    const [user, setUser ] = useState(InitialUser);

    const login = ()=>{      
      //To do Get
      localStorage.setItem('token', JSON.stringify(userToken));
      
      setUser(true);
    };
    const logout = ()=>{
        setUser(null);
    };
    const data = {user, login, logout};
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>);
};

export {UserProvider};
export default UserContext;
