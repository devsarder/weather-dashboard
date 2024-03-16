import { useContext, useEffect, useState } from "react";
import ReadHearIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";
export default function AddToFavourite() {
  const [isFavourite, toggleFavourite] = useState(false); //useState for handle toggling
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const { weather } = useContext(WeatherContext);
  const { latitude, longitude, location } = weather;
  // use effect to handle fav icon
  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFavourite(found);
  }, [favourites, location]);
  // toggle handler
  const handleFavourites = () => {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    toggleFavourite(!isFavourite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? ReadHearIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
