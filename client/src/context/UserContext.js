import React from 'react';
import { createContext, useState } from 'react';
import { authenticate, register } from '../services/login';

const UserContext = createContext();
const isLogInLocal = localStorage.getItem('isLogIn');
const isToken = localStorage.getItem('token');
const InitialUser = isLogInLocal == 'true' ? true : null;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(InitialUser);

  const login = async ({ email, password }) => {
    try {
      const user = await authenticate({ email, password });
      localStorage.setItem('token', user.token);
      localStorage.setItem('userName', user.userName);
      localStorage.setItem('email', user.email);
      localStorage.setItem('fullName', user.fullName);
      localStorage.setItem('isLogIn', true);
      localStorage.setItem('UserId', user.id);
      setUser(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('fullName');
    localStorage.removeItem('isLogIn');
    localStorage.removeItem('UserId');
  };

  const signUp = async ({ email, password, fullName, userName }) => {
    try {
      const user = await register({ email, password, fullName, userName });
      localStorage.setItem('token', JSON.stringify(user.token));
      localStorage.setItem('userName', JSON.stringify(user.userName));
      localStorage.setItem('email', JSON.stringify(user.email));
      localStorage.setItem('fullName', JSON.stringify(user.fullName));
      localStorage.setItem('isLogIn', JSON.stringify(true));
      localStorage.setItem('UserId', JSON.stringify(user.id));
      setUser(true);
    } catch (error) {
      console.log(error);
    }
  };

  const data = { user, login, logout, signUp };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
