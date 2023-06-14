import { useEffect, useState } from "react";
import Constants from 'expo-constants';

const API_ENDPOINT = Constants.manifest.extra.API_ENDPOINT;

export const getUser = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch(`${API_ENDPOINT}/usuarios`)
        .then(response => response.json())
    .then(data =>{
        if (data.length > 0) {
            setUsuarios(data[0]);
        }})
        .catch(error => {
            console.error(error);
        });
    }, []);

    return usuarios;
}