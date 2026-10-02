"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GitHubAPIService_1 = require("./GitHubAPIService");
let svc = new GitHubAPIService_1.GitHubAPIService();
svc.getUserInfo('Dinithi', (user) => {
    console.log(user);
});
svc.getRepos('Dinithi', (repos) => {
    console.log(repos);
});
