import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {};

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width={500}>
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField
              size="small"
              label="UserName"
              fullWidth
              onChange={(e: any) =>
                setState({ ...state, username: e.target.value })
              }
              value={state?.username}
            />
          </Box>
          <Box mt={3}>
            <TextField
              size="small"
              fullWidth
              label="Password"
              onChange={(e: any) =>
                setState({ ...state, password: e.target.value })
              }
              value={state?.password}
            />
            <Box mt={3}>
              <Button color="secondary" variant="contained" type="submit">
                submit
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
