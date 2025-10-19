import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Github from "./pages/Github";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import Setting from "./pages/Dashboard/Setting";
import { useState } from "react";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    // ❌ Not logged in → redirect to /login
    return <Navigate to="/" replace />;
  }

  // ✅ Logged in → allow access
  return children;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<Github />} />

        {/* Nested Routes */}
        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route> */}

        {/* 👇 Protected Route wrapper */}
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}

        {/* 👇 Nested Protected Route wrapper */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
