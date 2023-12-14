export const fetchRatedMovies = async () => {
    const res=await fetch(`https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=e4e6eb50ba49af794d4f57cdf80e1fba`);
    return res.json()
}

export const fetchRatedTvSHow = async () => {
    const res=await fetch(`https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=e4e6eb50ba49af794d4f57cdf80e1fba`);
    return res.json()
}