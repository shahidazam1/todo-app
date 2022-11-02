import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
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
              label="Full Name"
              fullWidth
              onChange={(e: any) =>
                setState({ ...state, name: e.target.value })
              }
              value={state?.name}
            />
          </Box>
          <Box mt={2}>
            <TextField
              size="small"
              label="Email"
              fullWidth
              onChange={(e: any) =>
                setState({ ...state, email: e.target.value })
              }
              value={state?.name}
            />
          </Box>
          <Box mt={2}>
            <TextField
              size="small"
              label="Mobile"
              fullWidth
              onChange={(e: any) =>
                setState({ ...state, mobile: e.target.value })
              }
              value={state?.name}
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

export default SignUp;
