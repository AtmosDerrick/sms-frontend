import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function Piechart() {
  const data = [
    { id: 0, value: 10, label: "Teachers" },
    { id: 1, value: 15, label: "Parents" },
    { id: 2, value: 20, label: "Students" },
  ];
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={150}
    />
  );
}

export default Piechart;
