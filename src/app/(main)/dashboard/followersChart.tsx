import { BarChart } from "@/components";
import { useMemo } from "react";
import { faker } from "@faker-js/faker";

export default function FollowersChart({
  data,
}: {
  data: SpotifyApi.ArtistObjectFull[] | undefined;
}) {
  const chartData = useMemo(() => {
    const labels: string[] = [];
    const datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[] = [
      {
        label: "Followers",
        data: [],
        backgroundColor: "#1db954",
      },
    ];

    data?.forEach((artist) => {
      labels.push(artist.name);
      datasets[0].data.push(faker.datatype.number({ min: 1000, max: 10000 }));
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
            text: "Your Top 10 Artists Followers",
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
}
