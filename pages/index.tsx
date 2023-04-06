export default function MoviesClient({ movies }: any) {
  return (
    <>
      Movie
      <div>{movies[0].title}</div>
    </>
  );
}

export async function getServerSieProps() {
  const moviesRequest = await fetch("http://localhost:8000/movies");
  const moviesData = await moviesRequest.json();
  // console.log(moviesData);
  return {
    props: {
      movies: moviesData,
    },
  };
}
