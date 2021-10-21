import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

        console.log(movies); // movies.data.data.movies

        this.setState({movies, isLoading: false}); // movies:movies 받고자 하는 데이터의 이름과 변수이름이 같으면 삭제 가능
    }

    // didMount에서 데이터를 fetch
    componentDidMount() {
        /*setTimeout(() => {
            this.setState({isLoading: false})
        }, 6000)*/

        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return(
            <section className="container">
                {
                isLoading ? (
                    <div className="loader">
                        <span className="loader_text">"Loading..."</span>
                    </div>
                ) : (
                    <div className="movies">
                        {
                            movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;
