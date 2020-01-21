# Design System Starter Kit 
CSS compilation, organization, configuration
> EXTRAS: some web-component and react magic, gloablization


## Local Development
1. **Install Node**: currently using LTS (v12.13.0) as of 01.07.20
1. **Install dependencies**: 
    * `npm install`
1. **Create a `.env.local` file**: 
    * `cd $PROJECT_DIRECTORY`
    * `touch .env.local`
    * edit file(`.env.local`) to include local env variables: 
        * `REACT_EDITOR=idea` <-- for Intellij Users
        * `API_HOST=http://localhost:3333` <-- Local dev for mock services server
1. **Configure ES-Linting rules with your IDE**:
    * > FYI: es-linting rules in process of being defined
    * Intellij Users: 
        * open `.eslintrc.js`
        * right click anywhere in the file
        * select `Apply ESLint Code Style Rules` 
    * > TODO: add more IDE examples
1. **Start Dev**: 
    * `npm run start`
1. **Start Mock API Server**: 
    * Open a new tab in your CLI
    * `npm run mock-server`
1. **Start Mock API Server (in dev mode)**: 
    * `npm install -g nodemon`
    * `npm run mock-server:dev`
    > Mock server dev mode adds a watcher to reload the server after changes to its files 

### Issues
* not all file changes will initiate a auto rebuild of the app
    * web-component build: css changes sometimes do not force a auto page reload.  resolve by refreshing page after a css/scss changes. 
    * files outside of `src/client`. resolve by a rerun of `npm start`  
* local dev best in chrome
    * local dev currently not working in Safari but distributions and builds do
