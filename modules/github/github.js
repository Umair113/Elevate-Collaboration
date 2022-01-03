const axios = require('axios');

class GithubInterface {
    
    constructor(config) {
        this.token= config.token;
        this.owner=config.owner;
    }

    addRespository(name){
        const url="https://api.github.com/user/repos";
        return axios.post(url,{name},{headers:{
         'Authorization':`token ${this.token}`   
        }});
    }
    addCollaborator(repoName,collaboratorName){
        const url=`https://api.github.com/repos/${this.owner}/${repoName}/collaborators/${collaboratorName}`;
        return axios.put(url,{permission:"push"},{headers:{
         'Authorization':`token ${this.token}`   
        }});
    }

}

let githubInstance;

function createGithubInterface(){
    if(!githubInstance){
        githubInstance=new GithubInterface({
            token: process.env.GIT_TOKEN || '',
            owner: process.env.GIT_OWNER || 'Umair113'
        });
    }
    return githubInstance;
}

module.exports = {createGithubInterface};