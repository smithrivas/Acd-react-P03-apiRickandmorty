const FormSearch = ({ search, handleChangeSearch, handleForm }) => {
  return (
    <div>
      <form className="form-search" onSubmit={handleForm}>
        <input
          className="search"
          type="text"
          name="search"
          value={search}
          onChange={handleChangeSearch}
          // placeholder="Type a number between 1 and 126"
          placeholder="Type the name of a planet"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FormSearch;
