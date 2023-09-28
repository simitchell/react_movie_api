import { useState } from 'react';
import { OuterContainer } from './MyStyles'

export const MyForm = () => {
    const [info, setInfo] = useState('');
    const [movieData, setmovieData] = useState([]);

    const getInfo = async () => {
        const apiUrl = `http://www.omdbapi.com/?t=${info}&apikey=69d5cf27`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setmovieData([data, ...movieData]);
    };
    console.log(movieData);


    const handleChange = (e) => {
        setInfo(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        getInfo();
        setInfo('');
    };

    return (
        <OuterContainer>
            <h2>Need Input!!</h2>
            <form className="inputSection">
                <input type="text" placeholder="Movie Title" value={info} onChange={(e) => handleChange(e)}></input>
                <button type="submit" className="button is-primary" onClick={handleClick}>Ahhh... Input.</button>
            </form>
            {movieData.map((movie, index) => {
                console.log({ movie })
                return (
                    <div key={index} className="card">
                        <h2>{movie.Title}</h2>
                        <div className="cardInfo">
                            <div className="card-image">
                                <img src={movie.Poster} />
                            </div>
                            <div className="returnInfo">
                                <span className="card-header"><strong>Title: </strong>{movie.Title}</span>
                                <span className="card-content"><strong>Year Released: </strong>{movie.Year}</span>
                                <span className="card-content"><strong>Awards: </strong>{movie.Awards}</span>
                                <span className="card-content"><strong>Plot: </strong>{movie.Plot}</span>
                                <span className="card-content"><strong>IMDb Rating: </strong>{movie.imdbRating}</span>
                            </div>
                        </div>
                    </div>
                )
            }
            )
            }
        </OuterContainer>
    )
}