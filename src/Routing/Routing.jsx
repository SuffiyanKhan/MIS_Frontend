import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProtectedRoute from '../Components/ProtectedRoute/ProtectedRoute';
import DashboardLayouts from '../Layout/DashboardLayouts';
import Dashboard from '../Pages/Dashboard';
import ManageStores from '../Pages/ManageStores';
import DetailesManageStores from '../Pages/DetailesManageStores';
import ManageUsers from '../Pages/ManageUsers';
import ManageMarkets from '../Pages/ManageMarkets';
import DetailesManageMarkets from '../Pages/DetailesManageMarkets';
import Login from '../Auth/Login';
import Reports from '../Pages/Reports';
import StoresTakeOver from '../Pages/StoresTakeOver';
import StoresTakeOverDetailed from '../Pages/StoresTakeOverDetailed';
import ManageLeasing from '../Pages/ManageLeasing';
import ManageLeasingDetailed from '../Pages/ManageLeasingDetailed';
import ActivityLogs from '../Pages/ActivityLogs';
import Notifications from '../Pages/Notifications';
import NotificationsSplitView from '../Pages/NotificationsSplitView';
import SettingsPage from '../Pages/SettingsPage';
import EmployeeDetailPage from '../Pages/EmployeeDetailPage';


function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <Login />
                    // <ProtectedRoute allowedDepartments={'Manager'}>
                    // </ProtectedRoute>
                } />
                <Route path="*" element={
                    <DashboardLayouts>
                        <Routes>
                            <Route path="/dashboard" element={
                                <Dashboard />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/manage-store" element={
                                <ManageStores />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/detailed-store/:id" element={
                                <DetailesManageStores />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/manage-users" element={
                                <ManageUsers />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/manage-markets" element={
                                <ManageMarkets />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/detailed-markets/:id" element={
                                <DetailesManageMarkets />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/reports" element={
                                <Reports />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/store-take-over" element={
                                <StoresTakeOver />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/detailed-store-take-over/:id" element={
                                <StoresTakeOverDetailed />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/manage-leasing" element={
                                <ManageLeasing />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/detailed-leasing" element={
                                <ManageLeasingDetailed />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/activity-logs" element={
                                <ActivityLogs />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/notifications" element={
                                <NotificationsSplitView />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/setting" element={
                                <SettingsPage />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            <Route path="/employee-view" element={
                                <EmployeeDetailPage />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } />
                            {/* <Route path="/notifications" element={
                                <Notifications />
                                // <ProtectedRoute allowedDepartments={'Manager'}>
                                // </ProtectedRoute>
                            } /> */}
                        </Routes>
                    </DashboardLayouts>
                } />
            </Routes>
        </Router>
    );
}

export default Routing;
