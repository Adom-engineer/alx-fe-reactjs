import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const { isAuthenticated } = useAuth();

export default function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}