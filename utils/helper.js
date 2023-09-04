export function filterData(searchText, allrestaurants) {
  return allrestaurants.filter((el) =>
    el?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}
