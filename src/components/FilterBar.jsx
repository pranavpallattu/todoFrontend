const FilterBar = ({ status, setStatus, sort, setSort }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-3 bg-slate-800 p-4 rounded-2xl">
      <div className="bg-indigo-100 rounded-xl p-2 text-sm text-slate-800 w-full sm:w-auto">
        <label htmlFor="filter" className="mr-2 font-semibold">
          Filter By :{" "}
        </label>
        <select
          name="filter"
          id="filter"
          className="p-1 rounded-md bg-white w-full sm:w-auto"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option className="font-semibold w-full" value="">
            All
          </option>
          <option className="font-semibold w-full" value="completed">
            Completed
          </option>
          <option className="font-semibold w-full" value="pending">
            Pending
          </option>
        </select>
      </div>
      <div className="bg-indigo-100 rounded-xl p-2 text-sm text-slate-800 w-full sm:w-auto">
        <label htmlFor="sort" className="mr-2 font-semibold">
          Sort By :{" "}
        </label>
        <select
          name="sort"
          id="sort"
          className="p-1 rounded-md bg-white  w-full sm:w-auto"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option className="font-semibold" value="desc">
            Newest
          </option>
          <option className="font-semibold" value="asc">
            Oldest
          </option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
