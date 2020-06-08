//simple dev environment check so after deployment we don't have manually change the url everytime
const isDev = window.location.hostname === 'localhost';
//if server is running on localhost, baseurl is set to be different from when it will be running on heroku
export const baseUrl = isDev ? 'http://localhost:5000/api/' : '/api/';


