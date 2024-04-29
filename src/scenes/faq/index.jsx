import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitlte="Frequenty asked questions" />
      <Accordion sx={{ mt: "5px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Expand this section to see
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> This is a paragraph about the weather</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: "5px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Expand this section to see
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> This is a paragraph about the weather</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: "5px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Expand this section to see
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> This is a paragraph about the weather</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
