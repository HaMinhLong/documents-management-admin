import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "@/components/PrivateRoute";
import { AuthProvider } from "@/components/AuthProvider";
import { MessageProvider } from "@/context/MessageContext";
import PublicRoute from "@/components/PublicRoute";

import HomePage from "@/pages/HomePage";
import UserPage from "@/pages/AccountSetting/User";

import LoginPage from "@/pages/LoginPage";
import UniversityPage from "./pages/UniversityPage";
import SubjectPage from "./pages/SubjectPage";

const App = () => {
  return (
    <AuthProvider>
      <MessageProvider>
        <Router>
          <Routes>
            {/* Login Routes */}
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<HomePage />} />
            </Route>

            {/* User Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/account-setting/user" element={<UserPage />} />
            </Route>

            {/* University Routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/category-setting/university"
                element={<UniversityPage />}
              />
            </Route>

            {/* Subject Routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/category-setting/subject"
                element={<SubjectPage />}
              />
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Router>{" "}
      </MessageProvider>
    </AuthProvider>
  );
};

export default App;
