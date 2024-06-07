import { Button, Stack } from "@mui/material";
import { fakeFetch_fail, fakeFetch_imageError, fakeFetch } from "./FakeApi";
import { useImageContext } from "../utils/context";

export default function FakeButtons() {
  const ctx = useImageContext();
  console.log("FakeButtons imageData:", ctx);

  const onSuccessClick = async () => {
    try {
      // const result: ImageData = await fakeFetch();
      ctx?.fetchImageData("fake");
    } catch (error) {
      console.log(error);
    }
  };

  const onProcessFailClick = () => {
    try {
      ctx?.fetchImageData("imageError");
    } catch (error) {
      console.log(error);
    }
  };

  const onUploadFailClick = async () => {
    try {
      ctx.fetchImageData("uploadError");
      // await fakeFetch_fail();
    } catch (error) {
      console.log(error);
    }
  };
  const { dispatch } = useImageContext();
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" onClick={() => dispatch({ type: "INIT" })}>
        Initial
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch({ type: "FETCH_INIT" });
        }}
      >
        Loading
      </Button>
      <Button variant="outlined" onClick={onSuccessClick}>
        Upload Image Successed
      </Button>
      <Button variant="outlined" onClick={onProcessFailClick}>
        Image process Failed
      </Button>
      <Button variant="outlined" onClick={onUploadFailClick}>
        Upload Failed
      </Button>
    </Stack>
  );
}
