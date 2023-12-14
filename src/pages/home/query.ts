//e4e6eb50ba49af794d4f57cdf80e1fba

export const fetchMovies = async () => {
    const res=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        {
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGU2ZWI1MGJhNDlhZjc5NGQ0ZjU3Y2RmODBlMWZiYSIsInN1YiI6IjY1NzQ3MTRjYTFkMzMyMDBmZWJjN2JlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9q2KSSII7mZWiHTemmPJ6YdNGSERPhzbNwRebGBNt1Y'
            },
        }
    );
    return res.json()
}
//e4e6eb50ba49af794d4f57cdf80e1fba

export const fetchTvShows = async () => {
    const res=await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
        {
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGU2ZWI1MGJhNDlhZjc5NGQ0ZjU3Y2RmODBlMWZiYSIsInN1YiI6IjY1NzQ3MTRjYTFkMzMyMDBmZWJjN2JlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9q2KSSII7mZWiHTemmPJ6YdNGSERPhzbNwRebGBNt1Y'
            },
        }
    );
    return res.json()
}