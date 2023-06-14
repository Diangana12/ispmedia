import { useEffect, useState } from "react";
import Constants from 'expo-constants';

const API_ENDPOINT = Constants.manifest.extra.API_ENDPOINT;

export const getUpcomingArtists = () => {
const [upcomingArtists, setUpcomingArtists] = useState([]);

        useEffect(() => {
            fetch(`${API_ENDPOINT}/upcomingArtists`)
            .then(response => response.json())
            .then(data =>{
                if (data.length > 0) {
                    setUpcomingArtists(data);
                }})
                .catch(error => {
                    console.error(error);
                });
            }, []);

            return upcomingArtists;
        }