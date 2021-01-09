import React, { useEffect, useState } from 'react';
import tmdb from './tmdb'
import MovieRow from './components/MovieRow'
import Spotlight from './components/Spotlight'
import './App.css'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [spotlightData, setSpotlight] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChoose = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let choose = originals[0].items.results[randomChoose];
      let chooseInfo = await tmdb.getMovieInfo(choose.id, 'tv');
      setSpotlight(chooseInfo);
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      {spotlightData && <Spotlight item={spotlightData} /> }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ) )}
      </section>
    </div>
  );
};