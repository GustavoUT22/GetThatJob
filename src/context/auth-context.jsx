import { createContext, useContext, useEffect, useState } from "react";

// import { createUser, getUser } from "../services/user-service";
import * as auth from "../services/professional-services";
import * as AuthRecruiter from "../services/recruiter-service";
import { tokenKey } from "../config";
import { getUser } from "../services/user-service";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // getUser().then(user => setUser(user)).catch(error => console.log(error))
    console.log("hello");
    getUser().then(setUser).catch(console.log);
  }, []);

  function login(credentials) {
    console.log("Login");
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function loginRecruiter(credentials) {
    console.log("Login");
    AuthRecruiter.loginRecruiter(credentials).then(setUser).catch(console.log);
  }
  // function signup(userData) {
  //   createUser(userData).then(setUser).catch(console.log);
  // }

  function logout() {
    auth
      .logout()
      .then(() => {
        sessionStorage.removeItem(tokenKey);
        setUser(null);
      })
      .catch(console.log());
  }

  const value = {
    user,
    login,
    // signup,
    logout,
    loginRecruiter,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
