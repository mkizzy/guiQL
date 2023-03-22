import { Navigate, Route, RouteProps } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface ProtectedRouteProps extends RouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element: Component,
  ...rest
}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('/api/check-auth');
        if (response.status === 200) {
          setAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      element={
        authenticated ? (
          Component
        ) : (
          <Navigate to="/login" replace={true} />
        )
      }
    />
  );
};

export default ProtectedRoute;
