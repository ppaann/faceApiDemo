import {
  FormControlLabel,
  FormGroup,
  Switch,
  Button,
  Input,
} from "@mui/material";
import { Upload } from "@mui/icons-material";
import { useImageContext } from "../../utils/context";
import { ChangeEvent } from "react";

export default function MainControls() {
  const { state, dispatch, fetchImageData } = useImageContext();

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      dispatch({ type: "SET_FILE", payload: file });
      fetchImageData();
    }
  };

  return (
    <FormGroup sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
      <Button variant="contained" component="label" startIcon={<Upload />}>
        Upload Image
        <Input type="file" sx={{ display: "none" }} onChange={handleUpload} />
      </Button>
      <FormControlLabel
        control={<Switch checked={state.isRemoveBG} />}
        label="Remove Background"
      />
      <FormControlLabel
        control={<Switch checked={state.isBoundingBox} />}
        label="Draw Bounding Box"
      />
    </FormGroup>
  );
}
