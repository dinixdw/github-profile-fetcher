"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    constructor(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
}
exports.user = user;
