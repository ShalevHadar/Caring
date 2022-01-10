import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LinearProgress from "@mui/material/LinearProgress";

import { Button, Card, TextField } from "@mui/material";

const ProgressCircle = (
  { label, progress, isSelected, position } = { position: "top" }
) => {
  const labelTopStyle = { top: "2rem" };
  const labelBottomStyle = { bottom: "2rem" };
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
          left: progress + "%",
          width: 30,
          height: 30,
          background: "rgb(144, 202, 249)",
          borderRadius: "50%",
          bottom: 2,
          transform: "translateY(50%)",
        }}
      >
        {isSelected && (
          <>
            <Box
              sx={{
                position: "absolute",
                zIndex: 10,
                left: "50%",
                top: "50%",
                width: 13,
                height: 13,
                background: "rgb(214, 202, 249)",
                borderRadius: "50%",
                bottom: 2,
                transform: "translateX(-50%) translateY(-50%)",
              }}
            ></Box>
          </>
        )}
        <Box
          sx={{
            ...(position == "top" ? labelTopStyle : labelBottomStyle),
            position: "absolute",
            maxWidth: "10rem",
            width: "max-content",
            transform: "translateX(-50%)",
            left: "50%",
          }}
        >
          <Typography>{label}</Typography>
        </Box>
      </Box>
    </>
  );
};

const TabbedProgressBar = ({ tabs, position } = { position: "top" }) => {
  const positionTopCSS = { marginTop: "2.5rem" };
  const positionBottomCSS = { marginBottom: "2.5rem" };
  console.log(position);
  return (
    <Box
      sx={{
        position: "relative",
        ...(position === "top" ? positionTopCSS : positionBottomCSS),
      }}
    >
      {tabs.map((label, i) => (
        <ProgressCircle
          label={label}
          key={i}
          progress={i * (100 / tabs.length)}
        />
      ))}
      <LinearProgress sx={{ mb: 3 }} variant="determinate" value={100} />
    </Box>
  );
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography
            overflow="hidden"
            maxWidth="200px"
            maxHeight="20px"
            style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            {row.content}
          </Typography>
        </TableCell>
        <TableCell align="right" style={{ textAlign: "center" }}>
          {row.isAnonymous
            ? "Anonymous"
            : `${capitalizeFirstLetter(row.firstname)} ${capitalizeFirstLetter(
                row.lastname
              )}`}
        </TableCell>
        <TableCell align="right" style={{ textAlign: "center" }}>
          {row.admission_date.substr(0, 10)}
        </TableCell>
        <TableCell align="right" style={{ textAlign: "center" }}>
          {row.incident_id}
        </TableCell>
        <TableCell align="right" style={{ textAlign: "center" }}>
          {row.completed ? "Completed" : "Unfinished"}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, pl: "8%", pr: "8%", pt: 2 }} textAlign="left">
              <TabbedProgressBar
                tabs={["First Tab", "Second", "Third"]}
                position="top"
              />
              <Typography gutterBottom>
                <span style={{ fontWeight: "bold" }}>Content: </span>
                {row.content}
              </Typography>
              <Typography gutterBottom>
                <span style={{ fontWeight: "bold" }}>Your Response: </span>{" "}
                {row.teacher_response}
              </Typography>
              <TextField
                id="outlined-multiline-flexible"
                label="Enter your response here"
                multiline
                maxRows={10}
                sx={{ mt: 1, mb: 3 }}
                style={{ minWidth: "350px" }}
                value={value}
                onChange={handleChange}
              />
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  style={Styles.buttonStyle}
                  size="large"
                  sx={{ mb: 4 }}
                >
                  <Typography>Send response</Typography>
                </Button>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ incidents }) {
  return (
    <Card sx={{ p: 4 }}>
      <div>
        <TableContainer
          style={{
            border: "0px solid black",
            borderRadius: 20,
            boxShadow: "0px 0px 2px 2px #9E9E9E",
          }}
        >
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow hover={true} style={{ backgroundColor: "#7a6c5d" }}>
                <TableCell />
                <TableCell style={{ fontWeight: "bold" }}>Content</TableCell>
                <TableCell
                  style={{ fontWeight: "bold", textAlign: "center" }}
                  align="right"
                >
                  Student Name
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", textAlign: "center" }}
                  align="right"
                >
                  Date
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", textAlign: "center" }}
                  align="right"
                >
                  Incident ID
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", textAlign: "center" }}
                  align="right"
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {incidents.map((row) => (
                <Row key={row.incident_id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Card>
  );
}

const Styles = {
  buttonStyle: {
    textTransform: "none",
    backgroundColor: "#7a6c5d",
    minWidth: 170,
  },
};
