import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/notFound';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Banners from './pages/banners';
import AddBanner from './pages/newBanner';
import ChatBox from './chatbot/chatBot';
import Register from './pages/register';
import Splash from './pages/splash';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Splash />} /> 
        <Route exact path="/login" element={<Login/>} />  
        <Route exact path="/register" element={<Register/>} />  
        <Route exact path="dashboard" element={<Dashboard/>} />  
        <Route exact path="banners" element={<Banners/>} /> 
        <Route exact path="newbanner" element={<AddBanner/>} />
        <Route exact path="chatAi" element={<ChatBox/>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;