import axios from 'axios';
import { baseUrl } from './config';

const SCRUMLIST_URL = `${baseUrl}scrumlist`;

//EXPORTED FUNCTIONS + PARAMETERS
// getLists
// getList -- listId

//get all lists
/**
 * @returns {Promise} List of Scrumlists
 */
export const getLists = () => axios.get(SCRUMLIST_URL)
    .then(response => response.data)
    .catch(error => console.log('Something went wrong!', error));

//get one list
/**
 * @param {string} listId list id from database
 * @returns {Promise} single list
 */
export const getList = listId => axios.get(`${SCRUMLIST_URL}/${listId}`)
    .then(response => response.data)
    .catch(error => console.log('Something went wrong!', error));
