export default function BlogLoading() {
  return (
    <div className="mx-auto w-full max-w-8xl px-5 py-20 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <div className="aspect-[4/3] animate-pulse bg-ivory-300" />
            <div className="mt-4 h-4 w-24 animate-pulse bg-ivory-300" />
            <div className="mt-2 h-6 w-full animate-pulse bg-ivory-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
