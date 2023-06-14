import { useEffect, useState } from "react";
import Constants from 'expo-constants';

const API_ENDPOINT = Constants.manifest.extra.API_ENDPOINT;

export const getNewReleases = () => {
    const [newReleases, setNewReleases] = useState([]);

    useEffect(() => {
        fetch(`${API_ENDPOINT}/newReleases`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setNewReleases(data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return newReleases;
}