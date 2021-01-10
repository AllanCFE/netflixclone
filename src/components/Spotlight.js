import React from 'react';
import './Spotlight.css'

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return (
        <section className="spotlight" style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="spotlight--vertical">
                <div className="spotlight--horizontal">
                    <div className="spotlight--name">{item.original_name}</div>
                    <div className="spotlight--info">
                        <div className="spotlight--rate">{item.vote_average}</div>
                        <div className="spotlight--year">{firstDate.getFullYear()}</div>
                        <div className="spotlight--seasons">{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                <div className="spotlight--description">{item.overview}</div>
                <div className="spotlight--buttons">
                    <a href={`/watch/${item.id}`} className="spotlight--watchbtn"> Assistir</a>
                    <a href={`/list/add/${item.id}`} className="spotlight--mylistbtn">+Minha Lista</a>
                </div>
                <div className="spotlight--genres">
                    <strong>Genres: </strong> {genres.join(', ')}
                </div>
                </div>
            </div>
        </section>
    );
}