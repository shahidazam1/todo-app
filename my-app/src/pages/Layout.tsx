import { Box, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box mt={2} position="fixed" top={0} width="90vw">
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Button
              sx={{ marginLeft: "10px" }}
              variant="contained"
              color="success"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </Button>
            <Button
              sx={{ marginLeft: "10px" }}
              variant="contained"
              color="success"
              onClick={() => navigate("/create-task")}
            >
              Create Toda
            </Button>

            <Button
              sx={{ marginLeft: "10px" }}
              onClick={() => navigate("/todo")}
              variant="contained"
              color="info"
            >
              todo
            </Button>
            <Button
              onClick={() => navigate("/completed-task")}
              sx={{ marginLeft: "10px" }}
              variant="contained"
              color="warning"
            >
              completed
            </Button>
            <Button
              onClick={() => navigate("/progress")}
              sx={{ marginLeft: "10px" }}
              variant="contained"
              color="secondary"
            >
              progress
            </Button>
          </Box>
          <Box>
            <Avatar />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
