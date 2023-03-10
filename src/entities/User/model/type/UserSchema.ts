export interface User {
    id: string;
    username: string;
}

export interface UserSchema {
    authUser?: User;
    _initialized: boolean;
}