export interface User {
    id: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    gender?: string;
    address?: string;
}

export interface AppData {
    activeUser : User | undefined;
}

