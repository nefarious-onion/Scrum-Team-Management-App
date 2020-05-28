import axios from 'axios';

//simple dev environment check so after deployment we don't have manually change the url everytime
const isDev = window.location.hostname === 'localhost';
//if server is running on localhost, baseurl is set to be different from when it will be running on heroku
const baseUrl = isDev ? 'http://localhost:5000/' : '/';

const STORY_URL = baseUrl + 'userstory';

//EXPORTED FUNCTIONS + required parameters:
// getStories
// getStory --- storyId
// createStory --- storyObject
// updateStory --- storyId, storyObject
// deleteStory --- storyID



//get all userstories
/**
 * @returns {Promise} List of userstories
 */
export const getStories = () => axios.get(STORY_URL)
    .then(response => response.data)
    .catch(error => console.log(error));

//get one userstory
/**
 * @param {string} storyId userstory id from database
 * @returns {Promise} single userstory
 */
export const getStory = storyId => axios.get(STORY_URL + `/${storyId}`)
    .then(response => response.data)
    .catch(error => console.log(error));

//create userstory
//takes an object as a parameter
/**
 * @param {Object} userstory created by user
 * @param {string} userstory.title title of the userstory (required)
 * @param {string} userstory.descr description of the userstory (optional)
 * @returns {Promise} saved userstory
 */
export const createStory = async (story) => {
    try {
        const response = await axios.post(STORY_URL, story);
        console.log('Story saved', response.data);
    } catch (error) {
        console.log('Story not saved', error);
    }
}

//update userstory

//delete
/**
 * @param {string} storyId userstory id from database
 * @returns {Promise} deleted userstory
 */
export const deleteStory = async (storyId) => {
    const DELETE_URL = STORY_URL + `/${storyId}`;
    try {
        const response = await axios.delete(DELETE_URL);
        console.log('Story deleted', response.data);
    } catch (error) {
        console.log('Story not deleted', error);
    }
}