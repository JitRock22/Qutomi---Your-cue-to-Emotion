import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PrivateRoute from './utils/privateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from "./pages/Resetpassword";
import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage on app load
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  return (
    <Router>
      <Routes>
        {/* PrivateRoute now gets isLoggedIn */}
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/home" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        </Route>

        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/home" /> : <Signup />}
        />
      </Routes>
    </Router>
  );
}

export default App;
