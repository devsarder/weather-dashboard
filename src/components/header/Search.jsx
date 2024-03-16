import { useContext, useState } from "react";
import SearchSvg from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../hooks";
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(searchTerm);
  //   const searchedLocation = getLocationByName(searchTerm.toLowerCase());
  //   console.log(searchedLocation);
  //   setSelectedLocation({ ...searchedLocation });
  // };
  const doSearch = useDebounce((term) => {
    const searchedLocation = getLocationByName(term.toLowerCase());
    console.log(searchedLocation);
    setSelectedLocation({ ...searchedLocation });
  }, 1000);
  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          onChange={handleChange}
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={SearchSvg} />
        </button>
      </div>
    </form>
  );
}
