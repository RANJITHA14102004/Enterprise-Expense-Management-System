import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ManagerDashboard from './pages/ManagerDashboard'; // Add ManagerDashboard import
import EmployeeDashboard from './pages/EmployeeDashboard';
import AdminDashboard from './pages/AdminDashboard'; // Correct the path if needed
import Profile from './pages/Profile';
import ExpenseList from './pages/expenses/ExpenseList';
import AddExpense from './pages/expenses/AddExpense';
import EditExpense from './pages/expenses/EditExpense';
import ApprovalRequests from './pages/approvals/ApprovalRequests';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Dashboard Pages */}
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        
        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />
        
        {/* Expense Management Pages */}
        <Route path="/expenses" element={<ExpenseList />} />
        <Route path="/expenses/add" element={<AddExpense />} />
        <Route path="/expenses/edit/:id" element={<EditExpense />} />
        
        {/* Approval Requests for Managers */}
        <Route path="/approvals" element={<ApprovalRequests />} />
        
        {/* User Management (Admin Only) */}
        <Route path="/admin/users" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import ManagerDashboard from './pages/ManagerDashboard';
// import EmployeeDashboard from './pages/EmployeeDashboard';
// import AdminDashboard from './pages/AdminDashboard';
// import Profile from './pages/Profile';
// import ExpenseList from './pages/expenses/ExpenseList';
// import AddExpense from './pages/expenses/AddExpense';
// import EditExpense from './pages/expenses/EditExpense';
// import ApprovalRequests from './pages/approvals/ApprovalRequests';
// import UserManagement from './pages/UserManagement';
// import PrivateRoute from './components/PrivateRoute'; // import PrivateRoute

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route path="/manager-dashboard" element={<PrivateRoute element={ManagerDashboard} />} />
//         <Route path="/admin-dashboard" element={<PrivateRoute element={AdminDashboard} />} />
//         <Route path="/employee-dashboard" element={<PrivateRoute element={EmployeeDashboard} />} />
//         <Route path="/profile" element={<PrivateRoute element={Profile} />} />
//         <Route path="/expenses" element={<PrivateRoute element={ExpenseList} />} />
//         <Route path="/expenses/add" element={<PrivateRoute element={AddExpense} />} />
//         <Route path="/expenses/edit/:id" element={<PrivateRoute element={EditExpense} />} />
//         <Route path="/approvals" element={<PrivateRoute element={ApprovalRequests} />} />
//         <Route path="/admin/users" element={<PrivateRoute element={UserManagement} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
