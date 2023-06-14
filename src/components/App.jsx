// import { Container } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { Movies } from './Movies/Movies';
import Layout from './Layout/Layout';
import MoviesDetails from './MoviesDetails/MoviesDetails';
import Casts from './Casts/Casts';
import Reviews from './Reviews/Reviews';
// import ExtraInfo from './ExtraInfo/ExtraInfo';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="casts" element={<Casts />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<div> Nothing found </div>} />
      </Route>
    </Routes>
  );
};
