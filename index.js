const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,
};

const a = prompt('Какой последний фильм вы посмотрели?'),
      b = prompt('Ваша оценка фильму?'),
      c = prompt('Какой последний фильм вы посмотрели?'),
      d = prompt('Ваша оценка фильму?');



personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;


console.log(personalMovieDB);
