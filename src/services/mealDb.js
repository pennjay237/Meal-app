import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/MealContext";

export default function PrivateRoute({ children }) {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/" />;
}
