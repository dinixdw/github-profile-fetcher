import { repo } from './repo';

export class user {
    login!: string;
    fullName!: string;
    repoCount!: number;
    followerCount!: number;
    repos!: repo[];

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
}
