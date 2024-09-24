import {IsEmail, IsString, Length, Min} from 'class-validator'

export class UserDto{
    @IsString()
    @IsEmail({}, { message: 'Invalid email address' })
    username:string

    @IsString()
    @Length(5, 100, { message: 'Password must be at least 5 characters long' })
    password:string
}