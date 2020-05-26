# Scrum-Team-Management-App

## Frontend
No separate production/development environments yet. Start the dev server with:
```js
npm start 
```
## Backend:
### Dev environment with nodemon and local server:
```js
npm run start:dev
```
### Production environment with heroku settings:
```js
npm start
```

## Git / Github

Working branch for development merges: dev  
Deployment branch for Heroku: master

Workflow:
- create a feature branch for development
- try to be mindful what changes you commit and how you name the commits
- create a pull request when feature is ready and working
- resolve possible conflicts
- pull request is then reviewed by someone in the team (review checklist below)
- when pull request is accepted, you can merge the feature branch into dev
- if the changes are ready for deployment, merge dev into master

AVOID AT ALL COSTS
- working directly with master -> always merge from dev so we will keep dev up to date and avoid major conflicts between master and dev

## PR & review
Pull request can be made when feature is ready and working, AND the whole app works with the new changes.  
Developer is responsible for solving possible conflicts before the PR can be reviewed.
### Review checklist:
- Is the code readable?
- Is there anything you can see right away that it will not work in the future, something needs to be re-thought, 