import { useLocation, useParams } from "react-router-dom";
import NotAvailble from "../assets/no-image-available-icon-6.png";
import Pin from "../components/Pin";
import Similar from "../components/Similar";

const Details = () => {
  const location = useLocation();
  const data = location.state.movie;

  return (
    <main className="container">
      <div className="detail_container ">
        <div className="detail-image">
          <Pin pageData={data} />
          {data.backdrop_path === null ? (
            <img
              
              src={NotAvailble}
              alt={data.name || data.original_title}
            />
          ) : (
            <img
              
              src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
              alt={data.name || data.original_title}
            />
          )}
        </div>

        <div className="detail-card">
          <h1>{data.name || data.original_title}</h1>
          <p className="overview">{data.overview}</p>
          <p className="vote">Vote: {data.vote_average}/10</p>
          <p className="revenue">Revenue : ${data.revenue}</p>
        </div>
      </div>
      <Similar media_type={data.media_type} movie_id={data.id} />
    </main>
  );
};

export default Details;
