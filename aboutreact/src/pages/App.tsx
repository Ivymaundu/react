// import TodoList from './todo-list.tsx'
import About from './about.tsx'
import ContactUs from './contact-us.tsx'
import './App.css'
import HomeComponent from './index.tsx'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout.tsx';
import Login from './login.tsx'
import ProtectedRoute from './protectedroute.tsx';
import Products from './products.tsx'
import GetProducts from './getproducts.tsx'
// import React from 'react'


function App() {
  return (
    <Routes>
      
      <Route element={< Layout/>} >
        <Route path="/" element={< HomeComponent />} />
        <Route path="/about" element={<  About />}/>
        <Route path="/contact-us" element={< ContactUs />} />
        
      </Route>
      <Route path="/login" element={<  Login />} />
      <Route path="/products" element={<GetProducts/>} />
      
    </Routes>
    )
}

export default App;


// create a logout page and import it here
      // Add logic to reset the global state to default once a user clicks on log out
      // In the logout page have the user confirm they want to log out. This step clears the global state and sets it back to default isLoggedIn: false
      //