export default function ArtistsList({
  artists,
}: {
  artists: SpotifyApi.UsersTopArtistsResponse | undefined;
}) {
  return (
    <>
      <h3 className="text-sm tracking-tighter text-dark dark:text-light mb-1">
        Your Top Artists
      </h3>
      <div className="h-[26.9rem] overflow-y-scroll flex flex-col gap-2 pr-2">
        {artists?.items.map((artist) => (
          <div key={artist.id} className="flex gap-4 items-center">
            <img
              src={artist.images[0].url}
              className="h-15 w-15 rounded-full"
            />
            <div>
              <p className="text-xs mb-1">{artist.name}</p>
              <div className="flex gap-1 text-primary capitalize">
                {artist.genres.slice(0, 2).map((genre) => (
                  <p
                    key={genre}
                    className="py-[0.2em] px-1 rounded-md border border-primary"
                  >
                    {genre}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
