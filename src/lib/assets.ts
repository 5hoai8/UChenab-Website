/** Prefix public assets when exporting under a GitHub Pages project path. */
export function asset(path: string): string {
  return (process.env.NEXT_PUBLIC_BASE_PATH || '') + path;
}
