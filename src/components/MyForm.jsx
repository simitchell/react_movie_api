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
            <div className="topDisplay">
                <div className="topContainer">
                    <div className="imageContainer">
                        <img src="src/images/J5Input2.jpeg" className="j5image" />
                    </div>
                    <form className="inputSection">
                        <input type="text" placeholder="Movie Title" value={info} onChange={(e) => handleChange(e)}></input>
                        <button type="submit" className="button" onClick={handleClick}>Ahhh... Input.</button>
                    </form>
                </div>
            </div>
            <div className="cardDisplay">
                {movieData.map((movie, index) => {
                    console.log({ movie })
                    return (
                        <div key={index} className="card">
                            <h2>{movie.Title}</h2>
                            <div className="cardInfo">
                                <div>
                                    <img src={movie.Poster} />
                                </div>
                                <div className="returnInfo">
                                    <span><strong>Title: </strong>{movie.Title}</span>
                                    <span><strong>Year Released: </strong>{movie.Year}</span>
                                    <span><strong>Awards: </strong>{movie.Awards}</span>
                                    <span><strong>Plot: </strong>{movie.Plot}</span>
                                    <span><strong>IMDb Rating: </strong>{movie.imdbRating}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
                }
            </div>
        </OuterContainer>
    )
}