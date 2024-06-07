import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FC, useEffect, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface TabDisplayViewProps {
  detailedAttributes: string;
  json: string;
  processedImage: string;
  systemMessage: string;
  hasError: boolean;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabDisplayView: FC<TabDisplayViewProps> = ({
  detailedAttributes,
  json,
  processedImage,
  systemMessage,
  hasError,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (hasError) {
      setValue(3);
    }
  }, [hasError]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Detailed Attributes" {...a11yProps(0)} />
          <Tab label="JSON" {...a11yProps(1)} />
          <Tab label="Processed Image" {...a11yProps(2)} />
          <Tab
            label="System Message"
            sx={{
              color: hasError ? "red" : "inherit",
              "&.Mui-selected": {
                color: hasError ? "red" : "inherit",
              },
            }}
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <output
          className="json-container"
          dangerouslySetInnerHTML={{ __html: detailedAttributes }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div dangerouslySetInnerHTML={{ __html: json }} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box
          component="img"
          src={processedImage}
          alt="Processed Image"
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div dangerouslySetInnerHTML={{ __html: systemMessage }} />
      </CustomTabPanel>
    </Box>
  );
};

export default TabDisplayView;
