import React, { useEffect, useState } from 'react';
import tmdb from './tmdb'
import MovieRow from './components/MovieRow'
import Spotlight from './components/Spotlight'
import Header from './components/Header'
import './App.css'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [spotlightData, setSpotlight] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 15){
        setBlackHeader(true);
      } else setBlackHeader(false);
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[]);

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {spotlightData && <Spotlight item={spotlightData} /> }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ) )}
      </section>

      <footer>
        Made by <strong>Allan Echeverria</strong>
        Live version at <a href="https://https://netflixclone.allancfe.vercel.app">Vercel</a>
      </footer>

      {movieList.length <= 0 &&    
      <div className="loading">
        <img src={process.env.PUBLIC_URL + '/load.gif'} alt="loading" />
      </div>
      }
    </div>
  );
};