import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

import loadable from "@loadable/component";
import CompletedTasks from "./pages/CompletedTasks";
import CreateTodo from "./pages/CreateTodo";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/profile";
import ProgressTasks from "./pages/ProgressTasks";
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos";
import Login from "./pages/Login";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
}

export default App;
