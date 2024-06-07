import {
  FormGroup,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useImageContext } from "../../utils/context";
const OptionalSettings = () => {
  const { optionalSettings } = useImageContext().state;
  console.log("optionalSettings:", optionalSettings);
  return (
    <FormGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 5,
        justifyContent: "space-between",
      }}
    >
      <FormControl sx={{ mt: 2, width: "20%" }}>
        <InputLabel id="detect_model_label">Detection Model</InputLabel>
        <Select
          labelId="detect_model_label"
          id="detect_model"
          label="Detection Model"
          value={optionalSettings.detectionModal}
        >
          <MenuItem value={0}>Automatic</MenuItem>
          <MenuItem value={2}>Dection_01</MenuItem>
          <MenuItem value={1}>Dection_03</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mt: 2, width: "20%" }}>
        <InputLabel id="resize_to_label">Resize To</InputLabel>
        <Select
          labelId="resize_to_label"
          id="resize_to"
          label="Resize To"
          value={optionalSettings.resizeTo}
        >
          <MenuItem value={0}>Original</MenuItem>
          <MenuItem value={1}>1920</MenuItem>
          <MenuItem value={2}>1024</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mt: 2, width: "20%" }}>
        <InputLabel id="jpeg_quality_label">JPEG Quality</InputLabel>
        <Select
          labelId="jpeg_quality_label"
          id="jpeg_quality"
          label="JPEG Quality"
          value={optionalSettings.jpgQuality}
        >
          <MenuItem value={0}>Original</MenuItem>
          <MenuItem value={1}>95</MenuItem>
          <MenuItem value={2}>75</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mt: 2, width: "20%" }}>
        <InputLabel id="crop_ratio_label">Crop Margin Ratio</InputLabel>
        <Select
          labelId="crop_ratio_label"
          id="crop_ratio"
          label="Crop Margin Ratio"
          value={optionalSettings.cropMarginRatio}
        >
          <MenuItem value={1}>None</MenuItem>
          <MenuItem value={2}>0.5</MenuItem>
          <MenuItem value={3}>0.75</MenuItem>
          <MenuItem value={4}>1.0</MenuItem>
          <MenuItem value={5}>1.25</MenuItem>
          <MenuItem value={6}>1.5</MenuItem>
        </Select>
      </FormControl>
    </FormGroup>
  );
};

export default OptionalSettings;
