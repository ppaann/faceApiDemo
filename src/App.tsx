import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import OptionalSettings from "./features/OptionalSettings";
import FakeButtons from "./Demo/FakeButtons";
import MainControls from "./features/MainControls";
import ResultDisplay from "./features/ResultDisplay";
import { useState } from "react";
import { FormControl, FormControlLabel, Switch } from "@mui/material";

export default function App() {
  const [testState, setTestState] = useState(false as boolean);
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4, height: "100%" }}>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 2 }}>
          Portrait Processing Via Azure Face API Service
        </Typography>
        <Container
          sx={{
            minWidth: 1024,
            display: "flex",
            flexDirection: "column",
            height: "80vh",
          }}
        >
          <Box
            id="conrols"
            sx={{
              height: 100,
              m: 2,
            }}
          >
            <Box display="flex" justifyContent="space-between">
              <div>
                {testState && <FakeButtons />}
                {!testState && <MainControls />}
              </div>
              <FormControl component="fieldset">
                <FormControlLabel
                  value="test"
                  control={
                    <Switch
                      onChange={() => {
                        setTestState(!testState);
                      }}
                    />
                  }
                  label="test"
                />
              </FormControl>
            </Box>
            <OptionalSettings />
          </Box>
          <ResultDisplay />
        </Container>
      </Box>
    </Container>
  );
}
