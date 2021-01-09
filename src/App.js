import React, { useEffect, useState } from 'react';
import tmdb from './tmdb'

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      headers
      spotlight
      
    </div>
  );
};