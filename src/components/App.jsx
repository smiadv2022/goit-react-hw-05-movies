// import { Container } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { Movies } from './Movies/Movies';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />

        {/* <Route path="movies" element={<Movies />} /> */}
      </Route>
    </Routes>
  );
};
