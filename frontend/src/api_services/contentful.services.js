//initialize contentful
const client = require('contentful').createClient({
    space: 'n041sndlsw1t',
    accessToken: 'Bu4RwmRWubJ2JzRGJxE-uf1ikkfpCa7XoUgVMx12pnE'
})
export const getAllEntries = () =>
    client.getEntries()
        .then(entries => entries.items)


        .catch(err => {
            console.log(err + 'ACCESS DENIED! Check the file Contentful.js and getAllinfo')
        })


