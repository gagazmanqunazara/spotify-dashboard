export default function TracksList({
  tracks,
}: {
  tracks: SpotifyApi.UsersTopTracksResponse | undefined;
}) {
  return (
    <>
      <h3 className="text-sm tracking-tighter text-dark dark:text-light mb-1">
        Your Top Tracks
      </h3>
      <div className="h-[26.9rem] overflow-y-scroll flex flex-col gap-2 pr-2">
        {tracks?.items.map((track) => (
          <div key={track.id} className="flex gap-4 items-center">
            <img
              src={track.album.images[0].url}
              className="h-15 w-15 rounded-full"
            />
            <div>
              <p className="text-xs mb-1">{track.name}</p>
              <div className="flex gap-1 text-neutral-500 capitalize">
                {track.artists.slice(0, 2).map((artist) => (
                  <p key={artist.id}>{artist.name}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
