"use client";

import { BarChart } from "@/components";
import { useMemo } from "react";

const PopularityChart = ({
  data,
}: {
  data: SpotifyApi.ArtistObjectFull[] | undefined;
}) => {
  const chartData = useMemo(() => {
    const labels: string[] = [];
    const datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[] = [
      {
        label: "Popularity",
        data: [],
        backgroundColor: "#1db954",
      },
    ];

    data?.forEach((artist) => {
      labels.push(artist.name);
      datasets[0].data.push(artist.popularity);
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
            text: "Your Top 10 Artists Popularity",
          },
        },
        scales: {
          x: {
            min: 0,
            max: 100,
          },
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

export default PopularityChart;
