import axios from 'axios';

//simple dev environment check so after deployment we don't have manually change the url everytime
const isDev = window.location.hostname === 'location';
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
export const getStories = () => axios.get(STORY_URL)
    .then(response => response.data)
    .catch(error => console.log(error));

//get one userstory
export const getStory = storyId => axios.get(STORY_URL + `/${storyId}`)
    .then(response => response.data)
    .catch(error => console.log(error));

//create userstory
//parameter is an object with property of title -> more added later?
export const createStory = async (story) => {
    const savedStory = {title: story.title};

    try {
        const response = await axios.post(STORY_URL, savedStory);
        console.log('Story saved', response.data);
    } catch (error) {
        console.log('Story not saved', error);
    }
}

//update userstory

//delete
export const deleteStory = async (storyId) => {
    const DELETE_URL = STORY_URL + `/${storyId}`;
    try {
        const response = await axios.delete(DELETE_URL);
        console.log('Story deleted', response.data);
    } catch (error) {
        console.log('Story not deleted', error);
    }
}