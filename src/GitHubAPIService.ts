import * as request from 'request';
import { user } from './user';
import { repo } from './repo';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GitHubAPIService {
    
    getUserInfo(userName: string, callback: (userObj: user) => any) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any, response: any, body: any) => {
            let userInfo = new user(body);
            callback(userInfo);
        });
    }

    getRepos(userName: string, callback: (reposArray: repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            let repos: repo[] = body.map((item: any) => new repo());
            callback(repos);
        });
    }
}