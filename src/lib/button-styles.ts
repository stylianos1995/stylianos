const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export const primaryButtonClass = `inline-flex items-center justify-center gap-2 rounded-full border border-zinc-600 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white ${focusRing} focus-visible:outline-zinc-400`;

export const secondaryButtonClass = `inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 ${focusRing} focus-visible:outline-zinc-500`;

export const outlineButtonClass = `inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 ${focusRing} focus-visible:outline-zinc-500`;
