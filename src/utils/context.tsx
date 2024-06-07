import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import { ImageData } from "../types";
import {
  fakeFetch_fail,
  fakeFetch_imageError,
  fakeFetch,
} from "../Demo/FakeApi";
import { prettyPrintJson } from "./utils";
import fetchResult from "../api/fetchResult";

type ResultData = {
  detailedAttributes: string;
  json: string;
  processedImage: string;
  systemMessage: string;
};
type OptionalSetting = {
  detectionModal: number;
  resizeTo: number;
  jpgQuality: number;
  cropMarginRatio: number;
};

interface ImageDataContext {
  state: State;
  fetchImageData: () => void;
  dispatch: React.Dispatch<Action>;
}

interface State {
  file: File | null;
  isRemoveBG: boolean;
  isBoundingBox: boolean;
  optionalSettings: OptionalSetting;
  data: ResultData;
  loading: boolean;
  success: boolean;
  successedWithError: boolean;
  error: boolean;
  errorMessage: string | null;
}

type Action =
  | { type: "INIT" }
  | { type: "SET_FILE"; payload: File }
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: ResultData }
  | { type: "FETCH_SUCCESS_WITH_ERROR"; payload: ResultData }
  | { type: "FETCH_ERROR"; payload: string };

const initialResultData: ResultData = {
  detailedAttributes: "Detailed attributes content here.",
  json: "",
  processedImage: "Processed image",
  systemMessage: "System message content here.",
};

const initialState: State = {
  file: null,
  isRemoveBG: false,
  isBoundingBox: false,
  optionalSettings: {
    detectionModal: 0,
    resizeTo: 0,
    jpgQuality: 0,
    cropMarginRatio: 4,
  },
  data: initialResultData,
  loading: false,
  success: false,
  successedWithError: false,
  error: false,
  errorMessage: null,
};

const imageContextDefaultValues: ImageDataContext = {
  state: initialState,
  fetchImageData: () => {},
  dispatch: () => {},
};

const imageContextReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        loading: false,
        success: false,
        successedWithError: false,
        error: false,
        errorMessage: null,
      };
    case "SET_FILE":
      return {
        ...state,
        file: action.payload,
      };
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        success: false,
        successedWithError: false,
        error: false,
        errorMessage: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        successedWithError: false,
        error: false,
        errorMessage: null,
        data: action.payload,
      };
    case "FETCH_SUCCESS_WITH_ERROR":
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        successedWithError: true,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        success: false,
        successedWithError: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export const ImageContext = createContext<ImageDataContext>(
  imageContextDefaultValues
);

export const useImageContext = () => useContext(ImageContext);

type ContextProviderProps = {
  children: ReactNode;
};

const ImageContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(imageContextReducer, initialState);

  const fetchImageData = async (option: string = "") => {
    dispatch({ type: "FETCH_INIT" });
    console.log("fetchImageData option:", option);
    const func =
      option === "uploadError"
        ? fakeFetch_fail
        : option === "imageError"
        ? fakeFetch_imageError
        : fakeFetch;
    try {
      const result: ImageData =
        option == "" ? await fetchResult() : await func();
      const parsedResult = { ...initialResultData };

      const attributes = JSON.parse(result.attribute_json);
      parsedResult.detailedAttributes = prettyPrintJson.toHtml(
        result.quality_text
      );
      parsedResult.json = prettyPrintJson.toHtml(attributes);
      parsedResult.processedImage = `data:image/jpeg;base64,${result.image}`;
      parsedResult.systemMessage = prettyPrintJson.toHtml(result.system_text);
      console.log("parsedResult:", parsedResult);
      if (result.system_text.Detection_Error) {
        dispatch({ type: "FETCH_SUCCESS_WITH_ERROR", payload: parsedResult });
      } else {
        dispatch({ type: "FETCH_SUCCESS", payload: parsedResult });
      }
    } catch (error) {
      console.log("fetcgErrir", error);
      if (error instanceof Error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      } else {
        dispatch({
          type: "FETCH_ERROR",
          payload: "An unknown error occurred.",
        });
      }
    }
  };

  return (
    <ImageContext.Provider value={{ state, fetchImageData, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
