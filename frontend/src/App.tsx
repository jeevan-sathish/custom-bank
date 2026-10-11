import { Route, Routes } from "react-router-dom";
import Home from "./view/pages/Home";
import Dashboard from "./view/pages/Dashboard";
import Auth from "./view/pages/Auth";
import Nav from "./view/layout/Nav";
import Footer from "./view/layout/Footer";
import ProtectedRoute from "./services/protectedRoute/ProtectedRoute";

const App: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
