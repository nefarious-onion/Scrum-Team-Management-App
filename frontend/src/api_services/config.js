//simple dev environment check so after deployment we don't have manually change the url everytime
const isDev = window.location.hostname === 'localhost';
//if server is running on localhost, baseurl is set to be different from when it will be running on heroku
export const baseUrl = isDev ? 'http://localhost:5000/api/' : '/api/';

//default list IDs for lists
export const sprintlogId = '5ed4dd9383e6833174ec0bc3';
export const backlogId = '5ed62a5e1940ce0f684b6b37';
export const progresslogId = '5ed4ddc583e6833174ec0bc4';
export const reviewlogId = '5ed4ddfd83e6833174ec0bc5';
export const donelogId = '5ed624db56b733499ca332d8';