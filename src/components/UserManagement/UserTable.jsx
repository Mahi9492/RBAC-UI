import { useContext } from "react";
import { RBACContext } from "../../contexts/RBACContext";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

const UserTable = () => {
  const { users, setUsers } = useContext(RBACContext);

  const toggleUserStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.active ? "Active" : "Inactive"}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color={user.active ? "secondary" : "primary"}
                onClick={() => toggleUserStatus(user.id)}
              >
                {user.active ? "Deactivate" : "Activate"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
