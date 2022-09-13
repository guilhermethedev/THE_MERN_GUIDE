import React from "react"
import PlaceList from "../components/PlaceList"

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most sky scrappers in the world',
        imageUrl: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address: '20 W 34th St., New York, NY 10001, United States',
        coordinates: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most sky scrappers in the world',
        imageUrl: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address: '20 W 34th St., New York, NY 10001, United States',
        coordinates: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    },
];

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />
}

export default UserPlaces