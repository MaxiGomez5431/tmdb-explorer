function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div className="bg-TMDB-900 p-8 rounded shadow-md max-w-md w-full flex flex-col justify-around items-center space-y-3">
        <h1 className="text-6xl text-red-500 font-bold">Oops!</h1>
        <p className="text-xl text-white">Something went wrong.</p>
        <p className="text-lg text-white">Please try again later or go back to the homepage.</p>
        <a href="/" className="whiteBtn !m-5">
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;