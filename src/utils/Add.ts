export const Add = (index: number, movies: string[]) => {
  if (index < movies.length - 1) {
    return index + 1;
  }
  return index;
};
