import { useEffect, useState } from "react";
import Constants from 'expo-constants';

const API_ENDPOINT = Constants.manifest.extra.API_ENDPOINT;

export const getMadeForYou = () => {
const [madeforyou, setMadeforyou] = useState([]);

        useEffect(() => {
            fetch(`${API_ENDPOINT}/MadeForYou`)
            .then(response => response.json())
            .then(data =>{
                if (data.length > 0) {
                    setMadeforyou(data);
                }})
                .catch(error => {
                    console.error(error);
                });
            }, []);

            return madeforyou;
        }