import { useEffect, useState } from "react";
import Constants from 'expo-constants';

const API_ENDPOINT = Constants.manifest.extra.API_ENDPOINT;

export const getMostPlayed = () => {
const [mostplayed, setMostplayed] = useState([]);

        useEffect(() => {
            fetch(`${API_ENDPOINT}/mostPlayed`)
            .then(response => response.json())
            .then(data =>{
                if (data.length > 0) {
                    setMostplayed(data);
                }})
                .catch(error => {
                    console.error(error);
                });
            }, []);

            return mostplayed;
        }