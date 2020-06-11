import React from 'react';

const FilterGenre = ({ genres, handleChange }) => {
    // const getGenres = (genreIds, genres) => {
    //     return genreIds.map(genreId => {
    //         const filteredGenres = genres.find(genre => genre.id === genreId);
    //         if (genres === undefined || genres.length === 0) {
    //             return false;
    //         }
    //         return filteredGenres.name;
    //     })
    // };
    return (
        <ul>
            <div style={{ display: "flex" }}>
                <div>
                    {genres.map(genre => {
                        return <li key={genre.id}>
                            <input
                                type="checkbox"
                                name={genre.id}
                                onChange={handleChange}
                            />
                            {genre.name}
                        </li>
                    })}
                </div>
            </div>
        </ul>
    )
}

export default FilterGenre