import { ReactNode, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

interface AppProps {
  children?: ReactNode;
}

const App: React.FC<AppProps> = () => {
  useEffect(() => {
    const preloading = document.getElementById('pre-loading') as HTMLElement | null;
    if (preloading) {
      preloading.remove();
    }
  }, []);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;