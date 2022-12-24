export interface User {
    uid?: string
    username: string;
    experience: number;
    programmingLanguages: string;
    image: string;
    aboutMe: string;
    linkedInUrl?: string
    role: UserRole
    email: string
}

export interface UserForm {
    username: string;
    experience: number | string;
    email: string;
    password: string;
    programmingLanguages: string;
    aboutMe: string;
    type?: RoleType
}

export type EditUserForm = Omit<UserForm, "password">;

export enum UserRole {
    Admin = "Admin",
    User = "User"
}

export enum RoleType {
    Moderator = 'Moderator',
    Owner = 'Owner'
}

