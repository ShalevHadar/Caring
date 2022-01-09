import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import IncidentList from "../components/IncidentList";
import handleApi from "../api/handleApi";
import { useCookies } from "react-cookie";
import _ from "lodash";

export default function Dashboard() {
  const data = useLocation();
  const [cookies, ,] = useCookies(["token"]);
  const [completedIncidents, setCompletedIncidents] = useState([]);
  const [unfinishedIncidents, setUnfinishedIncidents] = useState([]);

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
        console.log(error);
      }
    }
    fetchIncidents();
  }, []);

  return (
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
  );
}
