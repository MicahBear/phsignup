function App() {
  return (
    <div className="App">
      <main className="flex items-center justify-center">
        <section className="basis-1/2 ">
          <div className="">
            <h1 className="bg-slate-500">Personal Hoe</h1>
            <h1>Your Gardening Assistant</h1>
            <p>
              Personal Hoe creates an easy follow grow calendar based on your
              grow zone.
            </p>
            <span>
              Provides a daily forecast and aggregates your plant notes.
            </span>
          </div>
          <div>
            <form>
              <span>Sign up to get access to beta.</span>
              <input
                type="text"
                placeholder="youremail@email.com"
                name=""
                id=""
              />
            </form>
          </div>
        </section>
        <section className="mx-auto basis-1/2">
          <img
            className="drop-shadow rounded-sm"
            src="./src/imgs/screely-1675305057167.png"
            alt="image of website mockup"
            srcset=""
          />
        </section>
      </main>
    </div>
  );
}

export default App;
