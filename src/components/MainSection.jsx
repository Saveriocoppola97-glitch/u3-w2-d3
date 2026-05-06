import { Component } from "react";

class MainSection extends Component {
  state = {
    allFilm: [],
  };

  getFilms = () => {
    fetch(`http://www.omdbapi.com/?s=${this.props.query}&apikey=7a3d7aa5`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((data) => {
        this.setState({ allFilm: data.Search });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getFilms();
  }
  render() {
    return (
      <div className="container-fluid px-4 my-3">
        <h3 className="text-white mb-3">{this.props.title}</h3>
        <div className="row justify-content-center">
          {this.state.allFilm.slice(0, 6).map((film) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-2 "
              key={film.imdbID}
            >
              <img
                src={film.Poster}
                alt={film.Title}
                className="img-fluid movie-card"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainSection;
