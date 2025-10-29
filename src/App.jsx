import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PrivateRoute from './utils/PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/signup';
import ResetPassword from "./pages/Resetpassword";
import Home from './pages/Home';
import SuggestionPage from './pages/Suggestionpage';
import Landing from './pages/Landing';
import SuccessPage from './pages/Successpage';
import ErrorPage from './pages/Errorpage';
// import { Analytics } from "@vercel/analytics/react"
// import Experience3D from './pages/experience';
// import Jackpot from './pages/jackpot';

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
        {/* <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/suggestions" element={<SuggestionPage />} />
        </Route> */}
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
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} />
        {/* <Route
          path="/experience"
          element={<Experience3D />}
        /> */}
        {/* <Route path="/jackpot" element={<Jackpot />} /> */}
        <Route path="/suggestions" element={<SuggestionPage />} />
        {/* <Route path="/oauth-callback" element={<OAuthcallback />} /> */}
      </Routes>
      {/* <Analytics /> */}
    </Router>
  );
}

export default App;
