export const getImageUrl = (path: string): string => {
  return new URL(`../assets/images/${path}`, import.meta.url).href;
};

export const getImagePath = (path: string): string => {
  return `/assets/images/${path}`;
}; 