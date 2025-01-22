import { Register, Login, Profile } from "@/pages";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";
import MainLayout from "./components/layouts/MainLayout";
import PublicRoute from "./components/PublicRoute";
import { AnimatePresence } from "framer-motion";

function AnimatedTransitions() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public routes - redirect to profile if already logged in */}
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Default route - redirect to profile if token exists, otherwise to login */}
        <Route
          path="/"
          element={<Navigate to={token ? "/profile" : "/login"} replace />}
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <MainLayout>
          <AnimatedTransitions />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
