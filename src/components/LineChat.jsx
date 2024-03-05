import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function LineChat() {
  const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const pData = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 100)
  );
  return (
    <LineChart
      width={400}
      height={200}
      series={[{ data: pData, label: "pv" }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}

export default LineChat;
