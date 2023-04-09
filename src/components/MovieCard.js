const Moviecard = ({movie}) =>{
    return (
        <div className="movie-card">
            <img src={movie.posterURL} alt="movie"></img>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>{`Rating: ${movie.Rating}/5`}</p>
            </div>
        </div>
    );
};
export default Moviecard