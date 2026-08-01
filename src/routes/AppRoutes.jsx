import { Navigate, Routes, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { AuthPage } from '../pages/Auth/AuthPage';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { CollegesPage } from '../pages/Colleges/CollegesPage';
import { StudentsPage } from '../pages/Students/StudentsPage';
import { CompaniesPage } from '../pages/Companies/CompaniesPage';
import { JobsPage } from '../pages/Jobs/JobsPage';
import { PartnersPage } from '../pages/Partners/PartnersPage';
import { RevenuePage } from '../pages/Revenue/RevenuePage';
import { PricingPage } from '../pages/Pricing/PricingPage';
import { ReportsPage } from '../pages/Reports/ReportsPage';
import { SettingsPage } from '../pages/Settings/SettingsPage';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/colleges" element={<CollegesPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/revenue" element={<RevenuePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
