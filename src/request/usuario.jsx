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
            setUsuarios(data);
        }})
        .catch(error => {
            console.error(error);
        });
    }, []);

    return usuarios;
};

export const createUser = async (user) => {
    return fetch(`${API_ENDPOINT}/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  };
  
  export const deleteUser = async (userId) => {
    return fetch(`${API_ENDPOINT}/usuarios/${userId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  };
  
  export const updateUser = async (userId, updatedUser) => {
    return fetch(`${API_ENDPOINT}/usuarios/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  };