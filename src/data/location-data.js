const locations = [
         { location: "New York", latitude: 40.7128, longitude: -74.0060 },
        { location: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
        { location: "London", latitude: 51.5074, longitude: -0.1278 },
        { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 }, 
        { location: "Milan", latitude: 45.4642, longitude: 9.1900 }
]
export function getLocations(){
    return locations;
}
export function getLocationByName(location){
    const searchedLocation = locations.filter(item => item.location.toLowerCase() === location)
    if(searchedLocation){
        return searchedLocation[0];
    }else {
        return {
            location:'',
            latitude:0,
            longitude:0
        }
    }
}