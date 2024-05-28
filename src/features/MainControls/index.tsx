import {
  FormControlLabel,
  FormGroup,
  Switch,
  Button,
  Input,
} from "@mui/material";
import { Upload } from "@mui/icons-material";

export default function MainControls() {
  return (
    <FormGroup sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
      <Button variant="contained" component="label" startIcon={<Upload />}>
        Upload Image
        <Input type="file" sx={{ display: "none" }} />
      </Button>
      <FormControlLabel control={<Switch />} label="Remove Background" />
      <FormControlLabel control={<Switch />} label="Draw Bounding Box" />
    </FormGroup>
  );
}
