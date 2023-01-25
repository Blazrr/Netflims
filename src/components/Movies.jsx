const Movies = ({ movies}) => {
  return (
    <div>
      {movies.map(movie => {
        return (
          <div className="recommend-content" key={movie.id}>
            <img src={movie.backdrop_path} alt={movie.title} />
            <div className="recommend-content-text">
              <div className="infos">
                <ul>
                  <li>{movie.release_date}</li>
                  <li>{movie.media_type}</li>
                </ul>
              </div>
              <h2 className="title">{movie.original_title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
 
export default Movies;