export const fetchMovieDetails = async ( id : string) => {
    const res=await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGU2ZWI1MGJhNDlhZjc5NGQ0ZjU3Y2RmODBlMWZiYSIsInN1YiI6IjY1NzQ3MTRjYTFkMzMyMDBmZWJjN2JlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9q2KSSII7mZWiHTemmPJ6YdNGSERPhzbNwRebGBNt1Y'
            },
        }
    );
    return res.json()
}