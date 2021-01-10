import api_keys from './private/api_key.json';
const api_base = 'https://api.themoviedb.org/3';
const TMDB = api_keys.tmdb;

/*
- Netflix Originals
- Trending
- Top rated
- Action
- Horror
- Documentary
- Drama
*/

const basic_fetch = async (endpoint) => {
    const req = await fetch(`${api_base}${endpoint}`);
    const json = await req.json();
    return json;
};

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Netflix Originals',
                items: await basic_fetch(`/discover/tv?with_network=213&api_key=${TMDB}`)
            },
            {
                slug: 'trending',
                title: 'For you',
                items: await basic_fetch(`/trending/all/week?api_key=${TMDB}`)

            },
            {
                slug: 'toprated',
                title: 'Top rated',
                items: await basic_fetch(`/movie/top_rated?api_key=${TMDB}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basic_fetch(`/discover/movie?with_genres=28&api_key=${TMDB}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basic_fetch(`/discover/movie?with_genres=27&api_key=${TMDB}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basic_fetch(`/discover/movie?with_genres=99&api_key=${TMDB}`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                items: await basic_fetch(`/discover/movie?with_genres=18&api_key=${TMDB}`)
            }
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basic_fetch(`/movie/${movieId}?api_key=${TMDB}`);
                break;
                case 'tv':
                    info = await basic_fetch(`/tv/${movieId}?api_key=${TMDB}`);
                break;
                default:
                    console.log("Type not allowed");
                break;
            }
        }

        return info;
    }
}