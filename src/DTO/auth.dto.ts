import { IsNotEmpty, Length,IsEmail } from "class-validator"

export class SignUpDTO {
    @IsNotEmpty({message: "username is required"})
    @Length(4,50)
    username: string

    @IsEmail()
    email:string

    @Length(8,16)
    password: string
}