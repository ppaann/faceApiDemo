import { Button, Stack } from "@mui/material";
import { fakeFetch_fail, fakeFetch_imageError, fakeFetch } from "./FakeApi";

export default function FakeButtons() {
  const onSuccessClick = () => {
    fakeFetch().then((res: any) => {
      console.log(res);
    });
  };

  const onProcessFailClick = () => {
    fakeFetch_imageError().then((res: any) => {
      console.log(res);
    });
  };

  const onUploadFailClick = () => {
    fakeFetch_fail().then((res: any) => {
      console.log(res);
    });
  };
  return (
    <Stack direction="row" spacing={2}>
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
