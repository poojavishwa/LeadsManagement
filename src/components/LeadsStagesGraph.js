import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function LeadsStagesGraph() {
  return (
    <div className="-mt-3">
      <p className="text-blue-500">Leads amount by customer needs</p>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: [
              "Software",
              "Need for our service",
              "hardware",
              "marketing management system",
              "Bulk email management system",
              "Need for our product ",
              "opportunity management system",
              "workflow automation system",
            ],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [1, 3, 5, 10, 12, 14, 16, 20],
          },
        ]}
        width={1200}
        height={300}
      />
    </div>
  );
}
