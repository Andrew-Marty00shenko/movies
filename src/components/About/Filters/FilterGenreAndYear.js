import React from 'react';
import FilterByGenres from '../../FiltredMovies/FilterByGenres';
import TextField from '@material-ui/core/TextField';

const FilterGenre = ({ genres, genresNames, selectMovies, yearFromFilter, yearFrom }) => {

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
            <div style={{ display: "flex" }}>
                <div>
                    {genres.map(genre => {
                        return <li key={genre.id}>
                            <input
                                type="checkbox"
                                name={genre.id}
                                onChange={genresNames}
                            />
                            {genre.name}
                        </li>
                    })}
                </div>
                <div style={{ display: "block", width: 150 }}>
                    <span>select years range</span>
                    <TextField
                        label="from"
                        margin="normal"
                        value={yearFrom}
                        onChange={yearFromFilter}
                        variant="outlined"
                    />
                    <TextField
                        label="to"
                        margin="normal"
                        // value={value}
                        // onChange={(e) => setValue(e.target.value)}
                        variant="outlined"
                    />
                    {/* <select>
                        <option ></option>
                    </select> */}
                </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginLeft: "10px" }}>
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