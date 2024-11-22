export const mockApi = {
  getUsers: () =>
    Promise.resolve([
      { id: 1, name: "John Doe", role: "Admin", active: true },
      { id: 2, name: "Jane Smith", role: "Editor", active: false },
    ]),
  getRoles: () =>
    Promise.resolve([
      { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
      { id: 2, name: "Editor", permissions: ["Read", "Write"] },
      { id: 3, name: "Viewer", permissions: ["Read"] },
    ]),
};
