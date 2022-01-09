import React from "react";

import CollapsibleTable from "./collapsibleTable";

export default function IncidentList({ incidents }) {
  return (
    <div>
      <CollapsibleTable incidents={incidents} />
    </div>
  );
}
