import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  
  return (
    <Router>
      <CssBaseline />
      <Pages />
    </Router>
  );
}

const Pages = () => {
  const routes = useRoutes([
    { path: '/', element: <Dashboard /> },
    { path: '/settings', element: <SignUp /> },
    { path: '/share', element: <SignUp /> },
    { path: '/companies/data', element: <SignIn /> },
    { path: '/engineers/data', element: <SignIn /> },
  ]);

  return routes;
};
export default App;