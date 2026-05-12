export default function Loading() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 py-24">
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-zinc-700 border-t-zinc-300"
        aria-hidden
      />
      <p className="text-sm text-zinc-500">Loading…</p>
    </div>
  );
}
