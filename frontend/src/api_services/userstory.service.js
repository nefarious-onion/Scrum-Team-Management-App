import axios from 'axios';
import { baseUrl } from './config';

const SCRUMLIST_URL = `${baseUrl}scrumlist`;
let scrumListId = '123';
const STORY_URL = `${SCRUMLIST_URL}/${scrumListId}/userstory`;


//EXPORTED FUNCTIONS + required parameters:
// getStory --- storyId
// createStory --- storyObject
// updateStory --- storyId, storyObject
// deleteStory --- storyID

//get one userstory
/**
 * @param {string} storyId userstory id from database
 * @returns {Promise} single userstory
 */
export const getStory = (storyId) => axios.get(`${STORY_URL}/${storyId}`)
    .then(response => response.data)
    .catch(error => console.log(error));

//create userstory
//takes an object as a parameter
/**
 * @param {string} listId list id from database
 * @param {Object} userstory userstory as an object
 * @param {string} userstory.title 
 * @param {string} userstory.descr
 * @returns {Promise} saved userstory
 */
export const createStory = async (listId, userstory) => {
    const POST_URL = `${SCRUMLIST_URL}/${listId}/userstory`;
    try {
        const response = await axios.post(POST_URL, userstory);
        console.log('Story saved', response.data);
    } catch (error) {
        console.log('Story not saved', error);
    }
}

//update userstory
/**
 * @param {string} storyId userstory id from database
 * @param {Object} updatedData updated userstory as an object
 * @param {string} updatedData.title
 * @param {string} updatedData.descr
 * @returns {Promise} updated userstory
 */
export const updateStory = async (storyId, updatedData) => {
    const PATCH_URL = `${STORY_URL}/${storyId}`;
    try {
        const response = await axios.patch(PATCH_URL, updatedData);
        console.log('Story updated', response.data);
    } catch (error) {
        console.log('Story not uodated', error);
    }
}

//delete a userstory
/**
 * @param {string} storyId userstory id from database
 * @returns {Promise} deleted userstory
 */
export const deleteStory = async (storyId) => {
    const DELETE_URL = `${STORY_URL}/${storyId}`;
    try {
        const response = await axios.delete(DELETE_URL);
        console.log('Story deleted', response.data);
    } catch (error) {
        console.log('Story not deleted', error);
    }
}