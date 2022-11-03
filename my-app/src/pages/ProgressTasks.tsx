import { Box, Typography } from "@mui/material";
import Layout from "./Layout";

const ProgressTasks = () => {
  return (
    <>
      <Layout />
      <Box p={4}>
        <Box
          p={2}
          sx={{
            backgroundColor: "grey",
            borderRadius: "5px",
            width: "300px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box textAlign="end" sx={{ color: "yellow" }}>
            Progress
          </Box>
          <Typography variant="subtitle2">Progress</Typography>
          <Typography variant="body2">Progress</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProgressTasks;
