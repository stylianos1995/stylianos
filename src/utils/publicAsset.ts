/**
 * Prefix for files in /public when using `basePath` + static export.
 * Next does not always rewrite public URLs in `next/image` the same way as `/_next/*`.
 */
export function publicAsset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${process.env.NODE_ENV === "production" ? "/stylianos" : ""}${normalized}`;
}
