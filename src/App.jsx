// import SideBar from "./components/SideBar";
import LoginPage from "./pages/LoginPage";
import AuthenticatedApp from "./Authenticated";
import UnauthenticatedApp from "./Unauthenticated";
import { useAuth } from "./context/auth-context";

function App() {
  const { user } = useAuth();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
