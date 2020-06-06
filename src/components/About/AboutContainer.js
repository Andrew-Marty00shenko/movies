import { connect } from "react-redux"
import About from "./About"
import { setSearchMovie } from "../../redux/movies-reducer";

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
        searchMovie: state.movies.searchMovie,
    }
}

export default connect(mapStateToProps, { setSearchMovie })(About);