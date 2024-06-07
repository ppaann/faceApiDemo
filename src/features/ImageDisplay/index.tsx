import React from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { useImageContext } from "../../utils/context";
import { WarningAmber } from "@mui/icons-material";
import { red } from "@mui/material/colors";

const ImageDisplay = () => {
  let { loading, error, success } = useImageContext().state;

  let status = loading
    ? "loading"
    : error
    ? "error"
    : success
    ? "success"
    : "init";

  let content = null;

  switch (status) {
    case "loading":
      content = <CircularProgress />;
      break;
    case "success":
      content = (
        <Box
          component="img"
          src="https://img.freepik.com/free-photo/latin-man-smiling-cheerful-expression-closeup-portrait_53876-128963.jpg?w=740&t=st=1716502905~exp=1716503505~hmac=acb5befaf17078e74634264812f7067fc7463b2657d5b11ef63e7c985719801c"
          alt="loading"
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      );
      break;
    case "error":
      content = (
        <Box display="flex" alignItems="center" flexDirection="column">
          <WarningAmber sx={{ fontSize: 40, color: red[500] }} />
          <p>Failed to load image.</p>
          <p>Select another image and try again later.</p>
        </Box>
      );
      break;
    default:
      content = <p>Image will appear here after uploading.</p>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {content}
    </Box>
  );
};

export default ImageDisplay;
