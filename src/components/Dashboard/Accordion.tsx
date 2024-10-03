import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";

export default function EventsAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const events = [
    {
      id: 1,
      title: "Team Strategy Meeting",
      time: "10-01 / 09:00 pm",
      description: "Quarterly strategy meeting.",
      department: "Marketing",
    },
    {
      id: 2,
      title: "Product Launch",
      time: "10-05 / 11:00 pm",
      description: "Launch of new product line .",
      department: "Product Development",
    },
    {
      id: 3,
      title: "Financial Review",
      time: "10-10 / 14:00 pm",
      description: "Monthly financial review.",
      department: "Finance",
    },
    {
      id: 4,
      title: "Team Building Workshop",
      time: "10-12 / 10:00 pm",
      description: "Team-building activities.",
      department: "Human Resources",
    },
    {
      id: 5,
      title: "Customer Feedback Analysis",
      time: "10-15 / 13:00 pm",
      description: "Analysis of customer feedback.",
      department: "Customer Support",
    },
    {
      id: 6,
      title: "Sales Training",
      time: "10-18 / 09:30 pm",
      description: "Sales techniques workshop.",
      department: "Sales",
    },
    {
      id: 7,
      title: "Website Redesign Review",
      time: "10-20 / 15:00 pm",
      description: "Review of website redesign.",
      department: "Design",
    },
    {
      id: 8,
      title: "Data Security Seminar",
      time: "10-22 / 11:30 pm",
      description: "Seminar on data security.",
      department: "IT",
    },
    {
      id: 9,
      title: "Supplier Meeting",
      time: "10-25 / 08:00 pm",
      description: "Quarterly supplier meeting.",
      department: "Procurement",
    },
    {
      id: 10,
      title: "Legal Compliance Review",
      time: "10-28 / 16:00 pm",
      description: "Annual legal review.",
      department: "Legal",
    },
  ];

  return (
    <div >
      {events.map((event) => (
        <Accordion
          key={event.id}
          expanded={expanded === `panel${event.id}`}
          onChange={handleChange(`panel${event.id}`)}
          sx={{ margin: "4px 0", fontSize: "large", paddingBottom: "1px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${event.id}bh-content`}
            id={`panel${event.id}bh-header`}
          >
            <Typography sx={{ width: "68%", flexShrink: 0 }} variant="h6">
              {event.title}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {event.time}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontStyle: "bold" }}>
              <b> {event.department}</b>
            </Typography>
            <Typography>{event.description}</Typography>
          </AccordionDetails>
          <Box>
            <Button>Attend</Button>
            <Button>Ignore</Button>
          </Box>
        </Accordion>
      ))}
    </div>
  );
}

/*   {
    id: 3,
    title: "Financial Review",
    time: "10-10 / 14:00 pm",
    description: "Monthly financial review.",
    department: "Finance",
  },
  {
    id: 4,
    title: "Team Building Workshop",
    time: "10-12 / 10:00 pm",
    description: "Team-building activities.",
    department: "Human Resources",
  },
  {
    id: 5,
    title: "Customer Feedback Analysis",
    time: "10-15 / 13:00 pm",
    description: "Analysis of customer feedback.",
    department: "Customer Support",
  },
  {
    id: 6,
    title: "Sales Training",
    time: "10-18 / 09:30 pm",
    description: "Sales techniques workshop.",
    department: "Sales",
  },
  {
    id: 7,
    title: "Website Redesign Review",
    time: "10-20 / 15:00 pm",
    description: "Review of website redesign.",
    department: "Design",
  },
  {
    id: 8,
    title: "Data Security Seminar",
    time: "10-22 / 11:30 pm",
    description: "Seminar on data security.",
    department: "IT",
  },
  {
    id: 9,
    title: "Supplier Meeting",
    time: "10-25 / 08:00 pm",
    description: "Quarterly supplier meeting.",
    department: "Procurement",
  },
  {
    id: 10,
    title: "Legal Compliance Review",
    time: "10-28 / 16:00 pm",
    description: "Annual legal review.",
    department: "Legal",
  }, */

/* 

   <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

*/
