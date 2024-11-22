import { useContext, useState } from "react";
import { RBACContext } from "../../contexts/RBACContext";
import { TextField, Button, MenuItem, Box } from "@mui/material";

const UserForm = () => {
  const { roles, setUsers } = useContext(RBACContext);
  const [newUser, setNewUser] = useState({ name: "", role: "", active: true });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ...newUser },
    ]);
    setNewUser({ name: "", role: "", active: true });
  };

  return (
    <Box>
      <TextField
        label="Name"
        name="name"
        value={newUser.name}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        select
        label="Role"
        name="role"
        value={newUser.role}
        onChange={handleInputChange}
        fullWidth
        style={{ marginTop: "16px" }}
      >
        {roles.map((role) => (
          <MenuItem key={role.id} value={role.name}>
            {role.name}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ marginTop: "16px" }}
      >
        Add User
      </Button>
    </Box>
  );
};

export default UserForm;
