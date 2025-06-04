export interface UserModel{
    username: string,
    email: string,
    password: string,
    fullName: string,
    phoneNumber: string
}

export interface UserResponseModel{
    users: UserModel[];
    statusCode: number;
    message: string;
}