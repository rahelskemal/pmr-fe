import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

const YOUR_API_KEY = 'AIzaSyBqKewTKWtFlWo7dl-rlclEgyVP2RYkNG8'
const URL = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json'


// const GEOCODE_API_KEY =
const GEOCODE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${YOUR_API_KEY}`;



const NearbyParks = () => {
    // const [parks, setParks] = useState([]);
    const [location, setLocation] = useState(null);

    const { user } = useAuth();

    const address = {
        street: user?.street,
        city: user?.city,
        state: user?.state
    }

    const fullAddress = `${address.street} ${address.city}, ${address.state}`;
    


    useEffect(() => {
        axios.get(GEOCODE_URL, {
        params: {
            address: fullAddress
        }
        
        })
        .then(response => {
            const lat = response.data.results[0].geometry.location.lat;
            const lng = response.data.results[0].geometry.location.lng;
            setLocation(`${lat},${lng}`);
        
            
            
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    
    console.log(location)
    // const locObj = {lat:location[0], lng:location[1]};
    // console.log(locObj)

    useEffect(() => {
        const address = new window.google.maps.LatLng(34.0679244,-118.2366644);
        console.log(address)
        const infowindow = new window.google.maps.InfoWindow();
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: address,
            zoom: 15,
        });
    
        const request = {
            location: address,
            radius: "1000",
            type: ["park"],
        };
    
        const service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    createMarker(results[i], infowindow, map);
            }
        }
        });
    }, []);
    
        return <div id="map" style={{ height: "400px", width: "100%" }} />;
    };
    
    const createMarker = (place, infowindow, map) => {
        const marker = new window.google.maps.Marker({
        map,
        position: place.geometry.location,
    });
    
        window.google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map, marker);
    });
    };
    

export default NearbyParks;





// ++++ OLD CODE +++++++++

    // console.log(location)
    // useEffect(() => {
    //     axios.get(URL, {
    //     params: {
    //         location: location,
    //         radius: 5000,
    //         type: 'park',
    //         key: YOUR_API_KEY
    //     }
    //     })
    //     .then(response => {
    //         setParks(response.data.results);
    //         console.log(response.data.results);
    //         // console.log("hello")
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });
    // }, [location]);

    // const parksList = [];

    // for (let i = 0; i < parks.length; i++) {
    //     const park = parks[i];
    //     const name = park.name;
    //     // const lat = park.geometry.location.lat;
    //     // const lng = park.geometry.location.lng;
    //     const address = park.vicinity;



    //     parksList.push(
    //         <div key={i}>
    //             <h2>{name}</h2>
    //             {/* <p>Latitude: {lat}</p> */}
    //             {/* <p>Longitude: {lng}</p> */}
    //             <p>Address: {address}</p>
    //         </div>
    
    //         );
    //     }

    //     return (
    //         <div>
    //         <h1> Parks Near You:</h1>
    //         <ul> 
    //             {parksList.map((parks) => (
    //             <ul key={parks}> Parks You can Run to: {parks}</ul>
    //             ))}    
    //             </ul>
    //         </div>
    //     );
    //     };
    
