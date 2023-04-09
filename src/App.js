import React, { useState } from 'react';
import './App.css'
import Filter from './components/filter';
import Movielist from './components/MovieList';

function App () {
  const [movies, setMovies] = useState([
    {
        id: 1,
        title: "LE PETIT SAM",
        description: "Le film retrace le parcours du jeune Junior MEKA, mais aussi celle de son icône SSamuel Eto'o, footballeur de génie, de son sacre européen avec...",
        posterURL: "https://www.canalolympia.com/wp-content/uploads/covers/le-petit-sam-cover-240x356.jpg",
        rating: 4.5,
    },
    {
        id: 2,
        title: "SHAZAM! LA RAGE DES DIEUX",
        description: "Suite des aventures de Billy Batson, ado capable de devenir un super-héros adulte lorsqu'il prononce le mot...",
        posterURL: "https://www.canalolympia.com/wp-content/uploads/covers/shazam-la-rage-des-dieux-cover-240x356.jpg",
        rating: 3.5,
    },
    {
        id: 3,
        title: "Les Trois Mousquetaires",
        description: "Les Trois Mousquetaires : D'Artagnan, nouveau Cyrano de Bergerac ? Sire Seydoux nous donne son pardon. Il quarte du pied, escarmouche, il coupe, il feinte, mais hélas donc : la fin de l'envoi point ne touche.",
        posterURL: "https://www.ecranlarge.com/media/cache/637x637/uploads/image/001/459/les-trois-mousquetaires-partie-1-dartagnan-affiche-francaise-1459148.jpg",
        rating: 3.5,
    },
    {
        id: 4,
        title: "Creed III",
        description: "Idole de la boxe et entouré de sa famille, Adonis Creed n’a plus rien à prouver. Jusqu’à au jour où son ami d’enfance, Damian (Jonathan Majors), prodige de la boxe lui aussi, refait surface. A peine sorti de prison, Damia..",
        posterURL: "https://www.pathe.sn/media/movie/alex/HO00000067/poster/md/7/movie&uuid=1F56F0EC-7D17-4965-BA19-C8CD987E2B47",
        rating: 5,
    },
    {
        id: 5,
        title: "Tirailleurs",
        description: "1917. Bakary Diallo s'enrôle dans l'armée française pour rejoindre Thierno, son fils de 17 ans, qui a été recruté de force. Envoyés sur le front, père et fils vont devoir affronter la guerre ensemble. Galvanisé par la fougue de...",
        posterURL: "https://www.pathe.sn/media/movie/alex/HO00000043/poster/md/2/movie&uuid=5159B0A8-3D90-411B-B6D1-BA88D43E3E76",
        rating: 5,
    },
    {
        id: 6,
        title: "Emmett Till",
        description: "D’après une histoire vraie. Jeune veuve élevant seule son fils de 14 ans, Mamie Till-Mobley est aussi l’unique femme noire travaillant pour la US Air Force à Chicago. Quand Emmett est assassiné parce qu’il aurait sifflé",
        posterURL: "https://www.pathe.sn/media/movie/alex/HO00000094/poster/md/2/movie&uuid=CBC45F3C-D743-426F-B642-E347FEF71391",
        rating: 4.5,
    },
    {
        id: 7,
        title: "Astérix et Obélix : L’Empire du Milieu",
        description: "Nous sommes en 50 avant J.C. L’Impératrice de Chine est emprisonnée suite à un coup d’état fomenté par Deng Tsin Quin, un prince félon. Aidée par Graindemaïs, le marchand phénicien, et par sa fidèle guerrière Tat",
        posterURL: "https://www.pathe.sn/media/movie/alex/HO00000058/poster/md/2/movie&uuid=70BF0396-B224-4A2D-82C4-7691AC396E18",
        rating: 3,
    },
    {
        id: 8,
        title: "Super Mario Bros, le film",
        description: "Les studios Illuminations et Nintendo s’associent pour produire le film basé sur l’univers du célèbre jeu : Super Mario Bros. Réalisé par Aaron Horvath et Michael Jelenic (qui avaient déjà travaillé ensemble sur la série",
        posterURL: "https://www.pathe.sn/media/movie/alex/HO00000081/poster/md/2/movie&uuid=4D5E034D-56A7-4130-8CB9-ACB5E2337292",
        rating: 5,
    },
   /* {
        id: 9,
        title: "Scream VI",
        description: "Après les derniers meurtres de Ghostface, quatre survivants quittent Woodsboro pour un nouveau chapitre. Dans Scream VI, Melissa Barrera (“Sam Carpenter”), Jasmin Savoy Brown (“Mindy Meeks-Martin”), Mason",
        posterURL: "https://www.pathe.sn/media/movie/alex/HO00000071/poster/md/11/movie&uuid=EB33EEFA-75DB-499A-81A0-3AB7418E79FC",
        rating: 3.5,
    },*/
]);
const [titleFilter, setTitleFilter] = useState('')
const [ratingFilter, setRatingFilter] = useState(0)

const handleTitleFilter = (event) => {
  setTitleFilter(event.target.value)
};
const handleRatingFilter =(event) =>{
  setRatingFilter(event.target.value)
};
//nouveau film add 
const handleAddMovie = (event) =>{
  event.preventDefault();
  const newMovie = {
    title: event.target.title.value,
    description: event.target.description.value,
    posterURL: event.target.posterURL.value,
    rating: parseFloat(event.target.rating.value),
  };
  setMovies([...movies, newMovie]);
  event.target.reset();
};

const filtredMovies = movies.filter((movie)=>{
  return movie.title.toLocaleLowerCase().includes(titleFilter.toLocaleLowerCase()) && movie.rating >=ratingFilter;
});      
    return(
      <div className='app'>
        <h1 style={{color: 'red'}}>GOMYCODE MOVIES</h1>
        <Filter handleTitleFilter={handleTitleFilter} handleRatingFilter={handleRatingFilter} />
        <Movielist movies={filtredMovies} />
        <form onSubmit={handleAddMovie}>
          <input type="text" name="title" className="add-movie-input" placeholder="Titre" />
          <input type="text" name="description" className="add-movie-input" placeholder="description" />
          <input type="text" name="posteURL" className="add-movie-input" placeholder="lien du film" />
          <input type="number" name="Note" className="add-movie-input" placeholder='Note' min="0" max="5" step="0.1" />
          <button type="submit" className="add-movie-button">ajouter un film</button>
        </form>
      </div>
    );
};

export default App;
