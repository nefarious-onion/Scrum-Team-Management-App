import axios from 'axios';
import { baseUrl } from './config';

const SCRUMLIST_URL = `${baseUrl}scrumlist`;

//get all lists
export const getLists = () => axios.get(SCRUMLIST_URL)
    .then(response => response.data)
    .catch(error => console.log('Something went wrong!', error));

//get one list
export const getList = listId => axios.get(`${SCRUMLIST_URL}/${listId}`)
    .then(response => response.data)
    .catch(error => console.log('Something went wrong!', error));

//update a list
export const updateList = async () => {
    
}