export default function GalleryLoading() {
  return (
    <div className="mx-auto w-full max-w-8xl px-5 py-20 sm:px-8 lg:px-12">
      <div className="h-10 w-48 animate-pulse bg-ivory-300" />
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="aspect-square animate-pulse bg-ivory-300" />
        ))}
      </div>
    </div>
  );
}
