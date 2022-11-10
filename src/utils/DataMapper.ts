export function ShowDataMapper(data: any[]) {
  return data?.map((item) => {
    const {
      id,
      rating: { average },
      image,
      name,
      genres,
      summary,
    } = item.show;
    return {
      id,
      rating: average,
      image,
      name,
      genres,
      summary,
    };
  });
}
