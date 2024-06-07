import TabDisplayView from "./TabDisplayView";
import "./tabDisplay.css";

import { useImageContext } from "../utils/context";

const TabDisplay = () => {
  const { state } = useImageContext();

  const { detailedAttributes, json, processedImage, systemMessage } =
    state.data;

  const { loading, successedWithError, errorMessage } = state;
  return (
    <TabDisplayView
      detailedAttributes={detailedAttributes}
      json={json}
      processedImage={processedImage}
      systemMessage={systemMessage}
      hasError={successedWithError}
    />
  );
};

export default TabDisplay;
