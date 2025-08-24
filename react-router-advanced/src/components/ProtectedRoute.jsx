import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // Simulate login status

export default function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}