import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';


function App() {
  
  return (
    <Router>
      <Pages />
    </Router>
  );
}

const Pages = () => {
  const routes = useRoutes([
    { path: '/', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/home', element: <SignUp /> },
    { path: '/companies/data', element: <SignIn /> },
    { path: '/engineers/data', element: <SignIn /> },
  ]);

  return routes;
};
export default App;