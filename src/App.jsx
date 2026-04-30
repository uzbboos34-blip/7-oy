import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Routes */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="management/rooms" element={<Rooms />} />
          {/* Add more inner routes here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
