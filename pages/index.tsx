export default function MoviesClient({ movies }: any) {
  return (
    <div className="grid grid-cols-5">
      {movies.map((movie: any) => (
        <div
          className="bg-slate-500 m-6 text-white text-center p-6 rounded"
          key={movie._id}
        >
          <figure className="aspect-[3/4] bg-slate-300 relative overflow-hidden rounded mb-2">
            <img src={movie.poster} alt="" />
          </figure>

          {movie.title}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const moviesRequest = await fetch("http://localhost:8000/movies");
  const moviesData = await moviesRequest.json();
  return {
    props: {
      movies: moviesData,
    },
  };
}
