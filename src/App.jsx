import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import MyTasks from './pages/MyTasks';
import Kanban from './pages/Kanban';
import Sprints from './pages/Sprints';
import Reports from './pages/Reports';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/sprints" element={<Sprints />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}