export function ShowDataMapper(data: any[]) {
  return data?.map((item) => {
    const {
      id,
      rating: { average },
      image,
      name,
      genres,
      summary,
    } = item.show || item;
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
