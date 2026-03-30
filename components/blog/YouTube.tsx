// components/blog/YouTube.tsx
export function YouTube({ id }: { id: string }) {
  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden my-4">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
}
