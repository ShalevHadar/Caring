import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import IncidentList from "../components/IncidentList";
import handleApi from "../api/handleApi";
import { useCookies } from "react-cookie";
import _ from "lodash";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Dashboard() {
  const data = useLocation();
  const [cookies, ,] = useCookies(["token"]);
  const [completedIncidents, setCompletedIncidents] = useState([]);
  const [unfinishedIncidents, setUnfinishedIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err] = useState("Cannot fetch items");

  useEffect(() => {
    async function fetchIncidents() {
      try {
        const res = await handleApi.get(`/teacher/incident/${data.state}`, {
          headers: {
            authorization: cookies.token,
          },
        });
        const groups = _.groupBy(res.data.incidents, "completed");
        setCompletedIncidents(groups[0]);
        setUnfinishedIncidents(groups[1]);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchIncidents();
  }, [data, cookies]);

  return (
    <div>
      {loading ? (
        <div>
          <IncidentList
            teacherId={data.state}
            hidden={true}
            incidents={completedIncidents}
          />

          <IncidentList
            teacherId={data.state}
            hidden={false}
            incidents={unfinishedIncidents}
          />
        </div>
      ) : (
        <Box textAlign="center" sx={{ pt: 5 }}>
          <Typography variant="h4">{err}</Typography>
        </Box>
      )}
    </div>
  );
}
