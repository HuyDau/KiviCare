import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;