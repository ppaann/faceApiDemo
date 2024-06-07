import { Box } from "@mui/material";
import ImageDisplay from "../ImageDisplay";
import TabDisplay from "../../components/TabDisplay";

const ResultDisplay = () => {
  return (
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
  );
};
export default ResultDisplay;
