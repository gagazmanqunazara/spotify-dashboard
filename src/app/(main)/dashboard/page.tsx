import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { spotifyApi } from "@/utils";
import { getServerSession } from "next-auth";
import ArtistsList from "./artistsList";
import FollowersChart from "./followersChart";
import ListenersChart from "./listenersChart";
import PopularityChart from "./popularityChart";
import TracksList from "./tracksList";

const getArtists = async (accessToken: string) => {
  try {
    spotifyApi.setAccessToken(accessToken);

    const data = await spotifyApi.getMyTopArtists({
      limit: 20,
      time_range: "short_term",
    });

    return data.body;
  } catch (err) {
    console.log(err);
  }
};

const getTracks = async (accessToken: string) => {
  try {
    spotifyApi.setAccessToken(accessToken);

    const data = await spotifyApi.getMyTopTracks({
      limit: 20,
      time_range: "short_term",
    });

    return data.body;
  } catch (err) {
    console.log(err);
  }
};

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  const artists = await getArtists(session?.accessToken || "");
  const tracks = await getTracks(session?.accessToken || "");

  return (
    <div className="py-4 px-6 flex">
      <div className="flex flex-col gap-2 w-[30rem]">
        <div>
          <ArtistsList artists={artists} />
        </div>

        <div>
          <TracksList tracks={tracks} />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-[calc(100%-30rem)]">
        <div className="h-[30rem] border border-neutral-200 dark:border-neutral-800 rounded-md p-4">
          <ListenersChart data={tracks?.items.slice(0, 10)} />
        </div>
        <div className="flex gap-2">
          <div className="h-[30rem] w-[50%] border border-neutral-200 dark:border-neutral-800 rounded-md p-4">
            <FollowersChart data={artists?.items.slice(0, 10)} />
          </div>
          <div className="h-[30rem] w-[50%] border border-neutral-200 dark:border-neutral-800 rounded-md p-4">
            <PopularityChart data={artists?.items.slice(0, 10)} />
          </div>
        </div>
      </div>
    </div>
  );
}
