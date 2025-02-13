"use client";


import {Container, FormControl, FormGroup} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import {Button} from '@mui/material';
import { TextField } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form"
import {Input} from '@mui/material';

type Inputs = {
    usernameRequired: string,
    emailRequired: string,
    passwordRequired: string
}

export default function  SignUp() {
    
    const { register, handleSubmit, formState: { errors }} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <>
            <Container maxWidth="lg" disableGutters sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel>Username</FormLabel>
                    <Input {...register("usernameRequired")} id='userName' type='text'/>
                    <FormLabel>Email</FormLabel>
                    <Input {...register("emailRequired")} id='email' type='email'/>
                    <FormLabel>Password</FormLabel>
                    <Input {...register("passwordRequired")} id='password' type='password'/>
                    <Input type='submit'/>
                </form>
            </Container>
        </>
    )
}