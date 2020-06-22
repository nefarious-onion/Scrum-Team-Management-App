//initialize contentful
const client = require('contentful').createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN
})
//passes getAllEntries
export const getAllEntries = () =>
    client.getEntries()
        .then(entries => entries.items)
        .catch(err => {
            console.log(err + 'ACCESS DENIED!')
        })


