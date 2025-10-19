import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MealProvider } from './context/MealContext';
import Landing from "./pages/LandingPage/LandingPage";
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CheckoutSuccess from './pages/CheckoutSuccessPage/CheckoutSuccessPage';
import Admin from './pages/Admin/AdminDashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <MealProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/meal/:id" element={<ProductDetails />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </MealProvider>
    </AuthProvider>
  );
}

export default App;