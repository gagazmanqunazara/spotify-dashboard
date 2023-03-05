"use client";

import { BarChart } from "@/components";
import { useMemo } from "react";
import { faker } from "@faker-js/faker";

const ListenersChart = ({
  data,
}: {
  data: SpotifyApi.TrackObjectFull[] | undefined;
}) => {
  const chartData = useMemo(() => {
    const labels: string[] = [];
    const datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[] = [
      {
        label: "Monthly Listeners",
        data: [],
        backgroundColor: "#1db954",
      },
    ];

    data?.forEach((track) => {
      labels.push(track.name);
      datasets[0].data.push(faker.datatype.number({ min: 3000, max: 10000 }));
    });

    return {
      labels,
      datasets,
    };
  }, [data]);

  return (
    <BarChart
      data={chartData}
      customOptions={{
        indexAxis: "y" as const,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Your Top 10 Tracks Monthly Listeners",
          },
        },
        scales: {
          y: {
            ticks: {
              mirror: true,
              color: "#176332",
              z: 10,
              font: {
                size: 10,
              },
            },
          },
        },
      }}
    />
  );
};

export default ListenersChart;
