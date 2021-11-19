import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import AuthProvider from './Pages/Context/AuthProvider';
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Review from "./Pages/Home/Reviews/Review/Review";
import Items from "./Pages/Items/Items/Items";
import Order from "./Pages/Items/Order/Order";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/register">
                <Register></Register>
            </Route>
            <PrivateRoute path="/items">
                <Items></Items>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
            </PrivateRoute>
            
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        
    </AuthProvider>
  );
}

export default App;
