function App() {
  return (
    <div className="App relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white">
      <main className="flex-shrink-0 flex-grow items-center lg:flex">
        <section className="px-3">
          <div className="">
            <h1 className="mt-0 mb-4 text-4xl font-bold md:text-5xl">
              Personal Hoe
            </h1>
            <h1 className="text-2xl">Your Gardening Assistant</h1>
            <p className="prose prose-xl px-16 text-gray-500 md:px-0">
              Personal Hoe creates an easy follow grow calendar based on your
              grow zone.Provides a daily forecast and aggregates your plant
              notes.
            </p>
          </div>
          <div className="m-0 mt-8 max-w-md md:flex">
            <form>
              <div className="mr-2 flex-shrink flex-grow">
                <p>Sign up to get access to beta.</p>

                <input
                  className=" rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                  type="text"
                  placeholder="youremail@email.com"
                  name=""
                />
                <button
                  className="inline-flex font-semibold rounded-md shadow-lg p-3"
                  type="submit"
                >
                  sign up
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="">
          <img
            className="drop-shadow rounded-sm px-3 w-70"
            src="./src/imgs/screely-1675305057167.png"
            alt="image of website mockup"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
