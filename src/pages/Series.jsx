import { createClient } from "@supabase/supabase-js";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import {  fetchScroll } from "../actions/actionMovies";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Series = () => {
  const [data, SetData] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadSeries = async () => {
      await dispatch(fetchScroll(pageIndex));
    };
    
    loadSeries();

  }, [dispatch]);

  const Series = useSelector((store) => store.reducerSeries);
  useEffect(() => {

    SetData(Series.data);

  }, [Series]);



  return (
    <main className="container">
      <h1 className="title">Series</h1>
      <div className="card-container">
        {data.length == 0 || undefined ? (
          <Loader />
        ) : (
          data.map((serie) => {
            if (serie.media_type === "tv") {
              return <Card data={serie}  key={serie.id}  />;
            }
          })
        )}
      </div>
    </main>
  );
};
export default Series;