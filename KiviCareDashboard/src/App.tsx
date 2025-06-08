import { ReactNode, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GoogleOAuthProvider } from '@react-oauth/google';

interface AppProps {
  children?: ReactNode;
}

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const App: React.FC<AppProps> = () => {
  useEffect(() => {
    const preloading = document.getElementById('pre-loading') as HTMLElement | null;
    if (preloading) {
      preloading.remove();
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;