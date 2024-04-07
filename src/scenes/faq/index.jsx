import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is a Vehicle Tracking System (VTS)?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A Vehicle Tracking System (VTS) is a technology that uses GPS (Global Positioning System) or GLONASS 
          (Global Navigation Satellite System) 
          along with cellular or satellite communication to track the real-time location of vehicles.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How does a Vehicle Tracking System work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A VTS device installed in the vehicle communicates with satellites to determine the vehicle's exact location.
           This information is then transmitted to a central server via cellular or satellite communication, 
           where it can be accessed by authorized users through a web interface or specialized software.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What are the benefits of using a Vehicle Tracking System?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Some benefits of using a Vehicle Tracking System include improved fleet management, increased security against theft,
           optimized route planning, enhanced driver safety through monitoring of driving behavior, and better customer service
            through accurate arrival time estimations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What features should one look for in a Vehicle Tracking System?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Important features to consider when selecting a Vehicle Tracking System include real-time tracking, 
          geo-fencing capabilities to define boundaries for vehicles, customizable alerts for events like speeding or unauthorized vehicle use, 
          detailed reporting functionality, 
          and integration with other business systems such as dispatch or maintenance software.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can businesses benefit from implementing a Vehicle Tracking System?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Businesses can benefit from a Vehicle Tracking System by improving operational efficiency, 
          reducing fuel costs by optimizing routes, increasing productivity through better scheduling and monitoring of drivers, 
          enhancing customer
           satisfaction with accurate delivery times, and improving overall fleet safety and security.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;