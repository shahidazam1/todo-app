import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import loadable from "@loadable/component";
import CompletedTasks from "./pages/CompletedTasks";
import CreateTodo from "./pages/CreateTodo";
import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
import Profile from "./pages/profile";
import ProgressTasks from "./pages/ProgressTasks";
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos";

const Login = loadable(() => import("./pages/Login"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/progress" element={<ProgressTasks />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/completed-task" element={<CompletedTasks />} />
          <Route path="/create-task" element={<CreateTodo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
