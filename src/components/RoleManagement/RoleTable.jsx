import  { useContext } from "react";
import { RBACContext } from "../../contexts/RBACContext";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const RoleTable = () => {
  const { roles } = useContext(RBACContext);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Role</TableCell>
          <TableCell>Permissions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.id}>
            <TableCell>{role.name}</TableCell>
            <TableCell>{role.permissions.join(", ")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RoleTable;
