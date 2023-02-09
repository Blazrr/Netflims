import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initMovies } from "../actions/initMovies";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { fetchScrollSeries } from "../actions/actionSeries";
import { initSeries } from "../actions/initSeries";

const SeriesList = () => {
  const series = useSelector((store) => store.reducerSeries);
  const dispatch = useDispatch();

  const [pageIndex, setPageIndex] = useState(1);
  let random = Math.floor(Math.random() * 100);

  useEffect(() => {
    const infiniteCheck = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollHeight - scrollTop === clientHeight) {
        setPageIndex((pageIndex) => pageIndex + 1);
        console.log(pageIndex);
        dispatch(fetchScrollSeries(pageIndex + 1));
      }
    };

    window.addEventListener("scroll", infiniteCheck);
    return () => {
      window.removeEventListener("scroll", infiniteCheck);
    };
  }, [pageIndex]);

  useEffect(() => {
    dispatch(initSeries(random));
  }, []);

  return (
    <main className="container">
      <h1 className="title">All Series</h1>
      <div className="card-container">
        {series.length == 0 || undefined ? (
          <Loader />
        ) : (
          series.map((serie) => {
            if (serie.media_type === "tv") {
              return <Card data={serie} key={serie.id} />;
            }
          })
        )}
      </div>
    </main>
  );
};

export default SeriesList;
