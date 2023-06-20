const BASE_URL = 'https://api.themoviedb.org/3/';

const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

export async function getMoviesSearch(search, page) {
  // console.log(page, '___________________', search);
  const response = await fetch(
    `${BASE_URL}search/movie?query=${search}&page=${page}&api_key=${API_KEY}`
  );

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}

export async function getMovieInfo({ movieId }) {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}

export async function getMoviesTranding() {
  const response = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  // console.log('responseget', response.json());
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}

export async function getMovieCasts({ movieId }) {
  // search = 'cat';
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}

export async function getMovieReviews({ movieId }) {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}
