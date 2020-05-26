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
- feature branches for development
- merge working feature into dev
- merge dev into master

AVOID AT ALL COSTS
- working directly with master -> always merge from dev so we will keep dev up to date and avoid major conflicts between master and dev