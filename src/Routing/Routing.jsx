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


function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={
                    <DashboardLayouts>
                        <Routes>
                            <Route path="/" element={
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
                        </Routes>
                    </DashboardLayouts>
                } />
            </Routes>
        </Router>
    );
}

export default Routing;
