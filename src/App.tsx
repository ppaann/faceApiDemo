import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TabDisplay from "./components/TabDisplay";
import OptionalSettings from "./features/OptionalSettings";
import FakeButtons from "./Demo/FakeButtons";
import MainControls from "./features/MainControls";
import ImageDisplay from "./features/ImageDisplay";

export default function App() {
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
            <FakeButtons />
            {/* <MainControls /> */}
            <OptionalSettings />
          </Box>
          <Box
            id="display"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
              flexGrow: 1,
            }}
          >
            <Box sx={{ m: 2, border: "1px solid #e2e2e2", width: "50%" }}>
              <ImageDisplay />
            </Box>
            <Box sx={{ m: 2, border: "1px solid #e2e2e2", width: "50%" }}>
              <TabDisplay />
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
