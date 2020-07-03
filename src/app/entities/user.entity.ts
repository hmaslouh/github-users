export class User {
    public static fromJson(json: Object): User {
        return new User(
            json['login'],
            json['name'],
            json['bio'],
            json['public_repos'],
            json['company'],
            json['location'],
            json['blog']
        );
    }

    constructor(public username: string,
                public name: string,
                public bio: string,
                public public_repos: string,
                public company: string,
                public location: string,
                public blog: string) {
    }
}