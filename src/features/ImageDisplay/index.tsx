import React from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

const ImageDisplay = () => {
  let status = "success";

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
          alt="placeholder"
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      );
      break;
    case "error":
      content = <p>Failed to load image.</p>;
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
