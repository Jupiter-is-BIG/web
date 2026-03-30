// components/blog/Spotify.tsx
export function Spotify({ url }: { url: string }) {
  const id = url.split("/").pop();
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${id}`}
      width="100%"
      height="80"
      className="rounded-xl my-4"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}
