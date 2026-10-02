import { GitHubAPIService } from './GitHubAPIService';
import { user } from './user';
import { repo } from './repo';

let svc = new GitHubAPIService();

svc.getUserInfo('Dinithi', (user: user) => {
    console.log(user);
});

svc.getRepos('Dinithi', (repos: repo[]) => {
    console.log(repos);
});