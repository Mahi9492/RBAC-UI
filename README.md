# **Admin Dashboard: Role-Based Access Control (RBAC)**

A React-based admin dashboard for managing users, roles, and permissions. This project implements Role-Based Access Control (RBAC) to restrict and allow access based on user roles.

## **Features**

### **User Management**
- View a list of users.
- Add, edit, and delete users.
- Assign roles to users.
- Toggle user status (Active/Inactive).

### **Role Management**
- View roles and their associated permissions.
- Add, edit, or delete roles.
- Assign permissions to roles dynamically.

### **Dynamic Permissions**
- Enforce role-based restrictions on actions and UI components.
- Render specific features based on user roles.

### **Security Features**
- **Role-Based Rendering:** Users see only actions or components they are authorized to access.
- **Token-Based Authorization:** Protects API calls and simulates secure communication.
- **Route Protection:** Prevent unauthorized access to restricted pages.

---

## **Technologies Used**

- **Frontend:**
  - React
  - Material-UI for styling and components
  - Context API for state management

- **Backend Simulation:**
  - Mock API for CRUD operations
  - Role-based validation for simulated endpoints

---

## **Getting Started**

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rbac-dashboard.git
   cd rbac-dashboard
2. Install dependencies:
  ```bash
  npm install
  ```
### Start the Development Server

3. Start the development server:
   ```bash
   npm start

4. Open the app in your browser:

