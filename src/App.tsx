import { Register, Login, Profile } from "@/pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";
import MainLayout from "./components/layouts/MainLayout";
import PublicRoute from "./components/PublicRoute";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <MainLayout>
          <Routes>
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
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
