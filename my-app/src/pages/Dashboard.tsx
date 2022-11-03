import { Box, Typography, Button, Avatar } from "@mui/material";
import Layout from "./Layout";

const Dashboard = () => {
  return (
    <>
      <Layout />
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          p={2}
          m={2}
          width="20%"
          height="100px"
          sx={{ backgroundColor: "grey", borderRadius: "5px" }}
        >
          <Typography variant="subtitle2">No of todos</Typography>
          <Typography variant="body2">2</Typography>
        </Box>
        <Box
          p={2}
          m={2}
          width="20%"
          height="100px"
          sx={{ backgroundColor: "grey", borderRadius: "5px" }}
        >
          <Typography variant="subtitle2">Progress</Typography>
          <Typography variant="body2">2</Typography>
        </Box>
        <Box
          p={2}
          m={2}
          width="20%"
          height="100px"
          sx={{ backgroundColor: "grey", borderRadius: "5px" }}
        >
          <Typography variant="subtitle2">completed</Typography>
          <Typography variant="body2">2</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
