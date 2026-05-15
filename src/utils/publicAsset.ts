/** Public file path (no basePath on Vercel). */
export function publicAsset(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}
