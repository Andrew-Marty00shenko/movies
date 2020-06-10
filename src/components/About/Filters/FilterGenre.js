import React from 'react';
import FilterByGenres from '../../FiltredMovies/FilterByGenres';

const FilterGenre = ({ genres, updateMovies, selectMovies }) => {

    const getGenres = (genreIds, genres) => {
        return genreIds.map(genreId => {
            const filteredGenres = genres.find(genre => genre.id === genreId);
            if (genres === undefined || genres.length === 0) {
                return false;
            }
            return filteredGenres.name;
        })
    };

    return (
        <ul>
            <div>
                {genres.map(genre => {
                    return <li key={genre.id}>
                        <input
                            type="checkbox"
                            name={genre.id}
                            onChange={updateMovies}
                        />
                        {genre.name}
                    </li>
                })}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginLeft: "10px" }}>
                {selectMovies.map(movie => (
                    <FilterByGenres movie={movie}
                        key={movie.id}
                        genres={getGenres(movie.genre_ids, genres)}
                    />
                ))}
            </div>
        </ul>
    )
}

export default FilterGenre