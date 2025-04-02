import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("username", username);
      return Promise.resolve();
    }
    return Promise.reject(new Error("Invalid username or password"));
  },
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // Runs when the user navigates to a new location to check for authentication
  checkAuth: () =>
    localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),

  // Runs when the user navigates to a new location to check for permissions
  getPermissions: () => Promise.resolve(),
};
