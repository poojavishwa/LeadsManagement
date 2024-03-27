import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Pie_Chart() {
  return (
    <div className="-mt-3">
      <p className="text-purple-500 -ml-14">Current month lead Source</p>
      <PieChart
        colors={["red", "blue", "green", "yellow", "orange"]}
        series={[
          {
            data: [
              { id: 0, value: 22, label: "Facebook" },
              { id: 1, value: 22, label: "Google AdWord" },
              { id: 2, value: 10, label: "LinkedIn" },
              { id: 0, value: 14, label: "Other Source" },
              { id: 1, value: 10, label: "Twitter" },
            ],
          },
        ]}
        width={500}
        height={200}
      />
    </div>
  );
}
