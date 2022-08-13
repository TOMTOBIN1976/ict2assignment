import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getMoviesUpcoming } from "../api/tmdb-api";
import { getMoviesPopular } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'


//useQuery hook uses the second argument (getMoviesPopular) to perform the HTTP request;
// the first argument is the cache entry which us in use ensuring cache is in use
const PopularMoviesPage  = () => {
  const {  data, error, isLoading, isError }  = useQuery('discoverPopular', getMoviesPopular)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // These three lines are redundant; we will replace them laterg.
  const favourites = movies.filter(m => m.favouurite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <PageTemplate
      title="Discover Popular Movies!"
      movies={movies}
      action={(movie) => {
      //  return <AddToFavouritesIcon movie={movie} />
          return <AddToPlaylistIcon movie={movie} />
      }}
    />
);
};

export default PopularMoviesPage ;