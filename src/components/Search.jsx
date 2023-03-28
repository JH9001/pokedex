import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearch } = useGlobalContext();

  console.log(setSearch);
  return <div>Search</div>;
};
export default Search;
