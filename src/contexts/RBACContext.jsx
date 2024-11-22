import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const RBACContext = createContext();

export const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", active: true },
    { id: 2, name: "Jane Smith", role: "Editor", active: false },
  ]);

  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ]);

  return (
    <RBACContext.Provider value={{ users, setUsers, roles, setRoles }}>
      {children}
    </RBACContext.Provider>
  );
};

RBACProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
