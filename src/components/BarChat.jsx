import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function BarChat() {
  const xLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const pData = xLabels.map((day) => day.slice(0, 3)); // Abbreviated weekdays
  const uData = [85, 78, 92, 88, 95, 65, 65, 32, 10]; // Average scores for each day
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["Crech", "Primary", "J.H.S"] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={600}
      height={300}
    />
  );
}

export default BarChat;
