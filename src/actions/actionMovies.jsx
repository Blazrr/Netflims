export const fetchScroll = (pageIndex) => {
  return async dispatch => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&page=${pageIndex}`
    );
    console.log(pageIndex)
    const responseData = await response.json();
    let movies = responseData.results;
    dispatch({ type: "FETCH_TEST", movies });
  };
};