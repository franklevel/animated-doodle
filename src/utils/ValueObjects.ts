export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function getRandomSlice(data: any, size: number = 4) {
  const start = getRandomInt(0, data.length);
  const end = start + size;
  return data.slice(start, end);
}
