import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { signin } from "../api/services/auth";
import Layout from "./Layout";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const { mutate, isLoading } = useMutation(signin, {
    onSuccess: (res: any) => {
      localStorage.setItem("token", res.data.access_token);
      window.location.href = "/";
    },
    onError: (err: any) => {
      if (err.response.data.statusCode === 422) {
        toast.error("Invalid Credentials");
      } else {
        toast.error(err.response.data.message);
      }
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate(state);
  };

  return (
    <>
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
          <Box mt={2}>
            <Typography variant="body2">
              Don't have an account ? <Button color="warning">Signup</Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
