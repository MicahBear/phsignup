export default function InputForm() {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mr-2 flex-shrink flex-grow">
        <p>Sign up to get access to beta.</p>

        <input
          className=" rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
          onChangeHandler={setEmail}
          type="email"
          value={email}
          placeholder="your@email.com"
          name=""
        />
        <button
          className="inline-flex font-semibold rounded-md shadow-lg p-3"
          type="submit"
          formValues={[email]}
        >
          sign up
        </button>
      </div>
    </form>
  );
}
