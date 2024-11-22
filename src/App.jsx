import { RBACProvider } from "./contexts/RBACContext";
import UserTable from "./components/UserManagement/userTable";
import UserForm from "./components/UserManagement/UserForm";
import RoleTable from "./components/RoleManagement/RoleTable";
import { Container, Typography, Box } from "@mui/material";

const App = () => {
  return (
    <RBACProvider>
      <Container>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard: Role-Based Access Control (RBAC)
        </Typography>
        <Box>
          <Typography variant="h5">User Management</Typography>
          <UserForm />
          <UserTable />
        </Box>
        <Box style={{ marginTop: "32px" }}>
          <Typography variant="h5">Role Management</Typography>
          <RoleTable />
        </Box>
      </Container>
    </RBACProvider>
  );
};

export default App;
