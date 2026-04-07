/** Préfixe un chemin public avec le BASE_URL Vite (utile pour GitHub Pages). */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
