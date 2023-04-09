
import Moviecard from './MovieCard';

const Movielist = ({movies}) =>{
   return (
    <div className='movie-list'>
        {movies.map((movie) =>(
            <Moviecard key={movie.title} movie={movie} />
        ))}
    </div>
   );

};
export default Movielist