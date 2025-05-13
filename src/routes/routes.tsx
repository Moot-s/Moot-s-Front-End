import { Routes, Route } from 'react-router'
import LandingPage from '../presentation/pages/Landing/LandingPage.component'
import AuthPage from '../presentation/pages/Auth/Auth.component'
import Google from '../presentation/pages/OAuth/Google/GoogleOAuth.component'
import PrivateRoute from './guards/PrivatedRoute'
import DashboardPage from '../presentation/pages/Dashboard/Dashboard.component'

export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/connect/google/redirect" element={<Google />} />
        <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      </Routes>
    )
  }