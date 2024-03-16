import { useLocalStorage } from "../components/hooks";
import { FavouriteContext } from "../context";

const FvouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  //   update favourtie list
  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude,
        longitude,
        location,
      },
    ]);
  };
  //   remove from favouritelist
  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter((fvrt) => {
      fvrt.location !== location;
    });
    setFavourites(restFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
export default FvouriteProvider;
