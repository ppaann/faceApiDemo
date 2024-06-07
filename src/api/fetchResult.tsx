import { ImageData } from "../types";
import { useImageContext } from "../utils/context";

const fetchResult = async (): Promise<ImageData> => {
  const ctx = useImageContext(); // Add a return statement here
  const { isRemoveBG, isBoundingBox, file } = ctx.state;
  const formData = new FormData();
  formData.append("file", file as Blob);
  const url = `http://localhost:5000/api/v1/segment?removebg=${isRemoveBG}&boundingbox=${isBoundingBox}`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export default fetchResult;
