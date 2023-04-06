export default function MoviesClient({ movies }: any) {
  return (
    <>
      <div>{movies}</div>
      {console.log(movies)}
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
