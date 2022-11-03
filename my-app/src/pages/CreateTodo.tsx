import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import Layout from "./Layout";

const CreateTodo = () => {
  const [state, setState] = useState({
    title: "",
    desc: "",
  });

  const handleSubmit = () => {};

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
        <Box width={700}>
          <Box mt={2}>
            <TextField
              size="small"
              label="title"
              fullWidth
              multiline
              rows={2}
              onChange={(e: any) =>
                setState({ ...state, title: e.target.value })
              }
              value={state?.title}
            />
          </Box>
          <Box mt={3}>
            <TextField
              size="small"
              fullWidth
              multiline
              rows={3}
              label="Description"
              onChange={(e: any) =>
                setState({ ...state, desc: e.target.value })
              }
              value={state?.desc}
            />
            <Box mt={3}>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleSubmit}
              >
                submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateTodo;
