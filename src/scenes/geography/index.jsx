import { Box, colors } from "@mui/material";
import Header from "../../components/header";
import GeoChart from "../../components/GeoChart";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
const Geo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geo Chart" subtitlte="Simple Geo Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geo;
