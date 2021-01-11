import React from 'react';
import './Spotlight.css'

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description = item.overview;

    if(description.length > 200) {
        description = description.substring(0,200)+'[...]';
    }

    console.log(`${firstDate.getFullYear()}`)
    console.log(`${item.number_of_seasons} season${item.number_of_seasons !== 1 ? 's' : ''}`)
    
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
                        <div className="spotlight--season">{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                <div className="spotlight--description">{description}</div>
                <div className="spotlight--buttons">
                    <a href={`/watch/${item.id}`} className="spotlight--watchbtn">➤ Watch</a>
                    <a href={`/list/add/${item.id}`} className="spotlight--mylistbtn">+My List</a>
                </div>
                <div className="spotlight--genres">
                    <strong>Genres: </strong> {genres.join(', ')}
                </div>
                </div>
            </div>
        </section>
    );
}