import { Box, Typography } from "@mui/material";

const CompletedTasks = () => {
  return (
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
        <Box textAlign="end" sx={{ color: "green" }}>
          Completed
        </Box>
        <Typography variant="subtitle2">Progress</Typography>
        <Typography variant="body2">Progress</Typography>
      </Box>
    </Box>
  );
};

export default CompletedTasks;
